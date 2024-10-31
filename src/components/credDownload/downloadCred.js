import Image from "next/image";
import React from "react";

function DownloadCred() {
  return (
    <div class="border-zinc-600 border-[1px] p-4 mb-10 bg-black">
      <div class="flex flex-row justify-center items-center">
        <Image src="/qr-final.webp" height={80} width={80} />
        <span class="text-zinc-200 text-[23px] pl-5 text-center">
          Download <br /> CRED
        </span>
      </div>
    </div>
  );
}

export default DownloadCred;
