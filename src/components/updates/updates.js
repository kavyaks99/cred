import Image from "next/image";
import React from "react";

function Updates() {
  const updateList = ["payments", "upgrades", "company", "insider perks"];
  return (
    <div
      class="bg-black h-[100vh] w-[100%] fixed p-32 pt-30 "
      style={{ zIndex: 10 }}
    >
      <div class="flex justify-between pt-44">
        <div class="flex flex-col text-left">
          <span class="text-white text-[24px] uppercase tracking-[5px] border-b-[1px] border-zinc-700 w-[300px] pb-6">
            What's new
          </span>
          {updateList.map((update) => (
            <span class="text-zinc-600 text-[24px] uppercase tracking-[3px] border-b-[1px] border-zinc-700 w-[300px] pt-6 pb-6">
              {update}
            </span>
          ))}
        </div>
        <div>
          <div class="mb-12 border-zinc-800 border-[1px] relative">
            <span class="text-white text-[14px] tracking-[3px] absolute top-[-20px] left-8 bg-black border-zinc-800 border-[1px] p-2 pl-3 pr-3">
              NOW LIVE
            </span>
            <img src="/now-live.webp" />
          </div>
          <div class="flex flex-row gap-36">
            <div class="flex flex-col gap-2 text-center">
              <img src="/garage-thumbnail.webp" width={180} height={120} />
              <span class="tracking-[3px] text-white font-bold text-[20px]">
                GARAGE
              </span>
              <span class="text-[18px] text-zinc-600">
                manage, maintain, and
                <br />
                obsess over your cars
              </span>
            </div>
            <div class="flex flex-col gap-2 text-center">
              <img src="/p2p-thumbnail.webp" width={180} height={120} />
              <span class="tracking-[3px] text-white font-bold text-[20px]">
                PAY ANYONE
              </span>
              <span class="text-[18px] text-zinc-600">
                pay anyone, no matter
                <br />
                what UPI app they're on
              </span>
            </div>
            <div class="flex flex-col gap-2 text-center">
              <img src="/careers-thumbnail.webp" width={180} height={120} />
              <span class="tracking-[3px] text-white font-bold text-[20px]">
                WORK FOR CRED
              </span>
              <span class="text-[18px] text-zinc-600">
                apply to build the most
                <br />
                trustworthy community
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Updates;
