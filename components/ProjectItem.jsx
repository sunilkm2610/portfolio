import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  demoURL,
  codeURL,
}) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[brown] to-[black]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="mx-auto w-full hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">
          {tech}
        </p>
        <div className="text-center">
          <a
            href={codeURL}
            target="_blank"
            rel="noreferrer">
            <button className="px-8 py-2 mt-4 mr-4 mx-auto">
              Code
            </button>
          </a>
          <a
            href={demoURL}
            target="_blank"
            rel="noreferrer">
            <button className="px-8 py-2 mt-4">
              Demo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
