"use client";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconFileCv
  
} from "@tabler/icons-react";

export function Navbar() {
  const links = [
   

    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center z-60 ">
      <FloatingDock
        mobileClassName="translate-y-0"
        items={links}
      />
    </div>
  );
}
