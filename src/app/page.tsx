import { Button } from "@/components/ui/button";
import { TechCarroussel } from "./_components/TechCarroussel";
import { FaGithub, FaLinkedin, FaServer, FaDocker, FaLayerGroup } from "react-icons/fa";
import { FaPaperclip } from "react-icons/fa6";
import Image from "next/image";
import profile from "@/../public/profile.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen w-full px-6">
      <div className="w-full flex flex-col justify-center py-6">

        {/* ── Hero ── */}
        <div className="w-full flex flex-row items-center justify-start gap-6">
          <div className="hidden sm:block relative md:w-[100px] md:h-[130px] rounded-md overflow-hidden">
            <Image
              src={profile}
              alt="Profile picture"
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
                I&apos;m a{" "}
                <span className="hover:text-red-400 transition-colors duration-200">
                  Backend Developer
                </span>{" "}
                &amp; DevOps enthusiast.
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
                  Resume
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* ── About me ── */}
        <div className="w-full border bg-card shadow-sm rounded px-8 py-6 mt-12 mb-6 flex flex-col items-start justify-start gap-2">
          <h2 className="text-xl font-bold text-red-400">About me</h2>
          <p className="w-full leading-relaxed text-justify text-sm sm:text-base">
            Backend Developer with hands-on experience building{" "}
            <strong>scalable, multi-tenant, and high-availability web systems</strong>.
            Proficient in <strong>.NET 8 (Clean Architecture, EF Core)</strong>,{" "}
            <strong>Java (Spring Boot, Spring Security)</strong>, and{" "}
            <strong>Python (Django, Flask, FastAPI)</strong>. Experienced with
            asynchronous messaging via <strong>RabbitMQ</strong>, caching with{" "}
            <strong>Redis</strong>, containerization using <strong>Docker</strong>,
            and CI/CD pipelines with <strong>Jenkins</strong>. I thrive in agile
            environments, always focused on code quality, performance, and reducing
            time to delivery.
          </p>
        </div>
      </div>

      {/* ── Tech Carousel ── */}
      <TechCarroussel />

      {/* ── Specialty Cards ── */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 py-6">
        <Card className="bg-card shadow-sm hover:shadow-md hover:scale-105 transition-all ease-in-out duration-200">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <FaServer className="text-red-400 text-xl shrink-0" />
            <CardTitle className="text-red-400">Backend Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base leading-relaxed">
              I design and build robust RESTful APIs with <strong>.NET 8</strong>,{" "}
              <strong>Java Spring</strong>, and <strong>Python</strong> — applying
              Clean Architecture and SOLID principles to deliver secure, scalable,
              and maintainable services.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-sm hover:shadow-md hover:scale-105 transition-all ease-in-out duration-200">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <FaDocker className="text-red-400 text-xl shrink-0" />
            <CardTitle className="text-red-400">DevOps &amp; Infrastructure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base leading-relaxed">
              I containerize applications with <strong>Docker</strong>, automate
              pipelines with <strong>Jenkins CI/CD</strong>, and implement async
              messaging with <strong>RabbitMQ</strong> and caching with{" "}
              <strong>Redis</strong> — ensuring reliability and fast delivery cycles.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-sm hover:shadow-md hover:scale-105 transition-all ease-in-out duration-200">
          <CardHeader className="flex flex-row items-center gap-3 pb-2">
            <FaLayerGroup className="text-red-400 text-xl shrink-0" />
            <CardTitle className="text-red-400">Architecture &amp; Quality</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base leading-relaxed">
              I build systems following <strong>Clean Architecture</strong> and{" "}
              <strong>SOLID</strong>, with unit tests using <strong>xUnit</strong>{" "}
              — prioritizing maintainability, fault isolation, and long-term code
              health.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
