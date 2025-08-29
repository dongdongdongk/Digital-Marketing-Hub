import { Metadata } from 'next'
import Link from 'next/link'
import { generateSEOMetadata } from '@/components/SEO'

export default function DeleteSuccessPage() {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <div className="mb-8">
        <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          블로그 포스트 삭제 완료
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          블로그 포스트가 저희 웹사이트에서 영구적으로 삭제되었습니다.
        </p>
      </div>

      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-green-800 mb-2">
          ✅ 무엇이 일어났나요?
        </h2>
        <p className="text-green-700">
          블로그 포스트 삭제 요청이 성공적으로 처리되었습니다. 해당 콘텐츠는 더 이상 저희 웹사이트에서 접근할 수 없습니다.
        </p>
      </div>

      <div className="space-y-4">
        <Link 
          href="/"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          홈으로 돌아가기
        </Link>
        <p className="text-sm text-gray-500">
          궁금한 사항이 있으시면 언제든지 <Link href="/contact" className="text-primary-600 hover:underline">연락해 주세요</Link>.
        </p>
      </div>
    </div>
  )
}

export const metadata: Metadata = generateSEOMetadata({
  title: '블로그 포스트 삭제 완료',
  description: '블로그 포스트 삭제 요청이 성공적으로 처리되었습니다.',
  url: '/delete-success',
  type: 'website'
})