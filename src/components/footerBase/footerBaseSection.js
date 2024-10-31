import React from "react";
import DownloadCred from "../credDownload/downloadCred";

function FooterBaseSection() {
  return (
    <>
      <div class="pt-10 flex justify-between pb-36 p-32">
        <span class="text-zinc-600 text-[20px] font-sans mt-8 tracking-wide">
          copyright © 2020-24 Dreamplug Technologies Pvt Ltd.
        </span>
        <div class="text-zinc-600 text-[20px]  font-sans mt-8 tracking-wide ">
          <span class="border-r border-zinc-500 pr-5">privacy policy</span>
          <span class="pl-5">terms and conditions</span>
        </div>
      </div>
      <div class="sticky bottom-6 mr-16 flex justify-end">
        <DownloadCred />
      </div>
    </>
  );
}

export default FooterBaseSection;
