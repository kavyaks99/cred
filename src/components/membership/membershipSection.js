import React from "react";
import DownloadCred from "../credDownload/downloadCred";

function MembershipSection() {
  return (
    <div
      class="h-[100vh]"
      style={{
        backgroundImage: `url('/cta-fold-final.webp')`,
      }}
    >
      <div class="flex h-[100vh] items-center justify-between pt-10">
        <div class="w-[100%] h-[200px]"></div>
        <div class=" flex flex-col">
          <div class="w-[30%]">
            <DownloadCred />
          </div>
          <span class="text-white text-[112px] font-serif font-bold leading-none">
            not everyone <br />
            gets it
          </span>
          <span class="text-zinc-400 text-[22px] w-[80%] mt-8 tracking-wider leading-relaxed">
            like all good things in life, earning a CRED membership is not easy;
            but the possibility of unlocking a greater future makes the effort
            worthwhile.
          </span>
        </div>
      </div>
    </div>
  );
}

export default MembershipSection;
