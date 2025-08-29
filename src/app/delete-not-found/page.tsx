import { Metadata } from 'next'
import Link from 'next/link'
import { generateSEOMetadata } from '@/components/SEO'

export default function DeleteNotFoundPage() {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <div className="mb-8">
        <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V20a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          블로그 포스트를 찾을 수 없음
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          삭제하려는 블로그 포스트를 찾을 수 없습니다.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          🔍 가능한 이유:
        </h2>
        <ul className="text-gray-700 text-left space-y-2">
          <li>• 블로그 포스트가 이미 삭제되었습니다</li>
          <li>• 파일이 이동되었거나 이름이 변경되었을 수 있습니다</li>
          <li>• 파일 시스템에 기술적 문제가 있을 수 있습니다</li>
          <li>• 삭제 링크가 존재하지 않는 포스트를 참조하고 있습니다</li>
        </ul>
      </div>

      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-green-800 mb-2">
          ✅ 좋은 소식!
        </h2>
        <p className="text-green-700">
          콘텐츠를 삭제하려고 했다면, 해당 블로그 포스트가 더 이상 저희 웹사이트에서 제공되지 않으므로 목적을 달성했습니다.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            블로그 둘러보기
          </Link>
          <Link 
            href="/contact"
            className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            고객 지원팀 문의
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          콘텐츠에 대한 우려사항이 있으시면, 저희 고객 지원팀이 도와드리겠습니다.
        </p>
      </div>
    </div>
  )
}

export const metadata: Metadata = generateSEOMetadata({
  title: '블로그 포스트를 찾을 수 없음',
  description: '찾고 있는 블로그 포스트를 찾을 수 없습니다.',
  url: '/delete-not-found',
  type: 'website'
})