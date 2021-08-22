import React, { useEffect, useState } from "react";
const GetNewsUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";

import { Istory } from "../interfaces/Istories";
import StoryComponent from "../components/StoryComponent";

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
        console.log(values);
        setDisplayStories(values);
      });
  };

  useEffect(() => {
    getStories(randomIds);
  }, [randomIds]);
  return (
    <div>
      <h1>Hacker News</h1>
      <p>Your number 2 place for all things hacked</p>
      <button onClick={() => newRandomIDs()}>Get new Hacks</button>
      {displayStories
        ? displayStories.map((news) => {
            return <StoryComponent key={news.id} news={news} />;
          })
        : null}
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
