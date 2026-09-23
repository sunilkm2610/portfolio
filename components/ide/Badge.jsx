import React from "react";

const VARIANTS = {
  linkedin: "bg-[#0A66C2] hover:bg-[#0958a8]",
  github: "bg-[#333333] hover:bg-[#24292e]",
  upwork: "bg-[#14a800] hover:bg-[#108a00]",
  email: "bg-[#5b5b5b] hover:bg-[#4a4a4a]",
  resume: "bg-[#8250df] hover:bg-[#6f3fc4]",
};

const Badge = ({ icon: Icon, label, href, variant, download }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    download={download}
    className={`inline-flex items-center gap-1.5 text-white text-[11px] font-semibold px-2.5 py-1 rounded-sm mr-2 mb-2 normal-case tracking-normal transition-colors ${VARIANTS[variant]}`}>
    <Icon size={13} />
    {label}
  </a>
);

export default Badge;
