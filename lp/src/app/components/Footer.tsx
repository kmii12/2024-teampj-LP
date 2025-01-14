import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import logoVer2 from "../../../public/img/logo_ver2.png";

import "../styles/colors.scss";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.logoWrap}>
          <Image src={logoVer2} height={92} width={382} alt="えほんポケット" />{" "}
        </div>
        <div className={styles.downRoadWrap}>
          <Link href={`/`} className={styles.appStoreBtn}></Link>
          <Link href={`/`} className={styles.googlePlayBtn}></Link>
        </div>
      </footer>
    </>
  );
}
