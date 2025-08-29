import { Metadata } from 'next'
import Link from 'next/link'
import { generateSEOMetadata } from '@/components/SEO'

export default function DeleteExpiredPage() {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <div className="mb-8">
        <div className="w-20 h-20 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          삭제 링크 만료
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          사용하신 삭제 링크가 만료되었거나 더 이상 유효하지 않습니다.
        </p>
      </div>

      <div className="bg-amber-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-amber-800 mb-2">
          ⏰ 왜 이런 일이 발생했나요?
        </h2>
        <ul className="text-amber-700 text-left space-y-2">
          <li>• 보안상의 이유로 삭제 링크는 7일 후 만료됩니다</li>
          <li>• 이미 사용된 링크일 수 있습니다</li>
          <li>• 블로그 포스트가 다른 방법으로 삭제되었을 수 있습니다</li>
        </ul>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">
          💡 어떻게 해야 하나요?
        </h2>
        <p className="text-blue-700 mb-4">
          여전히 블로그 포스트를 삭제해야 한다면, 고객 지원팀에 직접 문의해 주세요.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            고객 지원팀 문의
          </Link>
          <Link 
            href="/"
            className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            홈으로 돌아가기
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          저희 고객 지원팀이 콘텐츠 삭제 요청에 대해 도움을 드리겠습니다.
        </p>
      </div>
    </div>
  )
}

export const metadata: Metadata = generateSEOMetadata({
  title: '삭제 링크 만료 - 고객 지원팀 문의',
  description: '삭제 링크가 만료되었습니다. 콘텐츠 삭제 지원을 위해 고객 지원팀에 문의해 주세요.',
  url: '/delete-expired',
  type: 'website'
})