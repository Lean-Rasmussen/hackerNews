import React from "react";
import Link from "next/link";
import { Istory } from "../interfaces/Istories";
import styles from "../styles/storyComponent.module.scss";
export default function StoryComponent({
  news,
}: {
  news: Istory;
}): JSX.Element {
  return (
    <div className={styles.story}>
      <Link href="/story" passHref={true}>
        <h3 className={styles.story__headline}>{news.title}</h3>
      </Link>

      <p className={styles.story__score}>{`Score : ${news.score}`}</p>
      <p className={styles.story__created}>{`created at : ${new Date(
        news.time * 1000
      )}`}</p>
      <a className={styles.story__link} target={`_blank`} href={news.url}>
        read more
        <span className={styles.story__link__arrow}>&rarr;</span>
      </a>
    </div>
  );
}
