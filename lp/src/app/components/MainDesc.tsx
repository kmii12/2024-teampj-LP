import React from "react";
import styles from "./MainDesc.module.scss";
// import Link from "next/link";
// import Image from "next/image";
// import decoCloud from "../../../public/img/deco_cloud_leftTop.png";

import "../styles/colors.scss";

interface propsType {
  title: string;
  subTitle: string;
  txt: string;
}

const MainDesc = (props: propsType) => {
  return (
    <section className={styles.descriptionContainer}>
      <h3>{props.title}</h3>
      <h4>{props.subTitle}</h4>
      <p className={styles.descriptionTxt}>{props.txt}</p>
    </section>
  );
};

export default MainDesc;
