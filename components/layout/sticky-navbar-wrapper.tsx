"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

const StickyWrapper: React.FC<{
  children: React.ReactNode;
  classes?: string;
}> = ({ children, classes }) => {
  const navRef = useRef(null);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80 && navRef.current) {
        (navRef.current as HTMLElement).classList.add("bg-[#e9e7ea]");
      } else if (navRef.current) {
        (navRef.current as HTMLElement).classList.remove("bg-[#e9e7ea]");
      }
    };

    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <section ref={navRef} className={cn(classes)}>
      {children}
    </section>
  );
};

export default StickyWrapper;
