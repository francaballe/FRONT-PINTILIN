// "use client";
import { Card } from "../components";
import { getContent } from "../hooks/getContent";

async function fetchGifs() {
  return getContent();
}

async function Home() {
  const gifs = await fetchGifs();

  return (
    <main className="w-full px-10 flex flex-row flex-wrap justify-center items-center gap-2">
      {gifs.map((gif) => (
        <Card key={gif.id} data={gif} />
      ))}
    </main>
  );
}

export default Home;
