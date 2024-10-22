import Navbar from "@/navbar/navbar";
import styles from "./page.module.scss";
import Image from "next/image";
import Arrow from "@/assets/icons/arrow";

export default function Home() {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident";
  const words = text.split(" ");

  const cardData = [
    {
      id: 1,
      title: "Scan & Pay",
      subtitle: "Any UPI QR",
      image: "/snp-logo-final.webp",
      bg_image: "/scan.webp",
    },
    {
      id: 2,
      title: "Using payments",
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
    <div className={styles.main}>
      <Navbar />
      <div className={styles.head_container}>
        <div className={styles.video_div}>
          <video
            className={styles.video}
            src="/crud.mp4"
            loop
            muted
            autoPlay
          ></video>
        </div>
      </div>
      <div className="h-[100vh]">
        <div className={styles.header}>
          crafted for the <br />
          creditworthy
        </div>
        <div className={styles.sub_header}>
          CRED is a members-only club that enables the <br />
          trustworthy to make financial progress
        </div>
      </div>
      <div className={styles.detail_container}>
        <div className={styles.details}>
          <p className={styles.detail_header}>NOT EVERYONE MAKES IT IN.</p>
          <div className={styles.detail_content}>
            {words.map((word, index) => (
              <span key={index}>{word} </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <video src="/phone-ticker.mp4" loop muted autoPlay></video>
      </div>
      <div className={styles.description_one}>
        <p className={styles.text}>
          all that you deserve.
          <br />
          and some more.
        </p>
        <p className={styles.sub_text}>
          if you're a CRED member, you're already a step ahead. every <br />
          experience you unlock takes you higher up the pedestal.
        </p>
      </div>
      <div className={styles.description_two}>
        <div>
          <video
            className={styles.fold_video}
            src="/fold.mp4"
            loop
            muted
            autoPlay
          ></video>
        </div>
        <div className={styles.text_overlay}>
          <p className={styles.text_two}>
            do more with <br />
            your credit cards
          </p>
          <p className={styles.sub_text}>
            manage your credit cards better and improve your credit score:{" "}
            <br /> receive payment reminders, uncover hidden fees, get spending
            <br /> insights, and discover ways to maximize card benefits.
          </p>
        </div>
      </div>
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
                <Image src={item.image} height={250} width={250} />
                <p class="font-bold text-white text-[40px] font-sans mt-[30px] tracking-tight">
                  {item.title}
                  <br />
                  {item.subtitle}
                </p>
                <div class="flex flex-row items-center gap-3 border-zinc-600 border-[1px] p-3 mt-5 pl-6 pr-6 w-fit">
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
    </div>
  );
}
