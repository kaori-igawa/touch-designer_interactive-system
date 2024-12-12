'use client';

import { useCallback } from "react";


const reactions = [
  '💖', '💗', '👏', '😆', '🤩', '😍', '🥺', '😢', '😭', '💩', '😺', '💯',
]


export default function ReactionList() {

  const sendReaction = useCallback((reaction: string) => {

    const url = 'https://script.google.com/macros/s/AKfycbz8VybN4qZaIaS6jTtkeGrIsUnAKfEYy1Po_bsqfI6J9wLHrnZuUneQHMLldjvl_eVz9A/exec';

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
      .catch((e) => console.log(`error: ${e}`));
  }, []);


  return (
    <ul className="flex flex-wrap justify-center items-center gap-7">
      {reactions.map((reaction, index) => {
        return (
          <li key={index} className="text-8xl" onClick={() => sendReaction(reaction)}>{reaction}</li>
        )
      })}
    </ul>
  );
}
