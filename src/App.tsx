import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Seo from './components/Seo'
import HomePage from './pages/HomePage'
import InsurancePage from './pages/InsurancePage'
import BlogPage from './pages/BlogPage'
import FaqPage from './pages/FaqPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<><Seo title="विमा दिशा | मराठी इन्शुरन्स माहिती" description="मराठीत हेल्थ, टर्म आणि कार इन्शुरन्स माहिती." /><HomePage /></>} />
        <Route path="/health-insurance" element={<><Seo title="हेल्थ इन्शुरन्स | विमा दिशा" description="हेल्थ इन्शुरन्स समजून घेण्यासाठी सोपे मराठी मार्गदर्शन." /><InsurancePage type="health" /></>} />
        <Route path="/term-insurance" element={<><Seo title="टर्म इन्शुरन्स | विमा दिशा" description="टर्म इन्शुरन्सबद्दल स्पष्ट मराठी माहिती." /><InsurancePage type="term" /></>} />
        <Route path="/car-insurance" element={<><Seo title="कार इन्शुरन्स | विमा दिशा" description="कार इन्शुरन्स आणि अॅड-ऑन निवडण्यासाठी मार्गदर्शन." /><InsurancePage type="car" /></>} />
        <Route path="/blog" element={<><Seo title="ब्लॉग | विमा दिशा" description="विमा विषयावरील मराठी ब्लॉग लेख." /><BlogPage /></>} />
        <Route path="/faqs" element={<><Seo title="प्रश्नोत्तरे | विमा दिशा" description="सर्वसामान्य विमा प्रश्नांची सोपी उत्तरे." /><FaqPage /></>} />
        <Route path="/about" element={<><Seo title="आमच्याविषयी | विमा दिशा" description="विमा दिशाच्या उद्देशाबद्दल माहिती." /><AboutPage /></>} />
        <Route path="/contact" element={<><Seo title="संपर्क | विमा दिशा" description="लीड फॉर्म व WhatsApp संपर्क." /><ContactPage /></>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
