import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about1.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="container mx-auto w-full md:h-screen p-2 flex items-center pt-36 px-16 mb-8">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I specialize in building mobile
            responsive front-end UI applications
            that connect with API’s and other
            backend technologies. I’m passionate
            about learning new technologies and
            understand there is more than one way
            to accomplish a task. Though I am most
            proficient in building front-end
            applications using HTML, CSS,
            Javascript, and React, I am a quick
            learner and can pick up new tech
            stacks as needed. I believe that being
            a great developer is not using one
            specific language, but choosing the
            best tool for the job.
          </p>
          <p className="py-2 text-gray-600">
            I started web development in 2020
            managing multiple service websites
            using React.js and JavaScript.
            Currently working as Full Stack
            Developer at Flexday Solution LLC and
            Graduated most finest engineering
            college in india (IIT Madras)
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest
              projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-full m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
          <Image
            src={AboutImg}
            className="rounded-xl w-2/4 h-2/4"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
