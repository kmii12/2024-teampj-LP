import styles from "./Mv.module.scss";
import Link from "next/link";
import Image from "next/image";
// import decoCloud from "../../../public/img/deco_cloud_leftTop.png";

import "../styles/colors.scss";

// import ReactDOM from "react-dom";
import { motion } from "framer-motion";

// export default function Mv() {
//   return (
//     <>
//       <div className={styles.mvContainer}>
//         <motion.div
//           className={styles.deco}
//           initial={{ x: 48, y: 48, scale: 0 }}
//           whileInView={{ x: 0, y: 0, scale: 1 }}
//           transition={{ duration: 0.6, type: "spring", bounce: 0.8 }}
//         >
//           <Image
//             src="/img/deco_cloud_leftTop.png"
//             height={112}
//             width={188}
//             alt="雲"
//           />
//         </motion.div>
//       </div>
//     </>
//   );
// }

export default function Mv() {
  return (
    <>
      <div className={styles.mvContainer}>
        {/* <Image
          src="/img/deco_cloud_leftTop.png"
          height={112}
          width={188}
          alt="雲"
          className={styles.deco}
        /> */}

        <div className={styles.mvMainContainer}>
          <div className={styles.mvTtlContainer}>
            <h2>
              思い出せないあの絵本が、
              <br />
              きっと見つかる
            </h2>
            <p className={styles.mvTxt}>
              どんな絵本だったか、断片的な記憶だけでも大丈夫です。このアプリは、絵本のイメージやキーワードから簡単に探せるツールです。昔読んだ懐かしい一冊も、誰かが教えてくれた素敵な本も、すぐに見つけられます。
            </p>
          </div>
          <div className={styles.mvDownRoadWrap}>
            <Link href={`/`} className={styles.appStoreBtn}></Link>
            <Link href={`/`} className={styles.googlePlayBtn}></Link>
          </div>
        </div>
      </div>
    </>
  );
}
