"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
}) => {
  return (
    <FloatingDockDesktop items={items} className={desktopClassName} />
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  const [hovered, setHovered] = useState(false);
  const scale = useSpring(hovered ? 1.15 : 1, {
    stiffness: 200,
    damping: 15,
  });
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => {
        mouseX.set(Infinity);
        setHovered(false);
      }}
      onMouseEnter={() => setHovered(true)}
      style={{ scaleX: scale }}
      className={cn(
        "mx-auto flex h-18 min-w-[300px] max-w-[80%] flex-grow items-end justify-center gap-2 rounded-full bg-white/40 backdrop-blur-xl border border-white/30 px-2 pb-2 transition-all duration-300 sm:h-20 sm:min-w-[350px] sm:max-w-[100%] sm:gap-4 sm:px-4 sm:pb-4 dark:bg-neutral-900/40 dark:border-neutral-700/30",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Default (desktop) sizes
  const widthDesktop = useTransform(distance, [-150, 0, 150], [50, 100, 50]);
  const heightDesktop = useTransform(distance, [-150, 0, 150], [50, 100, 50]);
  const widthIconDesktop = useTransform(distance, [-150, 0, 150], [28, 55, 28]);
  const heightIconDesktop = useTransform(distance, [-150, 0, 150], [28, 55, 28]);

  // Smaller sizes for mobile — middle ground
  const widthMobile = useTransform(distance, [-150, 0, 150], [35, 85, 35]);
  const heightMobile = useTransform(distance, [-150, 0, 150], [35, 85, 35]);
  const widthIconMobile = useTransform(distance, [-150, 0, 150], [18, 40, 18]);
  const heightIconMobile = useTransform(distance, [-150, 0, 150], [18, 40, 18]);

  // Use a matchMedia check to choose appropriate values
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 640px)").matches;

  const widthTransform = isMobile ? widthMobile : widthDesktop;
  const heightTransform = isMobile ? heightMobile : heightDesktop;
  const widthTransformIcon = isMobile ? widthIconMobile : widthIconDesktop;
  const heightTransformIcon = isMobile ? heightIconMobile : heightIconDesktop;

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
