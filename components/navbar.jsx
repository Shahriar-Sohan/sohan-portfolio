"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconFileCv,
  IconBrandLinkedin
} from "@tabler/icons-react";

export function Navbar() {
  const links = [
   

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/shahriar-sohan-48887b279/",
    },
    {
      title: "Resume",
      icon: (
        <IconFileCv stroke={1.25} width={128} height={128} />
      ),
      href: "#",
    },
     {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Shahriar-Sohan",
    },
  ];
  return (
    <div className="hidden md:flex fixed bottom-4 left-1/2 -translate-x-1/2 items-center justify-center z-60">
      <FloatingDock
        mobileClassName="translate-y-0"
        items={links}
      />
    </div>
  );
}
