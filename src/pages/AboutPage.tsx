export default function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-extrabold text-brand-800">आमच्याविषयी</h1>
      <p className="rounded-xl bg-white p-5 text-slate-700 shadow-sm">
        विमा दिशा हे मराठी वाचकांसाठी तयार केलेले सार्वजनिक माहिती पोर्टल आहे. आमचा उद्देश विमा उत्पादनांची विक्री करणे नाही,
        तर सोप्या भाषेत शिक्षण देऊन योग्य निर्णय घेण्यासाठी मदत करणे आहे.
      </p>
      <img src="/images/marathi-insurance-knowledge.svg" alt="मराठी विमा मार्गदर्शन चित्र" className="w-full rounded-xl border border-slate-200 bg-white p-2" />
    </section>
  )
}
