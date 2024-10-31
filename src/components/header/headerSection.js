import React from "react";
import styles from "../../app/page.module.scss";

function HeaderSection() {
  return (
    <>
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
    </>
  );
}

export default HeaderSection;
