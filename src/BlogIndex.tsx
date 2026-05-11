import { Link } from 'react-router-dom'
import { blogPosts, STATE_NAME } from './blogData'

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-900">California Insurance Guide</Link>
          <a href="tel:800-616-1418" className="hidden sm:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-bold transition text-sm">
            📞 800-616-1418
          </a>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-blue-900 mb-2">{STATE_NAME} Insurance Blog</h1>
        <p className="text-gray-600 mb-8">Latest news, tips, and guides for {STATE_NAME} insurance</p>
        <div className="space-y-6">
          {blogPosts.map(post => (
            <article key={post.slug} className="bg-white rounded-xl shadow p-6 border border-gray-100">
              <p className="text-sm text-blue-600 mb-1">{post.date}</p>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                <Link to={`/blog/${post.slug}`} className="hover:text-blue-700 transition">{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-3">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="text-blue-700 font-semibold text-sm hover:text-blue-900">
                Read more →
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/" className="text-blue-700 hover:text-blue-900 font-semibold">← Back to Home</Link>
        </div>
      </main>
    </div>
  )
}
