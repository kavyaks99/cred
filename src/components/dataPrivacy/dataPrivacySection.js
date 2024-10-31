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
      console.log({ left, top, width, height, clientX, clientY });
      const xPos = ((clientX - left) / width) * 100;
      const yPos = ((clientY - top) / height) * 100;
      console.log({ xPos, yPos });
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
      backgroundSize: "450px 450px",
      backgroundRepeat: "no-repeat",
      transitionTimingFunction: "cubic-bezier(0.33, 0.81, 0.66, 0.95)",
      backdropFilter: "blur(10px)",
      backgroundClip: "text",
      cursor: "default",
    });
    element.addEventListener("mouseenter", () => animation.play());
    element.addEventListener("mousemove", (event) => onMouseMove(event));
  }, []);

  return (
    <div class="flex justify-center items-center flex-col p-32">
      <Image src="/datasafe.png" height={100} width={100} />
      <p class="text-[27px] text-white font-sans font-medium tracking-[5px] mt-12 uppercase">
        your data isn't our business. keeping it safe is.
      </p>
      <div
        ref={textRef}
        className={styles.description}
        // onMouseEnter={onMouseEnter}
        // onMouseMove={onMouseMove}
        style={{ color: "rgba(255, 255, 255, 0.15)" }}
      >
        all your personal data and <br />
        transactions are encrypted and <br />
        secured. there's no room for mistakes <br />
        because we didn't leave any.
      </div>
    </div>
  );
}

export default DataPrivacySection;