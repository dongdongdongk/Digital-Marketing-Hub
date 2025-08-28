import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const TokenManager = require('../../../../scripts/utils/token-manager')

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.json(
        { error: 'Delete token is required' },
        { status: 400 }
      )
    }

    const tokenManager = new TokenManager()
    const decoded = tokenManager.verifyDeleteToken(token)

    if (!decoded) {
      return Response.redirect(new URL('/delete-expired', request.url))
    }

    const { filename, title } = decoded

    // 제목으로 파일 찾기
    const postsDir = path.join(process.cwd(), 'content', 'posts')
    let blogFilePath = path.join(postsDir, filename)
    
    try {
      await fs.access(blogFilePath)
    } catch (error) {
      // 파일명이 정확하지 않으면 제목으로 매칭
      try {
        const files = await fs.readdir(postsDir)
        
        // 각 파일의 제목을 읽어서 매칭
        let foundFile = null
        for (const file of files) {
          if (file.endsWith('.md')) {
            const filePath = path.join(postsDir, file)
            const content = await fs.readFile(filePath, 'utf-8')
            const titleMatch = content.match(/^title:\s*["'](.+)["']/m)
            if (titleMatch && titleMatch[1] === title) {
              foundFile = file
              break
            }
          }
        }
        
        if (foundFile) {
          blogFilePath = path.join(postsDir, foundFile)
          console.log(`Found file by title match: ${foundFile}`)
        } else {
          return Response.redirect(new URL('/delete-not-found', request.url))
        }
      } catch (dirError) {
        console.error('Error searching files:', dirError)
        return Response.redirect(new URL('/delete-not-found', request.url))
      }
    }

    // 파일 삭제
    try {
      await fs.unlink(blogFilePath)
      
      console.log(`Blog deleted: ${filename} - ${title}`)
      
      return Response.redirect(new URL('/delete-success', request.url))
    } catch (deleteError) {
      console.error('Failed to delete blog file:', deleteError)
      return Response.redirect(new URL('/delete-expired?reason=delete_failed', request.url))
    }

  } catch (error) {
    console.error('Delete blog error:', error)
    return Response.redirect(new URL('/delete-expired?reason=server_error', request.url))
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { token } = body

    if (!token) {
      return NextResponse.json(
        { error: 'Delete token is required' },
        { status: 400 }
      )
    }

    const tokenManager = new TokenManager()
    const decoded = tokenManager.verifyDeleteToken(token)

    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      )
    }

    const { filename, title } = decoded

    // 제목으로 파일 찾기
    const postsDir = path.join(process.cwd(), 'content', 'posts')
    let blogFilePath = path.join(postsDir, filename)
    
    try {
      await fs.access(blogFilePath)
    } catch (error) {
      // 파일명이 정확하지 않으면 제목으로 매칭
      try {
        const files = await fs.readdir(postsDir)
        
        // 각 파일의 제목을 읽어서 매칭
        let foundFile = null
        for (const file of files) {
          if (file.endsWith('.md')) {
            const filePath = path.join(postsDir, file)
            const content = await fs.readFile(filePath, 'utf-8')
            const titleMatch = content.match(/^title:\s*["'](.+)["']/m)
            if (titleMatch && titleMatch[1] === title) {
              foundFile = file
              break
            }
          }
        }
        
        if (foundFile) {
          blogFilePath = path.join(postsDir, foundFile)
          console.log(`Found file by title match: ${foundFile}`)
        } else {
          return NextResponse.json(
            { error: 'Blog file not found' },
            { status: 404 }
          )
        }
      } catch (dirError) {
        console.error('Error searching files:', dirError)
        return NextResponse.json(
          { error: 'Blog file not found' },
          { status: 404 }
        )
      }
    }

    // 파일 삭제
    try {
      await fs.unlink(blogFilePath)
      
      console.log(`Blog deleted via API: ${filename} - ${title}`)
      
      return NextResponse.json({
        success: true,
        message: 'Blog successfully deleted',
        filename: filename,
        title: title
      })
    } catch (deleteError) {
      console.error('Failed to delete blog file:', deleteError)
      return Response.redirect(new URL('/delete-expired?reason=delete_failed', request.url))
    }

  } catch (error) {
    console.error('Delete blog API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}