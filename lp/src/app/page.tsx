import styles from "./page.module.scss";
import "./styles/colors.scss";
import Link from "next/link";

import Header from "./components/Header";
import Mv from "./components/Mv";
import GuideItem from "./components/GuideItem";
import MainDesc from "./components/MainDesc";

import React from "react";

console.log(Mv);
export default function Home() {
  return (
    <>
      <Header />
      <Mv />

      <main className={styles.mainContainer}>
        <div className={styles.guideContainer}>
          <GuideItem
            title="調べる！"
            txt="「調べる」機能は、絵本をもっと楽しむための情報探しをサポートします。"
            image="../../../public/img/"
          />
          <GuideItem
            title="保存する！"
            txt="お気に入りの絵本や大切な思い出を「えほんポケット」に保存して、いつでもどこでも楽しめます。"
            image="../../../public/img/"
          />
          <GuideItem
            title="読む！"
            txt="まるで本物の絵本をめくるような体験を。親子で楽しめる読み聞かせタイムをもっと特別にします。"
            image="../../../public/img/"
          />
        </div>

        <div className={styles.downRoadContainer}>
          <div className={styles.downRoadBox_left}>
            <h4>今すぐダウンロード！</h4>
            <p>
              「えほんポケット」は、親子で過ごす絵本の時間をもっと特別にするアプリです。大好きな絵本をいつでも、どこでも読めるだけでなく、新しい物語との出会いもお届けします。成長の瞬間に寄り添い、思い出を一緒に紡いでいきます。
            </p>
            <div className={styles.downRoadWrap}>
              <Link href={`/`} className={styles.appStoreBtn}></Link>
              <Link href={`/`} className={styles.googlePlayBtn}></Link>
            </div>
          </div>
          <div className={styles.downRoadBox_right}></div>
        </div>

        <section className={styles.mainDescriptionContainer}>
          <div className={styles.descriptionBox_left}></div>
          <div className={styles.descriptionBox_right}>
            <MainDesc
              title="えほんポケットの検索ページへようこそ！"
              subTitle="🔍 簡単・便利な検索機能"
              txt="キーワードで検索: タイトルや著者名を入力するだけで、すぐに絵本が見つかります。
年齢別おすすめ: お子さまの年齢や発達にぴったりの絵本を簡単に探せます。
テーマ別検索: 季節イベント、学び、遊びなど、テーマごとに選べる楽しさ"
            />
          </div>
        </section>
        <section className={styles.mainDescriptionContainer}>
          <div className={styles.descriptionBox_left}>
            <MainDesc
              title="検索結果を見てみよう！"
              subTitle="🔍 検索結果を確認する方法"
              txt="絵本カードでわかりやすく表示。表紙、タイトル、簡単な説明をひと目でチェックできます。
絞り込み機能で理想の絵本を探す。年齢、テーマ、人気ランキングでさらに絞り込み可能。
レビューやおすすめポイントを参考に、他のユーザーの声や、専門家のコメントで安心して選べます。"
            />
          </div>
          <div className={styles.descriptionBox_right}></div>
        </section>
        <section className={styles.mainDescriptionContainer}>
          <div className={styles.descriptionBox_left}></div>
          <div className={styles.descriptionBox_right}>
            <MainDesc
              title="あなただけの絵本棚"
              subTitle="📚 思い出をそっと保存"
              txt="大好きな絵本をコレクション。保存した絵本は、いつでも簡単に見返すことができます。お気に入りのリストを作って楽しみましょう。
気になる絵本をあとで読む。今すぐ手に取れない絵本も、保存しておけばあとから探す手間が省けます。"
            />
          </div>
        </section>
      </main>
    </>
  );
}
