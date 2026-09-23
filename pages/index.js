import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import IDEShell from "../components/ide/IDEShell";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Sunil Kumar | Full Stack Engineer (AI Products)
        </title>
        <meta
          name="description"
          content="Full Stack Engineer with 5+ years building software and 4+ years shipping production web and Generative AI products, including a RAG platform used by Fortune 500 employees and self-hosted products with 15,000+ weekly active users."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <IDEShell>
        <Main />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </IDEShell>
    </div>
  );
}
