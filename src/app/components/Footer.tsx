// components/Footer.tsx
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-8 px-4 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} AJ Villanueva</p>
          <p className="text-xs mt-1">Built with Next.js, Tailwind, and ✨</p>
        </div>

        <div className="flex space-x-5 text-xl">
          <a
            href="https://github.com/ajv21990"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-j-villanueva/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="text-sm">
          <a
            href="mailto:ajv21990@gmail.com"
            className="hover:text-white transition"
          >
            ajv21990@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
