import React from "react";
import styles from "./Mockup.module.scss";
// import Link from "next/link";
import Image from "next/image";
// import decoCloud from "../../../public/img/deco_cloud_leftTop.png";

import "../styles/colors.scss";

interface propsType {
  title: string;
  image: string;
}

const MainDesc = (props: propsType) => {
  return (
    <section className={styles.mockupContainer}>
      <Image
        src={props.image}
        alt={props.title}
        width={280}
        height={572}
        className={styles.image}
      ></Image>
    </section>
  );
};

export default MainDesc;
