import Link from "next/link";

export default function ProductInfo() {
    return (
        <div className="flex h-full flex-col justify-between">

            <div>

                <h2 className="text-4xl font-bold text-white">
                    Logitech G Pro X Superlight
                </h2>

                <p className="mt-3 text-yellow-400 text-xl">
                    ⭐⭐⭐⭐⭐
                    <span className="text-zinc-400">
                        {" "} (1.256 avaliações)
                    </span>
                </p>

                <p className="mt-6 text-5xl font-extrabold text-cyan-400">
                    R$ 699,90
                </p>

                <p className="mt-2 text-green-400 font-semibold">
                    🚚 Frete grátis para todo o Brasil
                </p>

            </div>

            <div className="mt-auto flex gap-4 pt-8">

                <Link
                    href="/produto/logitech-g-pro-x-superlight"
                    className="flex-1"
                >
                    <button className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-black transition hover:bg-cyan-400">
                        🛒 Comprar
                    </button>
                </Link>

                <button className="rounded-xl border border-cyan-500 px-6 transition hover:bg-cyan-500/10">
                    Comparar
                </button>

            </div>

        </div>
    );
}