"use client"
import { FollowerPointerCard } from "./following-pointer";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";


export const HoverEffect = ({
  skills = [],
  className,
}: {
  skills?: {
    title: string;
    technologies: {
      name: string;
      img: string;
      style?: React.CSSProperties;
      height: number;
      width: number;
    }[];
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {skills.map((skill, idx) => (
        <h2
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="overflow-visible">
            <CardTitle>{skill.title}</CardTitle>
            <div className="grid grid-cols-4 gap-2">
              {skill.technologies.map((tech, techID) => (
                <FollowerPointerCard
                  key={techID}
                  title={tech.name}
                >
                  <Image
                    src={`/techStack/${tech.img}`}
                    alt={`${tech.img.replace(".svg", "").replace(".png", "")} logo`}
                    height={tech.height}
                    width={tech.width}
                    style={
                      tech.style
                        ? { ...tech.style }
                        : { filter: "grayscale(100%) brightness(1) invert(1)" }
                    }
                  />
                </FollowerPointerCard>
              ))}
            </div>
          </Card>
        </h2>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
