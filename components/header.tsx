'use client';
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme } = useTheme();
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-white/40 dark:bg-neutral-950/40 border-b border-neutral-200/60 dark:border-neutral-800/60 transition-all duration-500 shadow-sm shadow-neutral-100/50 dark:shadow-neutral-900/50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3.5">

        <Link
          href={"/"}
          className="group flex items-center gap-2 cursor-pointer"
        >
          <span className="relative text-2xl font-semibold tracking-[0.02em] text-neutral-900 dark:text-neutral-50 transition-opacity duration-200 group-hover:opacity-60 select-none">
            Sutra
          </span>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-1">
          <li>
            <Link
              href={"/docs"}
              className="cursor-pointer relative inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all duration-200"
            >
              Docs
            </Link>
          </li>
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-2 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
          >
            <Image
              src={theme === "light" ? "/github-light.svg" : "/github-dark.svg"}
              alt="GitHub"
              width={16}
              height={16}
              className="opacity-70 hover:opacity-100 transition-opacity duration-200"
            />
          </Link>
        </div>

      </div>
    </nav>
  );
}