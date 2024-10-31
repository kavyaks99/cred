import Image from "next/image";
import React from "react";
import styles from "../../app/page.module.scss";

function UserTrustSection() {
  return (
    <div className={styles.description_five}>
      <div class="flex justify-around mt-32 items-center mb-32">
        <div class=" flex flex-col">
          <p class="text-[16px] text-white font-sans font-medium tracking-[5px] mt-12 uppercase">
            trusted by 15M members
          </p>
          <p class="text-[96px] font-bold mt-3 font-serif leading-none text-white ">
            the proof <br />
            writes itself
          </p>
        </div>
        <div class="flex gap-12">
          <div class="flex items-center flex-col leading-tight">
            <Image src="/rating-stars.png" height={150} width={150} />
            <span class="text-white text-[95px] font-bold mt-5">
              4.8
              <span class="text-[45px] text-zinc-600 font-semibold">/5</span>
            </span>
            <span class="text-[20px] text-zinc-500 tracking-[5px] font-semibold">
              APP STORE
            </span>
          </div>
          <div class="flex items-center flex-col leading-tight">
            <Image src="/rating-stars.png" height={150} width={150} />
            <span class="text-white text-[95px] font-bold mt-5">
              4.8
              <span class="text-[45px] text-zinc-600 font-semibold ml-2">
                /5
              </span>
            </span>
            <span class="text-[20px] text-zinc-500 tracking-[5px] font-semibold">
              PLAY STORE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTrustSection;
