import React from "react";
import styles from "../../app/page.module.scss";
import Image from "next/image";
import Arrow from "@/assets/icons/arrow";
function PaymentsSection() {
  const cardData = [
    {
      id: 1,
      title: "scan & pay",
      subtitle: "any UPI QR",
      image: "/snp-logo-final.webp",
      bg_image: "/scan.webp",
    },
    {
      id: 2,
      title: "UPI payments",
      subtitle: "on credit",
      image: "/tnp-logo-final.webp",
      bg_image: "/cc-on-upi.webp",
    },
    {
      id: 3,
      title: "Tap your phone",
      subtitle: "pay on credit",
      image: "/rupay-logo-final.webp",
      bg_image: "/tap-n-pay.webp",
    },
    {
      id: 4,
      title: "Send money to",
      subtitle: "any UPI app",
      image: "/p2p-logo-final.webp",
      bg_image: "/p2p.webp",
    },
    {
      id: 4,
      title: "Manage your",
      subtitle: "cars' vitals",
      image: "/garage-logo-final.webp",
      bg_image: "/garage.webp",
    },
    {
      id: 4,
      title: "Travel curated",
      subtitle: "for members",
      image: "/escapes-logo-final.webp",
      bg_image: "/escapes.webp",
    },
  ];

  return (
    <div className={styles.description_three}>
      <p className={styles.text_two}>
        upgrade your life.
        <br />
        bit by bit.
      </p>
      <div className={styles.card_container}>
        {cardData.map((item) => (
          <div
            key={item.id}
            className={styles.card}
            style={{
              backgroundImage: `url(${item.bg_image})`,
            }}
          >
            <div class="p-[30px] flex  flex-col text-left pt-12 pl-12">
              <Image src={item.image} height={155} width={155} />
              <p class="font-medium text-white text-[40px] font-sans mt-[30px] tracking-tight">
                {item.title}
                <br />
                {item.subtitle}
              </p>
              <div class="flex flex-row items-center gap-3 border-zinc-600 border-[1px] p-3 mt-3 pl-6 pr-6 w-fit">
                <button class="text-white text-[15px] font-sans tracking-widest font-medium">
                  KNOW MORE
                </button>
                <Arrow />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PaymentsSection;
