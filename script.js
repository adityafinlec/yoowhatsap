const insuranceTypes = [
  {
    id: "vehicle",
    label: "वाहन विमा",
    title: "वाहन विमा (Car/Bike Insurance)",
    description: "अपघात, चोरी, नैसर्गिक आपत्ती किंवा third-party liability विरुद्ध आर्थिक सुरक्षा.",
    bullets: [
      "Third-party अनिवार्य, पण मर्यादित कव्हर देते.",
      "Comprehensive मध्ये own damage + third-party कव्हर मिळते.",
      "Add-ons: Zero Dep, Engine Protect, Roadside Assistance उपयुक्त ठरू शकतात."
    ]
  },
  {
    id: "health",
    label: "आरोग्य विमा",
    title: "आरोग्य विमा (Health Insurance)",
    description: "हॉस्पिटल बिल, surgery, daycare आणि काही पॉलिसींमध्ये preventive checkups कव्हर.",
    bullets: [
      "Family floater मध्ये एकाच पॉलिसीत संपूर्ण कुटुंब कव्हर होते.",
      "Waiting period आणि exclusions काळजीपूर्वक वाचा.",
      "Cashless नेटवर्क हॉस्पिटल्स तपासणे महत्त्वाचे."
    ]
  },
  {
    id: "term",
    label: "टर्म विमा",
    title: "टर्म विमा (Term Life Insurance)",
    description: "कमी प्रीमियममध्ये जास्त कव्हर; कमावणाऱ्या व्यक्तीसाठी सर्वात महत्त्वाचा सुरक्षा कवच.",
    bullets: [
      "कव्हर साधारण वार्षिक उत्पन्नाच्या 10-15 पट ठेवा.",
      "Critical illness rider आणि accidental death riderचा विचार करा.",
      "Claim settlement record तपासून कंपनी निवडा."
    ]
  },
  {
    id: "general",
    label: "जनरल विमा",
    title: "जनरल विमा (Home, Travel, Accident)",
    description: "घरातील मालमत्ता, प्रवासातील emergencies आणि personal accident साठी आर्थिक संरक्षण.",
    bullets: [
      "Home insurance आग/पूर/चोरीसारख्या जोखमींना कव्हर देऊ शकतो.",
      "Travel insurance मध्ये medical emergency + baggage loss मदत.",
      "Personal accident policyमध्ये disability benefits मिळू शकतात."
    ]
  }
];

const glossaryTerms = [
  ["Sum Insured", "पॉलिसीअंतर्गत कंपनी देऊ शकणारी कमाल रक्कम."],
  ["No Claim Bonus (NCB)", "क्लेम न केल्यास पुढील वर्षी प्रीमियमवरील सूट."],
  ["Zero Depreciation", "डेप्रिसिएशन न वजाता वाहन पार्ट्स क्लेम सेटल करण्याचा add-on."],
  ["Cashless Claim", "नेटवर्क हॉस्पिटल/गॅरेजमध्ये कंपनीकडून थेट बिल सेटलमेंट."],
  ["Deductible", "क्लेममध्ये ग्राहकाने स्वतः भरायची निश्चित रक्कम."],
  ["Waiting Period", "काही आजारांसाठी कव्हर सक्रिय होण्यापूर्वीचा कालावधी."],
  ["Co-payment", "क्लेम रकमेतील ठराविक टक्केवारी ग्राहकाने भरणे."],
  ["Grace Period", "प्रीमियम due नंतर पॉलिसी lapse न होता देयक भरण्यास मिळणारी मुदत."]
];

const blogPosts = [
  {
    category: "Health",
    title: "कॅशलेस क्लेम करताना होणाऱ्या 7 सामान्य चुका",
    desc: "Admission पूर्वी pre-authorization पासून discharge summary पर्यंत प्रत्येक पायरीची checklist."
  },
  {
    category: "Vehicle",
    title: "Comprehensive policy मध्ये add-on घेण्याची योग्य वेळ",
    desc: "नवीन वाहन, शहरातील वापर, पार्ट्स खर्च आणि claim frequency यावर आधारित मार्गदर्शन."
  },
  {
    category: "Basics",
    title: "Premium वाढत का जाते? 5 practical कारणे",
    desc: "वय, claim history, city risk, IDV आणि inflation यांचा थेट परिणाम कसा होतो ते समजा."
  },
  {
    category: "General",
    title: "Travel insurance मध्ये काय-काय कव्हर होते?",
    desc: "Medical emergency, trip delay, passport loss आणि exclusions यांचा सोपा breakdown."
  }
];

const faqItems = [
  ["पहिली पॉलिसी घेताना काय सर्वात महत्त्वाचे?", "Coverage + exclusions + claim process या 3 गोष्टी आधी तपासा."],
  ["NCB transfer करता येतो का?", "हो, वाहन बदलले तरी ठराविक नियमांनुसार NCB transfer शक्य असते."],
  ["Health insurance मध्ये room rent cap म्हणजे काय?", "रूमच्या दैनिक खर्चावर मर्यादा असेल तर उर्वरित रक्कम तुम्हाला भरावी लागू शकते."],
  ["Term plan ऑनलाइन घेणे सुरक्षित आहे का?", "हो, अधिकृत insurer website/विश्वसनीय aggregator वापरून योग्य माहिती दिल्यास सुरक्षित आहे."]
];

const stats = [
  ["4", "मुख्य विमा विभाग"],
  ["8+", "सोप्या मराठी संकल्पना"],
  ["2", "इंटरॅक्टिव्ह निर्णय साधने"]
];

const heroStats = document.getElementById("heroStats");
heroStats.innerHTML = stats.map(([value, label]) => `<div class="stat"><b>${value}</b><span>${label}</span></div>`).join("");

const typeTabs = document.getElementById("typeTabs");
const typeDetail = document.getElementById("typeDetail");

function renderType(id) {
  const selected = insuranceTypes.find((item) => item.id === id) || insuranceTypes[0];
  typeDetail.innerHTML = `
    <h3>${selected.title}</h3>
    <p>${selected.description}</p>
    <ul>${selected.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
  `;

  [...typeTabs.children].forEach((btn) => btn.classList.toggle("active", btn.dataset.id === selected.id));
}

insuranceTypes.forEach((item, i) => {
  const button = document.createElement("button");
  button.className = "type-tab";
  button.dataset.id = item.id;
  button.textContent = item.label;
  button.addEventListener("click", () => renderType(item.id));
  typeTabs.appendChild(button);
  if (i === 0) renderType(item.id);
});

const glossaryList = document.getElementById("glossaryList");
const termSearch = document.getElementById("termSearch");
const resultCount = document.getElementById("resultCount");

function renderGlossary(query = "") {
  const normalized = query.trim().toLowerCase();
  const filtered = glossaryTerms.filter(([term, meaning]) => `${term} ${meaning}`.toLowerCase().includes(normalized));

  glossaryList.innerHTML = filtered
    .map(([term, meaning]) => `<article class="term"><h3>${term}</h3><p>${meaning}</p></article>`)
    .join("");

  resultCount.textContent = `${filtered.length} निकाल`;
}

renderGlossary();
termSearch.addEventListener("input", (event) => renderGlossary(event.target.value));

const healthForm = document.getElementById("healthForm");
const healthOutput = document.getElementById("healthOutput");

healthForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const age = Number(document.getElementById("age").value);
  const cityTier = document.getElementById("cityTier").value;
  const familyMembers = Number(document.getElementById("familyMembers").value);

  const tierMultiplier = { metro: 1.5, tier2: 1.2, tier3: 1 };
  const ageFactor = age >= 50 ? 1.4 : age >= 35 ? 1.15 : 1;
  const base = 300000;
  const suggestion = Math.round(base * (tierMultiplier[cityTier] || 1) * ageFactor * Math.max(1, familyMembers * 0.75));

  healthOutput.textContent = `सुचवलेला Sum Insured: ₹${suggestion.toLocaleString("en-IN")} (indicative estimate)`;
});

const vehicleForm = document.getElementById("vehicleForm");
const vehicleCompare = document.getElementById("vehicleCompare");

vehicleForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = Number(document.getElementById("vehicleValue").value);
  const age = Number(document.getElementById("vehicleAge").value);
  const dep = Math.max(0.45, 1 - age * 0.08);
  const idv = Math.round(value * dep);
  const thirdParty = Math.round(idv * 0.015);
  const comprehensive = Math.round(idv * 0.032);

  vehicleCompare.innerHTML = `
    <div class="compare-item"><strong>Estimated IDV:</strong> ₹${idv.toLocaleString("en-IN")}</div>
    <div class="compare-item"><strong>Third-party premium (approx):</strong> ₹${thirdParty.toLocaleString("en-IN")}</div>
    <div class="compare-item"><strong>Comprehensive premium (approx):</strong> ₹${comprehensive.toLocaleString("en-IN")}</div>
  `;
});

const filters = ["All", ...new Set(blogPosts.map((post) => post.category))];
const blogFilters = document.getElementById("blogFilters");
const blogGrid = document.getElementById("blogGrid");

function renderBlogs(category = "All") {
  const posts = category === "All" ? blogPosts : blogPosts.filter((post) => post.category === category);
  blogGrid.innerHTML = posts.map((post) => `
      <article class="card blog-card">
        <p class="pill">${post.category}</p>
        <h3>${post.title}</h3>
        <p>${post.desc}</p>
      </article>
    `).join("");

  [...blogFilters.children].forEach((btn) => btn.classList.toggle("active", btn.dataset.category === category));
}

filters.forEach((category, idx) => {
  const btn = document.createElement("button");
  btn.className = "filter-btn";
  btn.dataset.category = category;
  btn.textContent = category;
  btn.addEventListener("click", () => renderBlogs(category));
  blogFilters.appendChild(btn);
  if (idx === 0) renderBlogs(category);
});

const faqList = document.getElementById("faqList");
faqList.innerHTML = faqItems
  .map(([q, a], i) => `
    <article class="faq-item ${i === 0 ? "open" : ""}">
      <button class="faq-q" type="button">${q}</button>
      <div class="faq-a">${a}</div>
    </article>
  `)
  .join("");

faqList.querySelectorAll(".faq-q").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".faq-item");
    card.classList.toggle("open");
  });
});

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => navLinks.classList.remove("open")));
