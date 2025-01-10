import styles from "./page.module.scss";
import "./styles/colors.scss";

import Header from "./components/Header";
import Mv from "./components/Mv";

export default function Home() {
  return (
    <>
      <Header />
      <Mv />
      <main className={styles.mainContainer}></main>
    </>
  );
}
