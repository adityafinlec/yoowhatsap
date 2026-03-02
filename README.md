# विमा दिशा (React + Vite + TypeScript)

मराठी भाषेत हेल्थ, टर्म आणि कार इन्शुरन्स समजावणारे सार्वजनिक माहिती पोर्टल.

## Stack confirmation
- React + Vite + TypeScript
- Tailwind CSS
- React Router
- सार्वजनिक माहिती साइट (लॉगिन/डॅशबोर्ड नाही)

## Phase 1 (MVP)
- मुख्यपृष्ठ + 3 मुख्य इन्शुरन्स माहिती पृष्ठे
- ब्लॉग लिस्टिंग (२ नमुना पोस्ट)
- प्रश्नोत्तरे पृष्ठ
- संपर्क पृष्ठ (फॉर्म + WhatsApp)
- हेडर/फुटर + बाह्य दुवे (IRDAI, HDFC ERGO, Tata AIG)
- बेसिक SEO: meta description + page title update
- मोबाइल-फर्स्ट Tailwind UI आणि मराठी फॉन्ट सपोर्ट

## Phase 2 (Enhancements)
- लेख आणि FAQs साठी शोध
- Markdown/CMS आधारित ब्लॉग कंटेंट
- भाषा toggle / glossary
- अधिक accessibility सुधारणा (ARIA, skip links)
- analytics + newsletter capture
- YouTube embedding section

## Route map
- `/` मुख्यपृष्ठ
- `/health-insurance`
- `/term-insurance`
- `/car-insurance`
- `/blog`
- `/faqs`
- `/about`
- `/contact`

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Notes
- संपर्क फॉर्म client-side validation वापरतो.
- submit सध्या mock (`console.log`) आहे.
- WhatsApp quick action link दिलेला आहे.
- `public/images/` मध्ये starter AI-style SVG visuals दिलेले आहेत.
