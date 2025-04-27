import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaPaperclip } from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="sm:py-70 py-50 w-full px-6">
      <div className="flex flex-col w-full justify-center gap-20 items-center">
        <h1 className="text-xl md:text-2xl sm:text-nowrap">
          Let's chat and{" "}
          <span className="text-red-400">
            develop solutions for your company
          </span>
          , together!
        </h1>

        <div className="w-full flex justify-center items-center flex-col gap-4">
          <div className="w-full flex flex-row sm:flex-row justify-center mt-4 items-center gap-5">
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
    </main>
  );
}
