import Image from "next/image";
import React from "react";
import { Gif } from "../app/gifs/models";

interface Props {
  data: Gif;
}

function Card({ data }: Props) {
  return (
    <div className="w-fit rounded-3xl	border-0 flex flex-col justify-center">
      <Image
        className="float-center rounded-3xl object-cover w-[250px] h-[400px]"
        src={
          data.images.original.url
            ? data.images.downsized_medium.url
            : "https://media.tenor.com/OdB60pI5DO4AAAAM/letter-x.gif"
        }
        alt="Image"
        width="300"
        height="1"
      />
      <p>{data.username ? data.username : "No title"}</p>
    </div>
  );
}

export default Card;
