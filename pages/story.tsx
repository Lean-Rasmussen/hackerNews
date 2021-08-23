import React from "react";
import styles from "../styles/story.module.scss";
export default function Story({ story, user }): JSX.Element {
  const storyUrl = "https://hacker-news.firebaseio.com/v0/item/${id}.json";
  const getUserUrl = "https://hacker-news.firebaseio.com/v0/user/${id}.json";
  return (
    <div className={styles.container}>
      <h3>story.title</h3>
      <a href="story.URL"></a>
      <p>story.timestamp</p>
      <p>story.score</p>
      <p>Author.id</p>
      <p>Author.karma</p>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const resStory = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${context.id}.json`
  );
  const story = await resStory.json();
  const resUser = await fetch(
    `https://hacker-news.firebaseio.com/v0/user/${story.data.user}.json`
  );
  const user = await resUser.json();

  return {
    props: {
      story: story,
      user: user,
    },
  };
};
