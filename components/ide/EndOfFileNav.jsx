import React from "react";
import { SiUpwork } from "react-icons/si";

const EndOfFileNav = ({ next }) => {
  if (next) return null;

  return (
    <div className="text-center border border-[#14a800]/40 bg-[#14a800]/10 rounded-md px-6 py-8 mt-2 mb-10">
      <p className="text-vsc-text text-lg font-semibold pb-2">
        You&apos;ve reached the end of the repo. 🎉
      </p>
      <p className="text-vsc-muted text-sm pb-4 max-w-md mx-auto leading-relaxed">
        Got an idea that needs a builder? I take products from
        zero to production, solo — and I&apos;m currently open
        for freelance work.
      </p>
      <a
        href="https://www.upwork.com/freelancers/~01b1ecbba65af1c30a"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 bg-[#14a800] hover:bg-[#108a00] text-white text-sm font-semibold px-5 py-2.5 rounded-sm normal-case tracking-normal">
        <SiUpwork size={14} />
        Hire me on Upwork
      </a>
    </div>
  );
};

export default EndOfFileNav;
