const reactions = [
  '💖', '💗', '👏', '😆', '🤩', '😍', '🥺', '😢', '😭', '💩', '😺', '💯',
]


export default function ReactionList() {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-7">
      {reactions.map((reaction, index) => {
        return (
          <li key={index} className="text-8xl">{reaction}</li>
        )
      })}
    </ul>
  );
}
