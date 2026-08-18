"use client";

import { Game } from "@/types/Game";
import { useCart } from "@/context/CartContext";

type Props = {
  game: Game;
};

export default function GameActions({ game }: Props) {
  const { addItem } = useCart();

  function handleClick() {
    console.log("Clique no botão");
    console.log("Game:", game);

    addItem({
      ...game,
      category: "game",
    });

    console.log("Depois do addItem");
  }

  return (
    <button
      onClick={handleClick}
      className="mt-8 rounded-xl bg-cyan-500 px-10 py-4 font-bold hover:bg-cyan-400 transition"
    >
      Comprar
    </button>
  );
}