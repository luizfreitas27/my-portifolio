"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type LinkToPageProps = {
  children: ReactNode;
  href: string;
};

export function LinkToPage({ children, href }: LinkToPageProps) {
  const isActive = usePathname();

  return (
    <Link
      data-checked={isActive === href ? "checked" : undefined}
      href={href}
      className={`rounded bg-transparent px-3 py-2 text-base font-bold text-zinc-600 dark:text-zinc-300 transition-all duration-200 ease-out hover:text-red-400 data-checked:text-red-400 hover:bg-muted dark:hover:bg-zinc-900`}
    >
      {children}
    </Link>
  );
}
