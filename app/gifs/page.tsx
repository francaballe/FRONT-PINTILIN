import React from "react";

import { Card } from "../../components";
import { getGifs } from "./services";

async function fetchGifs() {
  return getGifs();
}

async function Gifs() {
  const gifs = await fetchGifs();

  return (
    <>
      {gifs.map((gif) => (
        <Card key={gif.id} data={gif} />
      ))}
    </>
  );
}

export default Gifs;
