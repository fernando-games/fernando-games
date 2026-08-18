"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
export default function Header() {
    const { cart } = useCart();
    console.log("Header renderizou");
console.log("Carrinho:", cart);

const items = cart.reduce(
  (total, item) => total + item.quantity,
  0
);

console.log("Carrinho:", cart);
console.log("Quantidade:", items);
  
    return (
    <header className="bg-zinc-900 border-b border-zinc-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="text-3xl font-bold text-cyan-400">
          🎮 Fernando.Games
        </div>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Loja
          </a>

          <a href="#" className="hover:text-cyan-400 transition">
            Ofertas
          </a>

          <input
            type="text"
            placeholder="Pesquisar jogos..."
            className="rounded-lg bg-zinc-800 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* Ações */}
        <div className="flex items-center gap-4">
          <button className="text-xl">❤️</button>

          <Link href="/cart" className="relative cursor-pointer text-xl">
  🛒

  {items > 0 && (
    <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-black">
      {items}
    </span>
  )}
</Link>

          <button className="text-xl">👤</button>

          <button className="rounded-lg bg-cyan-500 px-6 py-2 font-semibold hover:bg-cyan-400 transition">
            Entrar
          </button>
        </div>

      </div>
    </header>
  );
}