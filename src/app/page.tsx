import { Button } from "@/components/ui/button";
import { TechCarroussel } from "./_components/TechCarroussel";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa6";
import Image from "next/image";
import profile from "@/../public/profile.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "./_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full px-6">
      <div className="w-full flex flex-col  justify-center py-6 ">
        <div className="w-full flex flex-row  items-center justify-start gap-6">
          <div className="hidden sm:block relative md:w-[100px] md:h-[130px] rounded-md overflow-hidden ">
            <Image
              src={profile}
              alt="Imagem de perfil"
              fill
              className="object-cover object-[center_20%] hover:scale-105 duration-200 ease-in-out transition-all outline-0"
              priority
            />
          </div>

          <div className="w-full flex justify-between flex-col gap-4">
            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold">
                Luiz Felipe Freitas
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                I'm a{" "}
                <span className="hover:text-red-400">Software Developer</span>.
              </p>
            </div>
            <div className="w-full flex flex-row sm:flex-row sm:justify-start justify-between mt-4 items-center gap-5">
              <a
                target="_blank"
                href="https://github.com/luizfreitas27"
                className="w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto hover:bg-red-400 transition-all duration-200 ease-in-out flex items-center justify-center gap-2 hover:scale-105 bg-zinc-600 dark:bg-gray-200 dark:hover:bg-red-400 cursor-pointer">
                  <FaGithub />
                  Github
                </Button>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/luiz-felipe-freitas-095586209/"
                className="w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto hover:bg-red-400 transition-all duration-200 ease-in-out flex items-center justify-center gap-2 hover:scale-105 bg-zinc-600 dark:bg-gray-100 dark:hover:bg-red-400 cursor-pointer">
                  <FaLinkedin />
                  LinkedIn
                </Button>
              </a>

              <a href="/curriculum.pdf" download className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto hover:bg-red-400 transition-all duration-200 ease-in-out flex items-center justify-center gap-2 hover:scale-105 bg-zinc-600 dark:bg-gray-100 dark:hover:bg-red-400 cursor-pointer">
                  <FaPaperclip />
                  Curriculum
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full border dark:bg-card bg-gray-200 rounded px-8 py-6 mt-12 mb-6 flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-bold text-red-400">About me</h2>
          <p className="w-full leading-relaxed text-justify text-sm sm:text-base">
            Hello, I'm a Fullstack Developer passionate about building robust
            back-end systems and creating modern, user-friendly front-end
            experiences. With hands-on experience in technologies like Node.js,
            TypeScript, Next.js, Python, FastAPI, and Flask, I specialize in
            developing scalable RESTful APIs and intuitive interfaces. I value
            clean, well-structured architecture, always aiming for high
            performance, security, and an exceptional user experience.
            Constantly evolving, I'm driven by the challenge of delivering
            efficient, high-quality solutions that make a real impact.
          </p>
        </div>
      </div>

      <TechCarroussel />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 py-6">
        <Card className="dark:bg-card bg-gray-200 hover:scale-105 transition-all ease-in-out duration-200">
          <CardHeader>
            <CardTitle className="text-red-400">Frontend</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I develop modern, responsive interfaces with Next.js and
              TypeScript, prioritizing intuitive user experiences and clean,
              maintainable code structures.
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-card bg-gray-200 hover:scale-105 transition-all ease-in-out duration-200">
          <CardHeader>
            <CardTitle className="text-red-400">Backend</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I design and build robust RESTful APIs with Node.js, Express,
              FastAPI, and Flask — always prioritizing performance, scalability,
              and security.
            </p>
          </CardContent>
        </Card>
        <Card className="dark:bg-card bg-gray-200 hover:scale-105 transition-all ease-in-out duration-200">
          <CardHeader>
            <CardTitle className="text-red-400">Agile development</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I thrive in Agile environments, utilizing frameworks like Scrum
              and Kanban boards to foster continuous improvement, enhance
              collaboration, and deliver high-quality software efficiently.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
