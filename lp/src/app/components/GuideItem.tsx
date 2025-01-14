import React from "react";
import styles from "./GuideItem.module.scss";
// import Link from "next/link";
// import Image from "next/image";
// import decoCloud from "../../../public/img/deco_cloud_leftTop.png";

import "../styles/colors.scss";

interface propsType {
  title: string;
  txt: string;
  image: string;
}

const GuideItem = (props: propsType) => {
  return (
    <section className={styles.guideItem}>
      <h3>{props.title}</h3>
      <span></span>
      <p className={styles.guideItemTxt}>{props.txt}</p>
      <div className={styles.guideItemImg}>{props.image}</div>
    </section>
  );
};

export default GuideItem;
