import { insuranceContent } from '../data/content'

type Props = { type: 'health' | 'term' | 'car' }

export default function InsurancePage({ type }: Props) {
  const data = insuranceContent[type]

  return (
    <article className="space-y-6">
      <header className="rounded-xl bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-extrabold text-brand-800">{data.title}</h1>
        <p className="mt-3 text-slate-700">{data.intro}</p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <InfoCard title="महत्त्वाचे मुद्दे" items={data.keyPoints} />
        <InfoCard title="कोणासाठी उपयुक्त" items={data.whoShouldBuy} />
        <InfoCard title="टाळावयाच्या चुका" items={data.mistakes} />
      </section>
    </article>
  )
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-bold">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 ps-5 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}
