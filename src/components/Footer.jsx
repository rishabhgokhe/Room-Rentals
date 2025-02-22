import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const socialLinks = [
  { href: "https://portfolio-rishabhgokhe.vercel.app/", icon: <FaCircleUser /> },
  { href: "https://x.com/rishabhgokhe", icon: <FaTwitter /> },
  { href: "https://www.linkedin.com/in/rishabh-gokhe/", icon: <FaLinkedin /> },
  { href: "https://github.com/rishabhgokhe", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#3d3d3d] py-6 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        {/* Copyright Section */}
        <p className="text-center text-sm font-semibold tracking-wide md:text-left">
          ©Room Rentals 2025. All rights reserved
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 ease-in-out hover:text-[#5542ff]"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Privacy Policy */}
        <a
          href="#privacy-policy"
          className="text-center text-sm font-semibold tracking-wide hover:underline md:text-right"
        >
          Designed by Rishabh
        </a>
      </div>
    </footer>
  );
};

export default Footer;