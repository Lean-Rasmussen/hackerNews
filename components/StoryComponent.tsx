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
      <h3 className={styles.story__headline}>{news.title}</h3>
      <Link href={`/stories/${news.id}`} passHref={true}>
        <p>Author : {news.by}</p>
      </Link>

      <p className={styles.story__score}>{`Score : ${news.score}`}</p>
      <a className={styles.story__link} target={`_blank`} href={news.url}>
        Open article
        <span className={styles.story__link__arrow}>&rarr;</span>
      </a>
    </div>
  );
}
