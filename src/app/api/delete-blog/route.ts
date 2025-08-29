import { NextRequest, NextResponse } from 'next/server'
import GitHubAPI from '@/lib/github-api'

const TokenManager = require('../../../../scripts/utils/token-manager')

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const token = searchParams.get('token')

    if (!token) {
      return NextResponse.json(
        { error: '삭제 토큰이 필요합니다' },
        { status: 400 }
      )
    }

    const tokenManager = new TokenManager()
    const decoded = tokenManager.verifyDeleteToken(token)

    if (!decoded) {
      return Response.redirect(new URL('/delete-expired', request.url))
    }

    const { filename, title } = decoded

    // GitHub API를 사용해서 파일 삭제
    try {
      const githubAPI = new GitHubAPI()
      const result = await githubAPI.deleteBlogPost(filename, title)
      
      if (result.success) {
        console.log(`Blog deleted via GitHub API: ${result.deletedFile} - ${title}`)
        return Response.redirect(new URL('/delete-success', request.url))
      } else {
        console.error('GitHub API delete failed:', result.message)
        return Response.redirect(new URL('/delete-not-found', request.url))
      }
    } catch (deleteError) {
      console.error('GitHub API error:', deleteError)
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
        { error: '삭제 토큰이 필요합니다' },
        { status: 400 }
      )
    }

    const tokenManager = new TokenManager()
    const decoded = tokenManager.verifyDeleteToken(token)

    if (!decoded) {
      return NextResponse.json(
        { error: '유효하지 않거나 만료된 토큰입니다' },
        { status: 401 }
      )
    }

    const { filename, title } = decoded

    // GitHub API를 사용해서 파일 삭제
    try {
      const githubAPI = new GitHubAPI()
      const result = await githubAPI.deleteBlogPost(filename, title)
      
      if (result.success) {
        console.log(`Blog deleted via GitHub API: ${result.deletedFile} - ${title}`)
        return NextResponse.json({
          success: true,
          message: result.message,
          filename: filename,
          title: title,
          deletedFile: result.deletedFile
        })
      } else {
        console.error('GitHub API delete failed:', result.message)
        return NextResponse.json(
          { error: result.message },
          { status: 404 }
        )
      }
    } catch (deleteError) {
      console.error('GitHub API error:', deleteError)
      return NextResponse.json(
        { error: deleteError instanceof Error ? deleteError.message : '블로그 파일 삭제에 실패했습니다' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Delete blog API error:', error)
    return NextResponse.json(
      { error: '내부 서버 오류' },
      { status: 500 }
    )
  }
}