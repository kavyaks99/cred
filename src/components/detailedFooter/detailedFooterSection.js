import Image from "next/image";
import React from "react";

function DetailedFooterSection() {
  const upgrades = ["CRED money", "CRED mint", "CRED garage", "CRED escapes"];
  const resources = [
    "partner with us",
    "calculators",
    "articles",
    "tech blog",
    "credit score guide",
    "credit card",
    "payment guide",
    "customer care",
    "Dreampurse",
    "(HipBar) wallet",
    "refund form",
  ];

  const payments = [
    "Scan & Pay",
    "Tap to Pay",
    "Pay anyone",
    "RuPay cards on UPI",
  ];

  const policy = [
    "transaction & user",
    "verification",
    "google API disclosure",
    "UPI FAQ &grievances",
    "returns and refunds",
    "security",
    "equal opportunity policy",
    "investor relations",
    "other disclosures",
  ];

  return (
    <div class="flex justify-around p-32 border-t border-b border-zinc-600 ">
      <div class="flex flex-col w-[100%]">
        <Image src="/footer-logo.png" width={100} height={100} />
        <Image
          class="mt-auto"
          src="/security-final-2.webp"
          height={300}
          width={600}
        />
        <span class="text-zinc-300 text-[20px] font-bold mt-6 tracking-wider">
          complete security. no asterisks.
        </span>
        <span class="text-zinc-600 text-[20px] font-medium mt-8 tracking-wider w-[60%]">
          CRED encrypts all data and transactions to ensure a completely secure
          experience for our members.
        </span>
      </div>
      <div>
        <div class="mb-32 border-zinc-800 border-[1px] relative">
          <span class="text-white text-[14px] tracking-[3px] absolute top-[-20px] left-8 bg-black border-zinc-800 border-[1px] p-2 pl-3 pr-3">
            NOW LIVE
          </span>
          <Image src="/now-live-wide.webp" height={400} width={600} />
        </div>
        <div class="flex flex-row gap-16">
          <div>
            <div class="flex flex-col gap-2 mb-12">
              <span class="text-[20px] tracking-[5px] font-semibold text-zinc-200">
                UPGRADES
              </span>
              {upgrades.map((cred) => (
                <span class="text-[20px] tracking-[2px]  text-zinc-600">
                  {cred}
                </span>
              ))}
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-[20px] tracking-[5px] font-semibold text-zinc-200">
                PAYMENTS
              </span>
              {payments.map((cred) => (
                <span class="text-[20px] tracking-[2px]  text-zinc-600">
                  {cred}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div class="flex flex-col gap-2 mb-12">
              <span class="text-[20px] tracking-[5px] font-semibold text-zinc-200">
                COMPANY
              </span>
              <span class="text-[20px] tracking-[2px]  text-zinc-600">
                about CRED
              </span>
              <span class="text-[20px] tracking-[2px]  text-zinc-600">
                careers
              </span>
            </div>
            <div class="flex flex-col gap-2 mb-12">
              <span class="text-[20px] tracking-[5px] font-semibold text-zinc-200">
                INSIDER PERKS
              </span>
              <span class="text-[20px] tracking-[2px]  text-zinc-600">
                upgrade to UPI
              </span>
            </div>
            <div class="flex flex-col gap-2">
              <span class="text-[20px] tracking-[5px] font-semibold text-zinc-200">
                DESIGN
              </span>
              <span class="text-[20px] tracking-[2px]  text-zinc-600">
                NeoPOP
              </span>
              <span class="text-[20px] tracking-[2px]  text-zinc-600">
                manifesto
              </span>
            </div>
          </div>
          <div>
            <div class="flex flex-col gap-2 mb-12">
              <span class="text-[20px] tracking-[5px] font-semibold text-zinc-200">
                RESOURCES
              </span>
              {resources.map((cred) => (
                <span class="text-[20px] tracking-[2px]  text-zinc-600">
                  {cred}
                </span>
              ))}
            </div>
            <div class="flex flex-col gap-2 w-[100%]">
              <span class="text-[20px] tracking-[5px] font-semibold text-zinc-200">
                POLICY
              </span>
              {policy.map((cred) => (
                <span class="text-[20px] tracking-[2px]  text-zinc-600">
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedFooterSection;
