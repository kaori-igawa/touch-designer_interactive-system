'use client';

import { useCallback } from "react";
import Image from "next/image";


const reactions = [
  'stampImage_01', 'stampImage_02', 'stampImage_03', 'stampImage_04', 'stampImage_05', 'stampImage_06', 'stampImage_07', 'stampImage_08',
]


export default function ReactionList() {

  const sendReaction = useCallback((reaction: string) => {

    const url = `https://script.google.com/macros/s/${process.env.NEXT_PUBLIC_GAS_ID}/exec`;

    const params = new URLSearchParams();
    params.append('reaction', reaction);

    const requestParams = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    };
    
    fetch(url, requestParams)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <ul className="flex flex-wrap justify-center items-center gap-7">
      {reactions.map((reaction, index) => {
        return (
          <li key={index} className="w-2/5" onClick={() => sendReaction(reaction)}>
            <Image src={`/images/${reaction}.png`} alt={reaction} sizes="100vw" width={300} height={300} />
          </li>
        )
      })}
    </ul>
  );
}
