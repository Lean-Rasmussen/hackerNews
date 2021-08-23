import Link from "next/link";
import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Hacker News</h1>
      <p>Your number 2 place for all things hacked</p>
      <button>
        <Link href="/stories">Checkout 10 random Stories</Link>
      </button>
    </div>
  );
};

export default Home;
