import Link from "next/link";
import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.home__header}>Hacker News</h1>
      <h2 className={styles.home__subheader}>
        Your number 2 place for all things hacked
      </h2>
      <button className={styles.home__button}>
        <Link href="/stories">Checkout 10 random Stories</Link>
      </button>
    </div>
  );
};

export default Home;
