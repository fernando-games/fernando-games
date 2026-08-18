"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

type GameCardProps = {
  id: number;
  slug: string;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  brand: string;
  platform: string;
  rating: number;
  atlasReview: string;
};

export default function GameCard({
  id,
  slug,
  title,
  category,
  price,
  image,
  description,
  brand,
  platform,
  rating,
  atlasReview,
}: GameCardProps) {
  const { addItem } = useCart();

  function handleBuy() {
    addItem({
      id,
      slug,
      title,
      category,
      price,
      image,
      description,
      brand,
      platform,
      rating,
      atlasReview,
    });
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-zinc-900 shadow-lg transition duration-300 hover:scale-105">
      <Link href={`/produto/${slug}`}>
        <img
          src={image}
          alt={title}
          className="h-56 w-full cursor-pointer object-cover"
        />
      </Link>

      <div className="p-5">
        <Link href={`/produto/${slug}`}>
          <h3 className="cursor-pointer text-2xl font-bold text-white transition hover:text-cyan-400">
            {title}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-zinc-400">
          {brand}
        </p>

        <p className="mt-2 text-xl font-bold text-cyan-400">
          {`R$ ${price.toFixed(2).replace(".", ",")}`}
        </p>

        <button
          onClick={handleBuy}
          className="mt-5 w-full rounded-lg bg-cyan-500 py-3 font-bold text-black transition hover:bg-cyan-400"
        >
          🛒 Comprar
        </button>
      </div>
    </div>
  );
}