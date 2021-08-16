import React from "react";
import styles from "../styles/story.module.scss";
export default function Story(): JSX.Element {
  return (
    <div className={styles.container}>
      this is the story you are looking for
      <h3>story.title</h3>
      <a href="story.URL"></a>
      <p>story.timestamp</p>
      <p>story.score</p>
      <p>Author.id</p>
      <p>Author.karma</p>
    </div>
  );
}
