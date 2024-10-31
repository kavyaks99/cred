import React from "react";
import styles from "../../app/page.module.scss";

function MemberBenefitsSection() {
  return (
    <>
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
    </>
  );
}

export default MemberBenefitsSection;
