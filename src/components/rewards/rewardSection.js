import React from "react";
import styles from "../../app/page.module.scss";
function RewardSection() {
  return (
    <div className={styles.description_four}>
      <video
        src="/rewards.mp4"
        loop
        muted
        autoPlay
        class="absolute object-cover h-[100vh] w-[100vw]"
        style={{ zIndex: "-1000" }}
      ></video>
      <div class="flex justify-center items-center h-[100vh] flex-col">
        <p class="text-white text-[114px] font-serif font-bold leading-none tracking-tighter text-center">
          feel the odds fall
          <br />
          in your favor
        </p>
        <p class="text-zinc-300 font-sans max-w-[50%] text-center text-[20px] mt-12 tracking-wider leading-8">
          unlock cashback, exclusive rewards from select brands, and special
          access to curated products and experiences.
        </p>
      </div>
    </div>
  );
}

export default RewardSection;
