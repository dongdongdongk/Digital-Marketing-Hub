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
          Blog Post Deleted Successfully
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The blog post has been permanently removed from our website.
        </p>
      </div>

      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-green-800 mb-2">
          ✅ What happened?
        </h2>
        <p className="text-green-700">
          Your blog post deletion request has been processed successfully. The content is no longer accessible on our website.
        </p>
      </div>

      <div className="space-y-4">
        <Link 
          href="/"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          Return to Homepage
        </Link>
        <p className="text-sm text-gray-500">
          If you have any questions, please feel free to <Link href="/contact" className="text-primary-600 hover:underline">contact us</Link>.
        </p>
      </div>
    </div>
  )
}

export const metadata: Metadata = generateSEOMetadata({
  title: 'Blog Post Deleted Successfully',
  description: 'Your blog post deletion request has been processed successfully.',
  url: '/delete-success',
  type: 'website'
})