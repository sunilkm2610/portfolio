import React from "react";

export const Kw = ({ children }) => (
  <span className="text-vsc-keyword">{children}</span>
);
export const Str = ({ children }) => (
  <span className="text-vsc-string">{children}</span>
);
export const Com = ({ children }) => (
  <span className="text-vsc-comment">{children}</span>
);
export const Fn = ({ children }) => (
  <span className="text-vsc-func">{children}</span>
);
export const Ty = ({ children }) => (
  <span className="text-vsc-type">{children}</span>
);
export const Var = ({ children }) => (
  <span className="text-vsc-variable">{children}</span>
);
export const Num = ({ children }) => (
  <span className="text-vsc-number">{children}</span>
);

export const Link = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-vsc-string underline decoration-dotted underline-offset-4 hover:text-vsc-type">
    {children}
  </a>
);
