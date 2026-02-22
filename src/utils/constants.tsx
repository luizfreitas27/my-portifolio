import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaAngular,
  FaJava,
  FaJenkins,
} from "react-icons/fa";
import {
  SiDotnet,
  SiMongodb,
  SiRedis,
  SiTypescript,
  SiRabbitmq,
  SiJsonwebtokens,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { FcLinux } from "react-icons/fc";

export type SkillCategory = "backend" | "frontend" | "database" | "devops";

export interface IconEntry {
  icon: React.ReactElement;
  name: string;
  colorClassName: string;
  category: SkillCategory;
}

export const ICONS: IconEntry[] = [
  // ── Backend ───────────────────────────────────────────────────────────────
  { icon: <FaJava />,           name: "Java",            colorClassName: "text-red-600",                       category: "backend" },
  { icon: <SiDotnet />,         name: ".NET",            colorClassName: "text-purple-600",                    category: "backend" },
  { icon: <FaPython />,         name: "Python",          colorClassName: "text-[#08668E]",                     category: "backend" },
  { icon: <SiSpring />,         name: "Spring",          colorClassName: "text-green-600",                     category: "backend" },
  { icon: <SiSpringboot />,     name: "Spring Boot",     colorClassName: "text-green-600",                     category: "backend" },
  { icon: <SiSpringsecurity />, name: "Spring Security", colorClassName: "text-green-600",                     category: "backend" },
  { icon: <SiDjango />,         name: "Django",          colorClassName: "text-green-700 dark:text-green-400", category: "backend" },
  { icon: <SiFlask />,          name: "Flask",           colorClassName: "text-black dark:text-white",         category: "backend" },
  { icon: <SiFastapi />,        name: "FastAPI",         colorClassName: "text-[#39979c]",                     category: "backend" },
  { icon: <FaNodeJs />,         name: "Node.js",         colorClassName: "text-green-600",                     category: "backend" },

  // ── Frontend ──────────────────────────────────────────────────────────────
  { icon: <SiTypescript />,     name: "TypeScript",      colorClassName: "text-[#377CC8]",                     category: "frontend" },
  { icon: <FaAngular />,        name: "Angular",         colorClassName: "text-red-600",                       category: "frontend" },
  { icon: <FaReact />,          name: "React",           colorClassName: "text-cyan-400",                      category: "frontend" },
  { icon: <RiNextjsFill />,     name: "Next.js",         colorClassName: "text-black dark:text-white",         category: "frontend" },

  // ── Database ──────────────────────────────────────────────────────────────
  { icon: <BiLogoPostgresql />, name: "PostgreSQL",      colorClassName: "text-[#396C94]",                     category: "database" },
  { icon: <SiMongodb />,        name: "MongoDB",         colorClassName: "text-[#2DA045]",                     category: "database" },
  { icon: <SiRedis />,          name: "Redis",           colorClassName: "text-red-500",                       category: "database" },

  // ── DevOps & Infrastructure ───────────────────────────────────────────────
  { icon: <FaDocker />,         name: "Docker",          colorClassName: "text-blue-500",                      category: "devops" },
  { icon: <SiRabbitmq />,       name: "RabbitMQ",        colorClassName: "text-orange-500",                    category: "devops" },
  { icon: <FaJenkins />,        name: "Jenkins",         colorClassName: "text-[#D43F29]",                     category: "devops" },
  { icon: <FaGitAlt />,         name: "Git",             colorClassName: "text-red-600",                       category: "devops" },
  { icon: <FaGithub />,         name: "GitHub",          colorClassName: "text-black dark:text-white",         category: "devops" },
  { icon: <FcLinux />,          name: "Linux",           colorClassName: "",                                   category: "devops" },
  { icon: <SiJsonwebtokens />,  name: "JWT",             colorClassName: "text-[#EA185D]",                     category: "devops" },
];
