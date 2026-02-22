import Link from "next/link";
import { LinkToPage } from "./LinkToPage";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import Logo from "@/../public/logo-nobg.png";

export function Header() {
  return (
    <header className="px-6 fixed inset-x-0 top-0 z-30 mx-auto flex h-max w-full max-w-5xl backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="flex  w-full items-center justify-center md:justify-between py-4">
        <Link className="block relative overflow-hidden" href="/">
          <div className="flex items-center justify-start gap-2">
            <Image
              src={Logo}
              alt="Logo Lumiere"
              width={40}
              height={40}
              className="rounded-md bg-zinc-900 dark:bg-transparent"
            />
            <h1 className="hidden md:block text-xl font-extrabold dark:text-zinc-300 text-zinc-600 ">
              Luiz Freitas
            </h1>
          </div>
        </Link>
        <div className="flex w-max items-center justify-end">
          <li className="flex gap-2">
            <LinkToPage href="/about">About</LinkToPage>
            <LinkToPage href="/projects">Projects</LinkToPage>
            <LinkToPage href="/skills">Skills</LinkToPage>
            <LinkToPage href="/contact">Contact</LinkToPage>
            <ModeToggle />
          </li>
        </div>
      </div>
    </header>
  );
}
