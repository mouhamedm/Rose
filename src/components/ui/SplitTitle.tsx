"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, SplitText } from "@/lib/gsap";
import { registerGSAPPlugins } from "@/lib/gsap";

interface SplitTitleProps {
  as?: "h1" | "h2" | "h3" | "h4";
  children: string;
  className?: string;
  delay?: number;
  immediate?: boolean;
}

export default function SplitTitle({
  as: Tag = "h2",
  children,
  className = "",
  delay = 0,
  immediate = false,
}: SplitTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    registerGSAPPlugins();

    const el = titleRef.current;
    if (!el) return;

    const split = new SplitText(el, {
      type: "words",
      wordsClass: "split-word",
    });

    gsap.set(split.words, { y: "110%", opacity: 0 });

    const animProps = {
      y: "0%",
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.08,
      delay,
    };

    let anim: gsap.core.Tween;

    if (immediate) {
      anim = gsap.to(split.words, animProps);
    } else {
      anim = gsap.to(split.words, {
        ...animProps,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      });
    }

    return () => {
      anim.kill();
      split.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === el) st.kill();
      });
    };
  }, [children, delay, immediate]);

  return (
    <Tag
      ref={titleRef}
      className={["heading-display overflow-hidden", className].join(" ")}
      style={{ lineHeight: 1.1 }}
    >
      {children}
    </Tag>
  );
}
