import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl bg-gradient-to-r from-brand-800 to-brand-600 p-8 text-white">
        <h1 className="text-3xl font-extrabold">मराठीत सोप्या भाषेत इन्शुरन्स समजून घ्या</h1>
        <p className="mt-3 max-w-3xl text-slate-100">
          हेल्थ, टर्म आणि कार इन्शुरन्सबद्दल विश्वासार्ह माहिती, सामान्य प्रश्नांची उत्तरे आणि संपर्क फॉर्मसह सार्वजनिक माहिती पोर्टल.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="rounded bg-white px-4 py-2 font-semibold text-brand-800" to="/health-insurance">हेल्थ इन्शुरन्स वाचा</Link>
          <Link className="rounded border border-white px-4 py-2 font-semibold" to="/contact">संपर्क करा</Link>
        </div>
      </div>

      <img src="/images/insurance-family-shield.svg" alt="विमा जनजागृती AI शैली पोस्टर" className="w-full rounded-xl border border-slate-200 bg-white p-2" />

      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['हेल्थ इन्शुरन्स', '/health-insurance'],
          ['टर्म इन्शुरन्स', '/term-insurance'],
          ['कार इन्शुरन्स', '/car-insurance'],
        ].map(([title, href]) => (
          <Link key={href} to={href} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2 text-sm text-slate-600">मूलभूत माहिती, काय पाहावे, आणि सामान्य चुका यांचे सोपे मार्गदर्शन.</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
