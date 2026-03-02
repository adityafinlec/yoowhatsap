import { useState } from 'react'

const insuranceOptions = ['हेल्थ इन्शुरन्स', 'टर्म इन्शुरन्स', 'कार इन्शुरन्स']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', insuranceType: '', pinCode: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const nextErrors: Record<string, string> = {}
    if (!form.name.trim()) nextErrors.name = 'नाव आवश्यक आहे.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'वैध ईमेल लिहा.'
    if (!form.insuranceType) nextErrors.insuranceType = 'इन्शुरन्स प्रकार निवडा.'
    if (!/^\d{6}$/.test(form.pinCode)) nextErrors.pinCode = '६ अंकी पिन कोड लिहा.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!validate()) return
    console.log('Lead submission mock:', form)
    setSubmitted(true)
    setForm({ name: '', email: '', insuranceType: '', pinCode: '' })
  }

  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-extrabold text-brand-800">संपर्क</h1>
        <p className="mt-2 text-slate-600">फॉर्म भरल्यावर आमची टीम मार्गदर्शनासाठी संपर्क करेल.</p>
        <a
          href="https://wa.me/919999999999?text=नमस्कार%2C%20मला%20इन्शुरन्स%20मार्गदर्शन%20हवे%20आहे."
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block rounded-lg bg-green-600 px-4 py-2 font-semibold text-white"
        >
          WhatsApp वर संदेश पाठवा
        </a>
      </div>

      <form className="space-y-4 rounded-xl bg-white p-5 shadow-sm" onSubmit={onSubmit} noValidate>
        <Field label="नाव" error={errors.name}>
          <input className="w-full rounded border p-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </Field>

        <Field label="ईमेल" error={errors.email}>
          <input type="email" className="w-full rounded border p-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </Field>

        <Field label="इन्शुरन्स प्रकार" error={errors.insuranceType}>
          <select className="w-full rounded border p-2" value={form.insuranceType} onChange={(e) => setForm({ ...form, insuranceType: e.target.value })}>
            <option value="">निवडा</option>
            {insuranceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </Field>

        <Field label="पिन कोड" error={errors.pinCode}>
          <input className="w-full rounded border p-2" inputMode="numeric" maxLength={6} value={form.pinCode} onChange={(e) => setForm({ ...form, pinCode: e.target.value.replace(/\D/g, '') })} />
        </Field>

        <button className="rounded bg-brand-600 px-4 py-2 font-semibold text-white" type="submit">माहिती पाठवा</button>
        {submitted && <p className="text-sm font-medium text-green-700">धन्यवाद! तुमची माहिती यशस्वीरीत्या नोंद झाली आहे.</p>}
      </form>
    </section>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      <div className="mt-1">{children}</div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </label>
  )
}
