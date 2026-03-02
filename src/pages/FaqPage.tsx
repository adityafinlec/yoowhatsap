import { faqItems } from '../data/content'

export default function FaqPage() {
  return (
    <section>
      <h1 className="text-3xl font-extrabold text-brand-800">प्रश्नोत्तरे</h1>
      <div className="mt-4 space-y-3">
        {faqItems.map((item) => (
          <details key={item.q} className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer font-semibold">{item.q}</summary>
            <p className="mt-2 text-sm text-slate-700">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
