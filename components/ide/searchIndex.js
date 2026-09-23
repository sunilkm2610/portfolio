export const SEARCH_INDEX = [
  { fileId: "home", text: "Sunil Kumar Full Stack Engineer AI Products" },
  {
    fileId: "home",
    text: "5+ years building software, 4+ years shipping production web and Generative AI products",
  },
  {
    fileId: "home",
    text: "Available for full-time & freelance work, Jaipur India",
  },
  {
    fileId: "about",
    text: "Full Stack Engineer with 5+ years building software and 4+ years shipping production web and Generative AI products",
  },
  {
    fileId: "about",
    text: "Flexday AI top-selling product, internal system used by 20,000+ weekly active employees at a Fortune 500 client",
  },
  {
    fileId: "about",
    text: "Run two live products alone including a Chrome extension with 15,000+ weekly active users on subscription billing",
  },
  {
    fileId: "about",
    text: "Solo SaaS builder for non-technical founders — idea to production, design, code, infra, payments, support",
  },
  {
    fileId: "about",
    text: "IIT Madras Dual Degree Civil Engineering",
  },
  {
    fileId: "experience",
    text: "Flexday AI B2B SaaS and Services Full Stack Engineer AI Products 06/2022 Present",
  },
  {
    fileId: "experience",
    text: "Delivered an internal platform end to end for a Fortune 500 real estate client React Flask MongoDB 20,000+ weekly active employees",
  },
  {
    fileId: "experience",
    text: "Flexday AI Studio chat-driven platform for building AI apps with agents cron jobs flows auth and database",
  },
  {
    fileId: "experience",
    text: "speciphicAsk top-selling Generative AI platform 80% revenue increase three enterprise clients real estate packaging FMCG",
  },
  {
    fileId: "experience",
    text: "RAG pipeline chunking embeddings vector search 10,000+ document corpora Flask microservices under 10 seconds",
  },
  {
    fileId: "experience",
    text: "REST APIs database layer schema design Redux Toolkit RBAC MUI i18next white-label",
  },
  {
    fileId: "experience",
    text: "Vamstar Pvt Ltd Data Analyst II Python SQL engineering 12/2020 05/2022",
  },
  {
    fileId: "experience",
    text: "Automated tender data collection 20+ countries Selenium BeautifulSoup",
  },
  {
    fileId: "experience",
    text: "SQL pipelines PostgreSQL procurement data 50+ countries analytics",
  },
  {
    fileId: "experience",
    text: "IIT Madras Dual Degree B.Tech M.Tech Civil Engineering Chennai",
  },
  { fileId: "skills", text: "React.js Next.js TypeScript JavaScript" },
  { fileId: "skills", text: "Redux Toolkit Tailwind CSS Material UI HTML CSS" },
  { fileId: "skills", text: "Node.js Express.js Python Flask FastAPI" },
  { fileId: "skills", text: "OpenAI API RAG Pipelines Vector Search LLM" },
  {
    fileId: "skills",
    text: "PostgreSQL MongoDB Prisma Drizzle Docker AWS Azure Vercel Git GitHub Shopify Apps",
  },
  {
    fileId: "projects",
    text: "speciphicAsk Flexday AI Enterprise GenAI natural language document search RAG pipeline",
  },
  {
    fileId: "projects",
    text: "Flexday AI Studio internal product chat-driven AI app builder agents cron jobs flows",
  },
  {
    fileId: "projects",
    text: "Side Notepad Chrome Web Store 15,000+ weekly active users 4.6 stars subscription billing",
  },
  {
    fileId: "projects",
    text: "Clay Lock Shopify App Store B2B access control 400+ active installs 5.0 stars",
  },
  {
    fileId: "contact",
    text: "Sunil Kumar sunilkm2610@gmail.com Jaipur India contact",
  },
  {
    fileId: "contact",
    text: "Available for full-time roles and freelance AI full-stack work, hire on Upwork",
  },
];

export const searchContent = (query) => {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return SEARCH_INDEX.filter((entry) =>
    entry.text.toLowerCase().includes(q)
  );
};
