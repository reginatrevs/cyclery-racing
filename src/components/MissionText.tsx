"use client";

export function MissionText({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, i) => (
        <span key={i}>
          <span className="inline-block transition-colors duration-300 hover:!text-magenta">
            {word}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}
