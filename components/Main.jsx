import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";
import CodeFile from "./ide/CodeFile";
import SplitView from "./ide/SplitView";
import Badge from "./ide/Badge";
import Typewriter from "./ide/Typewriter";
import { Com, Str } from "./ide/Syntax";

const TAGLINES = [
  "Full Stack Engineer, AI Products",
  "RAG Pipeline Architect @ Flexday AI",
  "Building speciphicAsk — 80% revenue lift",
  "Solo-running products with 15,000+ WAU",
];

export const MainPreview = () => (
  <div className="text-center py-2">
    <p className="uppercase text-[11px] tracking-widest text-vsc-muted">
      Jaipur, India — Available for Full-Time &amp; Freelance
      Work
    </p>
    <h2 className="pt-3 text-vsc-text">
      Hi, I&apos;m{" "}
      <span className="text-vsc-accent">Sunil</span>
    </h2>
    <h3 className="pt-1 text-vsc-func text-lg min-h-[1.6em]">
      <Typewriter words={TAGLINES} />
    </h3>
    <p className="pt-4 text-vsc-muted text-sm max-w-md mx-auto leading-relaxed">
      5+ years building software, 4+ years shipping production
      web and Generative AI products — from a RAG platform used
      by Fortune 500 employees to two self-hosted products with
      15,000+ weekly active users.
    </p>
    <div className="flex flex-wrap justify-center pt-5">
      <Badge
        icon={FaLinkedinIn}
        label="LinkedIn"
        variant="linkedin"
        href="https://www.linkedin.com/in/sunilkm2610/"
      />
      <Badge
        icon={FaGithub}
        label="GitHub"
        variant="github"
        href="https://github.com/sunilkm2610"
      />
      <Badge
        icon={SiUpwork}
        label="Upwork"
        variant="upwork"
        href="https://www.upwork.com/freelancers/~01b1ecbba65af1c30a"
      />
      <Badge
        icon={AiOutlineMail}
        label="Email"
        variant="email"
        href="mailto:sunilkm2610@gmail.com"
      />
      <Badge
        icon={BsFillPersonLinesFill}
        label="Resume"
        variant="resume"
        href="/resume/Sunil-Kumar-Resume.pdf"
      />
    </div>
  </div>
);

const Main = () => {
  const code = (
    <CodeFile
      id="home"
      path="README.md"
      lang="Markdown"
      color="text-vsc-keyword">
      <span className="text-vsc-keyword font-bold text-lg">
        # Sunil Kumar
      </span>
      <span>
        <Badge
          icon={FaLinkedinIn}
          label="LinkedIn"
          variant="linkedin"
          href="https://www.linkedin.com/in/sunilkm2610/"
        />
        <Badge
          icon={FaGithub}
          label="GitHub"
          variant="github"
          href="https://github.com/sunilkm2610"
        />
        <Badge
          icon={SiUpwork}
          label="Upwork"
          variant="upwork"
          href="https://www.upwork.com/freelancers/~01b1ecbba65af1c30a"
        />
        <Badge
          icon={AiOutlineMail}
          label="Email"
          variant="email"
          href="mailto:sunilkm2610@gmail.com"
        />
        <Badge
          icon={BsFillPersonLinesFill}
          label="Resume"
          variant="resume"
          href="/resume/Sunil-Kumar-Resume.pdf"
        />
      </span>
      <span>{" "}</span>
      <span className="text-vsc-func font-bold text-base sm:text-lg block min-h-[1.5em]">
        ## <Typewriter words={TAGLINES} />
      </span>
      <span>{" "}</span>
      <span className="text-vsc-comment italic">
        {"> 5+ years building software, 4+ years shipping production"}
      </span>
      <span className="text-vsc-comment italic">
        {
          "> web and Generative AI products — from a RAG platform used"
        }
      </span>
      <span className="text-vsc-comment italic">
        {
          "> by Fortune 500 employees to two self-hosted products with"
        }
      </span>
      <span className="text-vsc-comment italic">
        {"> 15,000+ weekly active users."}
      </span>
      <span>{" "}</span>
      <span>
        <Com>**Status:**</Com> 🟢 Available for full-time &
        freelance work
      </span>
      <span>
        <Com>**Location:**</Com> <Str>Jaipur, India</Str>
      </span>
    </CodeFile>
  );

  return (
    <SplitView
      code={code}
      preview={<MainPreview />}
      path="README.md"
      color="text-vsc-keyword"
    />
  );
};

export default Main;
