import Navbar from "@/navbar/navbar";
import styles from "./page.module.scss";
import Image from "next/image";
import Arrow from "@/assets/icons/arrow";
import CredIcon from "@/assets/icons/cred";
import Accordion from "@/components/accordion/accordion";
import DownloadCred from "@/components/credDownload/downloadCred";

export default function Home() {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident";
  const words = text.split(" ");
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
      <div class="flex justify-center items-center flex-col p-32">
        <Image src="/datasafe.png" height={100} width={100} />
        <p class="text-[27px] text-white font-sans font-medium tracking-[5px] mt-12 uppercase">
          your data isn't our business. keeping it safe is.
        </p>
        <p class="text-[64px] font-medium text-center mt-14 font-sans leading-snug text-zinc-800 tracking-tight">
          all your personal data and <br />
          transactions are encrypted and <br />
          secured. there's no room for mistakes <br />
          because we didn't leave any.
        </p>
      </div>
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
              like all good things in life, earning a CRED membership is not
              easy; but the possibility of unlocking a greater future makes the
              effort worthwhile.
            </span>
          </div>
        </div>
      </div>
      <div class="border-t border-b border-zinc-600 p-16 text-white cursor-pointer">
        <Accordion />
      </div>
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
            CRED encrypts all data and transactions to ensure a completely
            secure experience for our members.
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
              <div class="flex flex-col gap-2">
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
    </div>
  );
}
