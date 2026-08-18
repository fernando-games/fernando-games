"use client";

import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">

      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        💳 Checkout
      </h1>

      <div className="rounded-xl bg-zinc-900 p-8">

        <h2 className="text-2xl font-bold mb-6">
          Resumo do Pedido
        </h2>

        <div className="space-y-4">

          {cart.map((game) => (
            <div
              key={game.id}
              className="flex justify-between border-b border-zinc-700 pb-3"
            >
              <span>
                {game.title} x{game.quantity}
              </span>

              <span className="text-cyan-400">
                R$ {(game.price * game.quantity)
                  .toFixed(2)
                  .replace(".", ",")}
              </span>
            </div>
          ))}

        </div>

        <div className="mt-8 space-y-3">

          <div className="flex justify-between">
            <span>Frete</span>
            <span className="text-green-400">
              Grátis
            </span>
          </div>

          <div className="flex justify-between text-2xl font-bold">
            <span>Total</span>

            <span className="text-cyan-400">
              R$ {total.toFixed(2).replace(".", ",")}
            </span>
          </div>

        </div>

        <button
          className="mt-8 w-full rounded-lg bg-cyan-500 py-4 font-bold hover:bg-cyan-400 transition"
        >
          Continuar para o Mercado Livre
        </button>

      </div>

    </main>
  );
}