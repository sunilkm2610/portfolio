import React from "react";
import Head from "next/head";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Sunil | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">
            Sunil Kumar
          </h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/sunilkm2610/"
              target="_blank"
              rel="noreferrer">
              <FaLinkedinIn
                size={20}
                style={{ marginRight: "1rem" }}
              />
            </a>
            <a
              href="https://github.com/sunilkm2610"
              target="_blank"
              rel="noreferrer">
              <FaGithub
                size={20}
                style={{ marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership{" "}
              <span className="px-1">|</span> Web
              Development{" "}
              <span className="px-1">|</span>{" "}
              Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">
              Web Development
            </p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated
          web development professional with
          experience in customer service, team
          leadership, and organizational
          effectiveness in fast-paced and
          challenging environments. Adept at
          developing strategies and driving
          streamlined operations. Diverse
          analytical skills, team collaboration,
          and relationship building. Consummate
          professional, and motivated leader, with
          solid interpersonal abilities and
          complex problem-solving skills.
          Effective and proven track record of
          critical thinking, idea generation, and
          optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            Skills
          </h5>
          <p className="py-2">
            <span className="font-bold">
              Technical Skills
            </span>
            <span className="px-2">|</span>
            Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>
            Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Redux
            <span className="px-2">|</span>
            Tailwind
            <span className="px-2">|</span>{" "}
            Node.js
            <span className="px-2">|</span>{" "}
            RESTAPI
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              FLEXDAY SOLUTION LLC
            </span>
            <span className="px-2">|</span>
            hyderabad, IN
          </p>
          <p className="py-1 italic">
            Full Stack Developer (Jan'2022 -
            Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Expertise in developing web pages
              using HTML5, CSS3, MVC, SASS,
              JavaScript, Reactjs, ES6, JSON, Good
              understanding of Document Object
              Model (DOM) and DOM Functions.
            </li>
            <li>
              Good knowledge of Git and GitHub,
              More than 220+ contribution in last
              two month
            </li>
            <li>
              Handle 20+ api endpoints in
              development every week
            </li>
            <li>
              Very proficient knowledge of JIRA to
              track issues and more than 90% of
              task completion rate
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">
              Vamstar Ltd.
            </span>
            <span className="px-2">|</span>
            Remote, IN
          </p>
          <p className="py-1 italic">
            Entry Data Analyst (Dec'2020 –
            Dec'2021)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Utilized PostgreSQL, AWS, PowerBI,
              MS Excel, and other toolsets for
              data analysis and intelligence.
            </li>
            <li>
              Researched and analyzed $8.5M+
              market data to help make informed
              strategic decisions.
            </li>
            <li>
              Collected 50+ countries data,
              cleaned, and analyzed to improve
              data quality and Wrote SQL scripts
              for client.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
