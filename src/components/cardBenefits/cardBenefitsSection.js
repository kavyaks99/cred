import React from "react";
import styles from "../../app/page.module.scss";

function CardBenefitsSection() {
  return (
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
          manage your credit cards better and improve your credit score: <br />{" "}
          receive payment reminders, uncover hidden fees, get spending
          <br /> insights, and discover ways to maximize card benefits.
        </p>
      </div>
    </div>
  );
}

export default CardBenefitsSection;
