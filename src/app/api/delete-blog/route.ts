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

    // 블로그 파일 경로
    const blogFilePath = path.join(process.cwd(), 'content', 'posts', filename)

    // 파일 존재 확인
    try {
      await fs.access(blogFilePath)
    } catch (error) {
      return Response.redirect(new URL('/delete-not-found', request.url))
    }

    // 파일 삭제
    try {
      await fs.unlink(blogFilePath)
      
      console.log(`Blog deleted: ${filename} - ${title}`)
      
      return Response.redirect(new URL('/delete-success', request.url))
    } catch (deleteError) {
      console.error('Failed to delete blog file:', deleteError)
      return NextResponse.json(
        { error: 'Failed to delete blog file' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Delete blog error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
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

    // 블로그 파일 경로
    const blogFilePath = path.join(process.cwd(), 'content', 'posts', filename)

    // 파일 존재 확인
    try {
      await fs.access(blogFilePath)
    } catch (error) {
      return NextResponse.json(
        { error: 'Blog file not found' },
        { status: 404 }
      )
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
      return NextResponse.json(
        { error: 'Failed to delete blog file' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Delete blog API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}