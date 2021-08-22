import React from "react";

import { Istory } from "../interfaces/Istories";
import styles from "../styles/storyComponent.module.scss";
export default function StoryComponent({
  news,
}: {
  news: Istory;
}): JSX.Element {
  return (
    <div className={styles.container}>
      <h3>{news.title ? news.title : "Unnamed Story"}</h3>
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
      <p>{`News id : ${news.id}`}</p>
      <p>
        {news.time
          ? `created at : ${new Date(1172101602)}`
          : "No time registered"}
      </p>
    </div>
  );
}
