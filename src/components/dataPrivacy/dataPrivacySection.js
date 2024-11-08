"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";
import styles from "./security.module.scss";

function DataPrivacySection() {
  const textRef = useRef(null);

  useGSAP(() => {
    const element = textRef.current;

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } =
        textRef.current.getBoundingClientRect();
      const xPos = ((clientX - left) / width) * 100;
      const yPos = ((clientY - top) / height) * 100;

      gsap.to(element, {
        backgroundPosition: `${xPos}% ${yPos}%`,
        duration: 0.3,
      });
    };

    const animation = gsap.to(`.${styles.description}`, {
      duration: 0.5,
      backgroundImage:
        "radial-gradient(circle closest-side at 50% 50%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 60%, rgba(255, 255, 255, 0.4) 80%, transparent 100%)",
      backgroundClip: "text",
      backgroundSize: "400px 450px",
      backgroundRepeat: "no-repeat",
      transitionTimingFunction: "cubic-bezier(0.33, 0.81, 0.66, 0.95)",
      backdropFilter: "blur(10px)",
      backgroundClip: "text",
      cursor: "default",
      // backgroundPosition: "50% center",
      paused: true,
    });

    element.addEventListener("mouseenter", () => animation.play());
    element.addEventListener("mousemove", (event) => onMouseMove(event));
    element.addEventListener("mouseleave", () => {
      animation.reverse();
      gsap.to(element, {
        backgroundPosition: "50% 50%",
        duration: 0.3,
        paused: true,
      });
    });
  }, []);

  return (
    <div class="flex justify-center items-center flex-col p-32 pb-0">
      <Image src="/datasafe.png" height={100} width={100} />
      <div
        ref={textRef}
        className={styles.description}
        style={{ color: "rgba(255, 255, 255, 0.15)" }}
      >
        <p class="text-[27px] text-white font-sans font-medium tracking-[5px] mt-12 uppercase">
          your data isn't our business. keeping it safe is.
        </p>
        <div class="max-w-[1200px] mx-auto p-16 mb-52">
          all your personal data and <br />
          transactions are encrypted and <br />
          secured. there's no room for mistakes <br />
          because we didn't leave any.
        </div>
      </div>
    </div>
  );
}

export default DataPrivacySection;
