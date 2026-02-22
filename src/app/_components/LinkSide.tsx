"use client";
import { ReactNode } from "react";

type LinkSideProps = {
  children: ReactNode;
  href: string;
};

export function LinkSide({ children, href }: LinkSideProps) {
  return (
    <a
      className="w-full rounded px-4 py-2 text-zinc-600 dark:text-zinc-400 transition-all duration-100 ease-out hover:bg-muted dark:hover:bg-zinc-900 hover:text-red-400"
      href={href}
    >
      {children}
    </a>
  );
}
