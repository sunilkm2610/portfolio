import Image from "next/image";
import Link from "next/link";
import React from "react";
import blogImg from "../public/assets/projects/blog.png";
import cryptoImg from "../public/assets/projects/crypto.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div
      id="projects"
      className="container mx-auto w-full py-20 laptop:px-16 tablet:px-1">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">
          What I&apos;ve Built
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React JS and MUI"
            codeURL={
              "https://github.com/sunilkm2610/crypto-app"
            }
            demoURL={
              "https://cryptohunter-coin-app.netlify.app/"
            }
          />
          <ProjectItem
            title="Blog Website"
            backgroundImg={blogImg}
            projectUrl="/property"
            tech="Next JS and Tailwind"
            codeURL={
              "https://github.com/sunilkm2610/next-js-blog-website"
            }
            demoURL={
              "https://next-js-blog-website-two.vercel.app/"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
