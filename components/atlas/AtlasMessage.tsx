type AtlasMessageProps = {
  author: "atlas" | "user";
  text: string;
};

export default function AtlasMessage({
  author,
  text,
}: AtlasMessageProps) {
  const isAtlas = author === "atlas";

  return (
    <div
      className={`flex ${
        isAtlas ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-lg ${
          isAtlas
            ? "bg-cyan-600 text-white"
            : "bg-zinc-800 text-white"
        }`}
      >
        {text}
      </div>
    </div>
  );
}