"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "../../app/page.module.scss";
import { ScrollTrigger } from "gsap/all";

function MembershipIntroSection() {
  const text =
    "the story of CRED beginswith trust. we believe individuals who've proven their trustworthiness deserve better: better experiences, better rewards, better rules. this is the status quo we're building. make it to the club, and experience the ascension yourself";
  const words = text.split(" ");
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".word",
      { color: "#333333" },
      {
        color: "white",
        duration: 0.5,
        scrollTrigger: {
          trigger: `.${styles.detail_content}`,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
        },
        stagger: 0.6,
      }
    );
  }, []);

  return (
    <div className={styles.detail_container}>
      <div className={styles.details}>
        <p className={styles.detail_header}>NOT EVERYONE MAKES IT IN.</p>
        <div className={styles.detail_content}>
          {words.map((word, index) => (
            <span key={index} className="word">
              {word}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MembershipIntroSection;
