import { Gif } from "../app/gifs/models";

export const getContent = ({ keyword = "messi" } = {}): Promise<Gif[]> => {
  const key = process.env.API_KEY;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${keyword}&limit=30&offset=0&rating=g&lang=en`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data.data);
};
