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
          Delete Link Expired
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The deletion link you used has expired or is no longer valid.
        </p>
      </div>

      <div className="bg-amber-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-amber-800 mb-2">
          ⏰ Why did this happen?
        </h2>
        <ul className="text-amber-700 text-left space-y-2">
          <li>• Delete links expire after 7 days for security reasons</li>
          <li>• The link may have already been used</li>
          <li>• The blog post might have been deleted by other means</li>
        </ul>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">
          💡 What can you do?
        </h2>
        <p className="text-blue-700 mb-4">
          If you still need to delete a blog post, please contact our support team directly.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Contact Support
          </Link>
          <Link 
            href="/"
            className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          Our support team will help you with any content removal requests.
        </p>
      </div>
    </div>
  )
}

export const metadata: Metadata = generateSEOMetadata({
  title: 'Delete Link Expired - Contact Support',
  description: 'Your delete link has expired. Contact our support team for assistance with content removal.',
  url: '/delete-expired',
  type: 'website'
})