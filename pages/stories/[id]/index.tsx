import React from "react";
import Image from "next/image";
import styles from "../../../styles/story.module.scss";
import { GetServerSideProps } from "next";
import { Istory, Iuser } from "../../../interfaces/Istories";
import musk from "../../../styles/img/musk.jpg";
import jerry from "../../../styles/img/jerry.jpg";

export default function Story({
  story,
  author,
}: {
  story: Istory;
  author: Iuser;
}): JSX.Element {
  return (
    <div className={styles.container}>
      <section className={styles.userinfo}>
        <h1>{story.by}</h1>
        <p>Karma score : {author.karma}</p>
        <Image
          alt="profile image"
          src={story.id % 2 === 0 ? jerry : musk}
        ></Image>
      </section>

      <section className={styles.articleinfo}>
        <h2>Article Info</h2>
        <h3>{story.title}</h3>
        <p>Story Score: {story.score}</p>
        <p>{`created at : ${new Date(story.time * 1000)}`}</p>
        <a href={story.url}>Read Article</a>
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const storyresponse = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${context.params.id}.json`
  );
  const story = await storyresponse.json();
  const authorResponse = await fetch(
    `https://hacker-news.firebaseio.com/v0/user/${story.by}.json`
  );
  const author = await authorResponse.json();
  return {
    props: {
      story: story,
      author: author,
    },
  };
};
