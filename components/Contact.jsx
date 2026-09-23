import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import CodeFile from "./ide/CodeFile";
import SplitView from "./ide/SplitView";
import Badge from "./ide/Badge";
import { Kw, Str, Var, Ty, Com } from "./ide/Syntax";

export const ContactPreview = () => (
  <div className="flex flex-col gap-6">
    <div>
      <h2 className="text-vsc-text text-2xl pb-1">
        Sunil Kumar
      </h2>
      <p className="text-vsc-func">
        Full Stack Engineer (AI Products)
      </p>
      <p className="text-vsc-muted text-sm pt-1">
        Jaipur, India
      </p>
      <p className="text-vsc-muted text-sm pt-4 leading-relaxed">
        I am available for full-time roles and freelance
        AI/full-stack work. Reach out and let&apos;s talk.
      </p>
    </div>

    <div>
      <p className="text-vsc-muted text-xs uppercase tracking-widest pb-3">
        Connect
      </p>
      <div className="flex flex-wrap">
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

    <form
      action="https://getform.io/f/23dbd75e-16db-4f8c-93b4-74b0b6dafabc"
      method="POST"
      encType="multipart/form-data"
      className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] uppercase tracking-wide text-vsc-muted">
            Name
          </label>
          <input
            className="bg-vsc-line border border-vsc-border rounded-sm px-3 py-2 text-sm text-vsc-text outline-none focus:border-vsc-accent"
            type="text"
            name="name"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] uppercase tracking-wide text-vsc-muted">
            Phone Number
          </label>
          <input
            className="bg-vsc-line border border-vsc-border rounded-sm px-3 py-2 text-sm text-vsc-text outline-none focus:border-vsc-accent"
            type="text"
            name="phone"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] uppercase tracking-wide text-vsc-muted">
          Email
        </label>
        <input
          className="bg-vsc-line border border-vsc-border rounded-sm px-3 py-2 text-sm text-vsc-text outline-none focus:border-vsc-accent"
          type="email"
          name="email"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] uppercase tracking-wide text-vsc-muted">
          Subject
        </label>
        <input
          className="bg-vsc-line border border-vsc-border rounded-sm px-3 py-2 text-sm text-vsc-text outline-none focus:border-vsc-accent"
          type="text"
          name="subject"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] uppercase tracking-wide text-vsc-muted">
          Message
        </label>
        <textarea
          className="bg-vsc-line border border-vsc-border rounded-sm px-3 py-2 text-sm text-vsc-text outline-none focus:border-vsc-accent"
          rows="5"
          name="message"></textarea>
      </div>
      <button className="w-full py-2.5 mt-2">
        Send Message
      </button>
    </form>
  </div>
);

const Contact = () => {
  const code = (
    <CodeFile
      id="contact"
      path="components/Contact.jsx"
      lang="JavaScript JSX"
      color="text-vsc-func">
      <span>
        <Kw>const</Kw> <Var>contact</Var> = {"{"}
      </span>
      <span className="pl-4">
        <Var>name</Var>: <Str>&quot;Sunil Kumar&quot;</Str>,
      </span>
      <span className="pl-4">
        <Var>role</Var>:{" "}
        <Str>&quot;Full Stack Engineer (AI Products)&quot;</Str>,
      </span>
      <span className="pl-4">
        <Var>location</Var>: <Str>&quot;Jaipur, India&quot;</Str>,
      </span>
      <span className="pl-4">
        <Var>email</Var>:{" "}
        <Str>&quot;sunilkm2610@gmail.com&quot;</Str>,
      </span>
      <span className="pl-4">
        <Var>availability</Var>:{" "}
        <Str>
          &quot;Full-time roles & freelance AI/full-stack
          work&quot;
        </Str>
        ,
      </span>
      <span>{"};"}</span>
      <span>{" "}</span>
      <span>
        <Com>
          {"// Say hello — I usually reply within a day."}
        </Com>
      </span>
      <span>
        <Kw>return</Kw> &lt;<Ty>ContactForm</Ty> {"{"}...contact
        {"}"} /&gt;;
      </span>
    </CodeFile>
  );

  return (
    <SplitView
      code={code}
      preview={<ContactPreview />}
      path="components/Contact.jsx"
      color="text-vsc-func"
    />
  );
};

export default Contact;
