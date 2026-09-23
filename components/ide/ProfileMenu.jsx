import React from "react";
import Image from "next/image";
import { VscMail, VscLocation, VscBriefcase } from "react-icons/vsc";
import AboutImg from "../../public/assets/about1.jpg";
import Badge from "./Badge";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";

const ProfileMenu = ({ onClose }) => {
  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />
      <div className="fixed bottom-14 left-14 z-50 w-72 bg-vsc-sidebar border border-vsc-border rounded-md shadow-2xl shadow-black/60 p-4 text-vsc-text">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-vsc-border shrink-0">
            <Image
              src={AboutImg}
              className="object-cover w-full h-full"
              alt="Sunil Kumar"
            />
          </div>
          <div className="min-w-0">
            <p className="font-semibold truncate">
              Sunil Kumar
            </p>
            <p className="text-vsc-muted text-xs truncate">
              sunilkm2610@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-3 space-y-1.5 text-xs text-vsc-muted">
          <p className="flex items-center gap-2">
            <VscBriefcase size={13} /> Full Stack Engineer (AI
            Products)
          </p>
          <p className="flex items-center gap-2">
            <VscLocation size={13} /> Jaipur, India
          </p>
          <p className="flex items-center gap-2">
            <VscMail size={13} /> sunilkm2610@gmail.com
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-vsc-border flex flex-wrap">
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
            icon={BsFillPersonLinesFill}
            label="Resume"
            variant="resume"
            href="/resume/Sunil-Kumar-Resume.pdf"
          />
        </div>
      </div>
    </>
  );
};

export default ProfileMenu;
