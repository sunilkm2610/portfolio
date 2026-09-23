import React from "react";
import Image from "next/image";
import { SiUpwork } from "react-icons/si";
import AboutImg from "../public/assets/about1.jpg";
import CodeFile from "./ide/CodeFile";
import SplitView from "./ide/SplitView";
import { Kw, Str, Var, Ty, Com } from "./ide/Syntax";

const stats = [
  { value: "5+", label: "Years Building Software" },
  { value: "20K+", label: "Weekly Active Employees" },
  { value: "15K+", label: "WAU On Own Products" },
  { value: "80%", label: "Revenue Increase Shipped" },
];

export const AboutPreview = () => (
  <div className="flex flex-col gap-5">
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="text-center p-4 border border-vsc-border rounded-md hover:border-vsc-accent transition-colors">
          <h3 className="text-vsc-type text-2xl sm:text-3xl">
            {stat.value}
          </h3>
          <p className="text-[11px] uppercase tracking-wide text-vsc-muted pt-1">
            {stat.label}
          </p>
        </div>
      ))}
    </div>

    <div className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-md overflow-hidden border border-vsc-border shrink-0">
        <Image
          src={AboutImg}
          className="object-cover w-full h-full"
          alt="Sunil Kumar"
        />
      </div>
      <div>
        <p className="text-vsc-text text-sm font-semibold">
          Sunil Kumar
        </p>
        <p className="text-vsc-muted text-xs">
          Full Stack Engineer (AI Products)
        </p>
      </div>
    </div>

    <div className="border border-[#14a800]/40 bg-[#14a800]/10 rounded-md p-4">
      <p className="text-vsc-text text-sm leading-relaxed">
        <span className="text-[#3fb950] font-semibold">
          Have an idea, not a tech team?
        </span>{" "}
        I take non-technical founders&apos; ideas from zero to a
        live, production SaaS — solo. No agency overhead, one
        person accountable for the whole build.
      </p>
      <a
        href="https://www.upwork.com/freelancers/~01b1ecbba65af1c30a"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 mt-3 bg-[#14a800] hover:bg-[#108a00] text-white text-xs font-semibold px-3 py-1.5 rounded-sm normal-case tracking-normal">
        <SiUpwork size={13} />
        Hire me on Upwork
      </a>
    </div>
  </div>
);

const About = () => {
  const code = (
    <CodeFile
      id="about"
      path="components/About.jsx"
      lang="JavaScript JSX"
      color="text-vsc-func">
      <span>
        <Kw>const</Kw> <Ty>About</Ty> = () =&gt; {"{"}
      </span>
      <span className="pl-4">
        <Kw>const</Kw> <Var>bio</Var> = {"{"}
      </span>
      <span className="pl-8">
        <Var>role</Var>:{" "}
        <Str>&quot;Full Stack Engineer (AI Products)&quot;</Str>,
      </span>
      <span className="pl-8">
        <Var>experience</Var>: <Str>&quot;5+ years&quot;</Str>,
      </span>
      <span className="pl-8">
        <Var>summary</Var>:{" "}
        <Str>
          &quot;I&apos;m a Full Stack Engineer with 5+ years
          building software and 4+ years shipping production web
          and Generative AI products. At Flexday AI I built the
          Generative AI platform that became the company&apos;s
          top-selling product, and an internal system now used
          by 20,000+ weekly active employees at a Fortune 500
          client.&quot;
        </Str>
        ,
      </span>
      <span className="pl-4">{"};"}</span>
      <span>{" "}</span>
      <span className="pl-4">
        <Com>
          {"// For non-technical founders — not just an engineer"}
        </Com>
      </span>
      <span className="pl-4">
        <Kw>const</Kw> <Var>forFounders</Var> ={" "}
        <Str>
          &quot;Have an idea but no tech co-founder? I take
          products from a napkin sketch to a live, paying SaaS
          — solo. Design, code, infra, payments, support.
          I&apos;ve done it twice for myself (15,000+ WAU) and
          for enterprise clients at Flexday AI.&quot;
        </Str>
        ;
      </span>
      <span>{" "}</span>
      <span className="pl-4">
        <Kw>const</Kw> <Var>independent</Var> ={" "}
        <Str>
          &quot;Run two live products alone — including a
          Chrome extension with 15,000+ weekly active users on
          subscription billing — owning frontend, backend,
          payments, self-hosted infra and every support
          ticket.&quot;
        </Str>
        ;
      </span>
      <span>{" "}</span>
      <span className="pl-4">
        <Kw>const</Kw> <Var>stack</Var> = [<Str>&quot;React&quot;</Str>,{" "}
        <Str>&quot;Next.js&quot;</Str>, <Str>&quot;Node.js&quot;</Str>,{" "}
        <Str>&quot;Flask&quot;</Str>, <Str>&quot;FastAPI&quot;</Str>,{" "}
        <Str>&quot;RAG&quot;</Str>, <Str>&quot;Vector Search&quot;</Str>];
      </span>
      <span className="pl-4">
        <Kw>const</Kw> <Var>education</Var> ={" "}
        <Str>
          &quot;IIT Madras — Dual Degree (B.Tech + M.Tech),
          Civil Engineering&quot;
        </Str>
        ;
      </span>
      <span>{" "}</span>
      <span className="pl-4">
        <Kw>return</Kw> &lt;<Ty>Highlights</Ty> {"{"}...bio{"}"}{" "}
        <Var>stack</Var>={"{stack}"} /&gt;;
      </span>
      <span>{"};"}</span>
      <span>{" "}</span>
      <span>
        <Kw>export default</Kw> <Ty>About</Ty>;
      </span>
    </CodeFile>
  );

  return (
    <SplitView
      code={code}
      preview={<AboutPreview />}
      path="components/About.jsx"
      color="text-vsc-func"
    />
  );
};

export default About;
