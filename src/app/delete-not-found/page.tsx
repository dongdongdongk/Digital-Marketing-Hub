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
          Blog Post Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The blog post you're trying to delete could not be found.
        </p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          🔍 Possible reasons:
        </h2>
        <ul className="text-gray-700 text-left space-y-2">
          <li>• The blog post has already been deleted</li>
          <li>• The file may have been moved or renamed</li>
          <li>• There might be a technical issue with the file system</li>
          <li>• The deletion link refers to a non-existent post</li>
        </ul>
      </div>

      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-green-800 mb-2">
          ✅ Good news!
        </h2>
        <p className="text-green-700">
          If you were trying to remove content, it appears the blog post is no longer available on our website, which achieves your goal.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Browse Our Blog
          </Link>
          <Link 
            href="/contact"
            className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Contact Support
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          If you have concerns about content, our support team is here to help.
        </p>
      </div>
    </div>
  )
}

export const metadata: Metadata = generateSEOMetadata({
  title: 'Blog Post Not Found',
  description: 'The blog post you are looking for could not be found.',
  url: '/delete-not-found',
  type: 'website'
})