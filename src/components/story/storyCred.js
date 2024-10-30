"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "../../app/page.module.scss";
import { ScrollTrigger } from "gsap/all";
function StoryCred() {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident";
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
          markers: true,
          scrub: 0.5,
        },
        stagger: 0.2,
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

export default StoryCred;
