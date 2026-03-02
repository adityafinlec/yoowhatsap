import { Link, NavLink } from 'react-router-dom'
import type { PropsWithChildren } from 'react'

const navItems = [
  ['/', 'मुख्यपृष्ठ'],
  ['/health-insurance', 'हेल्थ इन्शुरन्स'],
  ['/term-insurance', 'टर्म इन्शुरन्स'],
  ['/car-insurance', 'कार इन्शुरन्स'],
  ['/blog', 'ब्लॉग'],
  ['/faqs', 'प्रश्नोत्तरे'],
  ['/about', 'आमच्याविषयी'],
  ['/contact', 'संपर्क'],
]

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen font-marathi">
      <header className="bg-brand-800 text-white">
        <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <Link className="text-xl font-extrabold" to="/">
            विमा दिशा
          </Link>
          <div className="flex flex-wrap gap-3 text-sm">
            {navItems.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `rounded px-2 py-1 ${isActive ? 'bg-white text-brand-800' : 'text-slate-100 hover:bg-brand-600'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>

      <footer className="bg-slate-900 text-slate-200">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-8 sm:grid-cols-2">
          <div>
            <h3 className="text-lg font-bold">विमा दिशा</h3>
            <p className="text-sm text-slate-300">सरळ मराठीत विमा शिक्षण. कोणतीही विक्री नाही, फक्त माहिती आणि मार्गदर्शन.</p>
          </div>
          <div>
            <h4 className="font-semibold">त्वरित दुवे</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="https://www.irdai.gov.in" target="_blank" rel="noreferrer">IRDAI</a></li>
              <li><a href="https://www.hdfcergo.com" target="_blank" rel="noreferrer">HDFC ERGO</a></li>
              <li><a href="https://www.tataaig.com" target="_blank" rel="noreferrer">Tata AIG</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
