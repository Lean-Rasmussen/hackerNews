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
    <div className={styles.container}>
      <Link href="/story" passHref={true}>
        <h3>{news.title ? news.title : "Unnamed Story"}</h3>
      </Link>

      <p>
        {news.url ? (
          <a target={`_blank`} href={news.url}>
            read more
          </a>
        ) : (
          "no link"
        )}
      </p>
      <p>{news.score ? `News Score : ${news.score}` : "not rated"}</p>
      <p>
        {news.time
          ? `created at : ${new Date(news.time * 1000)}`
          : "No time registered"}
      </p>
    </div>
  );
}
