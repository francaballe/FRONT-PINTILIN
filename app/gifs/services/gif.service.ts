import { Gif } from "../models";

export const getGifs = (): Promise<Gif[]> => {
  const key = process.env.API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=messi&limit=27&offset=0&rating=g&lang=en`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.data);
};
