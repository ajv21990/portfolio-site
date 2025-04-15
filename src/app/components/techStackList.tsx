import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiGit,
  SiGithub,
  SiJavascript,
  SiHtml5,
  SiApachegroovy,
  SiXml,
  SiSelenium,
  SiPostman

} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";


const tech = [
    { name: "HTML", icon: <SiHtml5 /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "Groovy", icon: <SiApachegroovy /> },
  { name: "XML", icon: <SiXml /> },
  { name: "SQL", icon: <FaDatabase /> },
    { name: "Selenium", icon: <SiSelenium /> },
  { name: "Postman", icon: <SiPostman /> },
    { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
];

export default function TechStack() {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-semibold mb-4">My Tech Stack (Which is always growing!)</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-4xl text-gray-700 dark:text-gray-300">
        {tech.map((t) => (
          <div
            key={t.name}
            className="flex flex-col items-center hover:scale-110 transition-transform"
          >
            {t.icon}
            <span className="text-sm mt-2">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}