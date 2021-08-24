import React, { useEffect, useState } from "react";
const GetNewsUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";

import { Istory } from "../interfaces/Istories";
import StoryComponent from "../components/StoryComponent";
import styles from "../styles/stories.module.scss";

const getRandomNews = function (
  Ids: number[],
  numberOfstories: number
): number[] {
  const RandomIds = [] as number[];
  const RandomStories = [];
  while (RandomIds.length < numberOfstories) {
    let randomIndex = Math.floor(Math.random() * Ids.length) + 1;
    if (RandomIds.indexOf(randomIndex) === -1) RandomIds.push(randomIndex);
    RandomStories.push(Ids[randomIndex]);
  }
  return RandomStories;
};

export default function Stories({
  newsIDs,
}: {
  newsIDs: number[];
}): JSX.Element {
  const numberOfStories = 10;
  const [randomIds, setRandomIds] = useState(
    getRandomNews(newsIDs, numberOfStories)
  );
  const [displayStories, setDisplayStories] = useState<Istory[]>([]);

  const newRandomIDs = function () {
    setRandomIds(getRandomNews(newsIDs, numberOfStories));
  };

  const getStories = function (randomIds: number[]): any {
    const arrOfPromises = randomIds.map((id) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    );
    Promise.all(arrOfPromises)
      .then((results) => {
        return Promise.all(results.map((r) => r.json()));
      })
      .then((values) => {
        let sorttedStories = values.sort((a, b) => a.score - b.score);
        setDisplayStories(sorttedStories);
      });
  };

  useEffect(() => {
    getStories(randomIds);
  }, [randomIds]);
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <h2>10 Random Hacker News</h2>
        <div className={styles.container__header__button}>
          <a onClick={() => newRandomIDs()}>Randomize</a>
        </div>
      </div>
      <div className={styles.container__stories}>
        {displayStories ? (
          displayStories.map((news) => {
            return <StoryComponent key={news.id} news={news} />;
          })
        ) : (
          <p>...loading</p>
        )}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(GetNewsUrl);
  const data = await res.json();

  return {
    props: {
      newsIDs: data,
    },
  };
}
