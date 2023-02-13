import Image from "next/image";
import React from "react";
import { Gif } from "../app/gifs/models";

interface Props {
  data: Gif;
}

function Card({ data }: Props) {
  return (
    <div className="w-fit p-4 rounded-md border flex flex-col justify-center">
      <Image
        src={
          data.images.original.url
            ? data.images.downsized_medium.url
            : "https://media.tenor.com/OdB60pI5DO4AAAAM/letter-x.gif"
        }
        alt="Image"
        height="200"
        width="200"
      />
      <p>{data.username ? data.username : "No title"}</p>
    </div>
  );
}

export default Card;
