import { blogPosts } from '../data/content'

export default function BlogPage() {
  return (
    <section>
      <h1 className="text-3xl font-extrabold text-brand-800">ब्लॉग</h1>
      <p className="mt-2 text-slate-600">विमा निर्णय घेताना उपयुक्त लेख.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{post.date}</p>
            <h2 className="mt-1 text-xl font-bold">{post.title}</h2>
            <p className="mt-2 text-slate-700">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
