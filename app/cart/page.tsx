"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
  cart,
  increaseQuantity,
  decreaseQuantity,
} = useCart();
const total = cart.reduce(
  (acc, item) => acc + item.price * item.quantity,
  0
);
  console.log("Carrinho na página:", cart);

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        🛒 Meu Carrinho
      </h1>

      {cart.length === 0 ? (
        <div className="rounded-xl bg-zinc-900 p-6">
          <p className="text-zinc-400">
            Seu carrinho está vazio.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((game) => (
            <div
              key={game.id}
              className="flex items-center gap-6 rounded-xl bg-zinc-900 p-6"
            >
              <img
                src={game.image}
                alt={game.title}
                className="h-28 w-28 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold">
                  {game.title}
                </h2>

                <p className="text-cyan-400">
                  R$ {game.price.toFixed(2).replace(".", ",")}
                </p>

                <div className="flex items-center gap-3 mt-3">

  <button
    onClick={() => decreaseQuantity(game.id)}
    className="w-8 h-8 rounded bg-red-500 hover:bg-red-400"
  >
    -
  </button>

  <span className="font-bold">
    {game.quantity}
  </span>

  <button
    onClick={() => increaseQuantity(game.id)}
    className="w-8 h-8 rounded bg-cyan-500 hover:bg-cyan-400"
  >
    +
  </button>

</div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-10 rounded-xl bg-zinc-900 p-6">

  <h2 className="text-2xl font-bold mb-4">
    Total do Carrinho
  </h2>

  <p className="text-3xl font-bold text-cyan-400">
    R$ {total.toFixed(2).replace(".", ",")}
  </p>

  <Link href="/checkout">
  <button className="mt-8 w-full rounded-lg bg-cyan-500 py-4 font-bold hover:bg-cyan-400 transition">
    Finalizar Compra
  </button>
</Link>

</div>

    </main>
  );
}