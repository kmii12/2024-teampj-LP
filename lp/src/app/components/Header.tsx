import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import logoVer2 from "../../../public/img/logo_ver2.png";

import "../styles/colors.scss";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Image src={logoVer2} height={92} width={382} alt="えほんポケット" />{" "}
        <div className={styles.downRoadBtn}>
          <Link href={`https://github.com/miki1212-kn/2024-teampj-LP`}>
            <p>アプリURL</p>
          </Link>
        </div>
      </header>
    </>
  );
}
