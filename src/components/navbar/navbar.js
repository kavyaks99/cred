"use client";
import styles from "./navbar.module.scss";
import CredIcon from "@/assets/icons/cred";
import Toggle from "@/assets/icons/toggle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import Updates from "../updates/updates";
function Navbar() {
  const [active, setActive] = useState(false);

  const menuClick = () => {
    setActive(true);

    gsap.to(".line", {
      rotate: 45,
      width: "28px",
      transformOrigin: "top left",
      ease: "power1.inOut",
      delay: 0,
      duration: 0.6,
    });

    gsap.to(".center_line", {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
    });
    gsap.to(".last_line", {
      rotate: -45,
      width: "28px",
      transformOrigin: "left bottom",
      ease: "power1.inOut",
      delay: 0,
      duration: 0.6,
    });
  };
  useGSAP(() => {}, []);
  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles.navbar_container}>
          <li className={styles.cred_logo}>
            <CredIcon height={88} width={74} />
          </li>
          <li class="flex flex-row  border-zinc-700 border-[1px] ">
            <button className={styles.btn_toggle}>
              <Toggle />
            </button>
            <button
              className="menu_btn flex justify-center flex-col items-center gap-2 border-l-[1px] border-zinc-700 p-7"
              onClick={menuClick}
            >
              <span className="line w-[25px] h-[2px] bg-white"></span>
              <span className=" center_line w-[25px] h-[2px] bg-white"></span>
              <span className=" last_line w-[25px] h-[2px] bg-white"></span>
            </button>
          </li>
        </ul>
      </div>
      {active && <Updates />}
    </>
  );
}

export default Navbar;
