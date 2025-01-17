import React from "react";
import styles from "./Question.module.scss";
// import Link from "next/link";
// import Image from "next/image";
// import decoCloud from "../../../public/img/deco_cloud_leftTop.png";

import "../styles/colors.scss";

export default function Question() {
  return (
    <>
      <div className={styles.questionList}>
        <section className={styles.questionItem}>
          <div className={styles.questionIcon}></div>
          <h3>えほんポケットでは、どんなことができますか？</h3>
        </section>
      </div>
    </>
  );
}
