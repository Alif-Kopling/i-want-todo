"use client";

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-2xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-1">
          <p className="font-bold text-inherit">Mamah aku mw</p>
        </div>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}

        <ThemeSwitch />
      </header>
    </nav>
  );
};
