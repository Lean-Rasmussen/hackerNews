import React from "react";

import { Istory } from "../interfaces/Istories";
export default function StoryComponent({
  news,
}: {
  news: Istory;
}): JSX.Element {
  return (
    <div>
      <h3>{news.title}</h3>
      <p>{news.score}</p>
      <p>{news.id}</p>
    </div>
  );
}
