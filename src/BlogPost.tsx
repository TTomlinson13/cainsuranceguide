import { useParams, Link } from 'react-router-dom'
import { blogPosts, STATE_NAME } from './blogData'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link to="/blog" className="text-blue-700 hover:text-blue-900">← Back to blog</Link>
        </div>
      </div>
    )
  }

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
      <main className="max-w-3xl mx-auto px-4 py-12">
        <Link to="/blog" className="text-blue-600 text-sm hover:text-blue-900 mb-6 inline-block">← Back to blog</Link>
        <article>
          <p className="text-sm text-blue-600 mb-2">{post.date}</p>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
          <div className="prose max-w-none">
            {post.content.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-700 mb-4">{para}</p>
            ))}
          </div>
        </article>
        <div className="mt-10 p-6 bg-blue-50 rounded-xl text-center">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Ready for a {STATE_NAME} Insurance Quote?</h3>
          <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer"
             className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-3 rounded-xl transition mt-3">
            Get Free Quote →
          </a>
        </div>
      </main>
    </div>
  )
}
