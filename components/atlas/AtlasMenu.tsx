type AtlasMenuProps = {
  onSelect: (action: string) => void;
};

export default function AtlasMenu({ onSelect }: AtlasMenuProps) {
  return (
    <div className="grid gap-3">

      <button
        onClick={() => onSelect("games")}
        className="rounded-xl bg-cyan-500 py-3 font-bold hover:bg-cyan-400 transition"
      >
        🎮 Quero Jogos
      </button>

      <button
        onClick={() => onSelect("pc")}
        className="rounded-xl bg-zinc-800 py-3 hover:bg-zinc-700 transition"
      >
        🖥️ Quero montar um PC
      </button>

      <button
        onClick={() => onSelect("peripherals")}
        className="rounded-xl bg-zinc-800 py-3 hover:bg-zinc-700 transition"
      >
        🎧 Periféricos
      </button>

      <button
        onClick={() => onSelect("promotions")}
        className="rounded-xl bg-zinc-800 py-3 hover:bg-zinc-700 transition"
      >
        🔥 Promoções
      </button>

      <button
        onClick={() => onSelect("surprise")}
        className="rounded-xl bg-zinc-800 py-3 hover:bg-zinc-700 transition"
      >
        🎲 Me surpreenda
      </button>

    </div>
  );
}