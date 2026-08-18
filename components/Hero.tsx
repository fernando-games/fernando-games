export default function Hero() {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-8 text-center">

        <h1 className="text-6xl font-extrabold text-cyan-400">
          🎮 Fernando.Games
        </h1>

        <p className="mt-6 text-2xl text-gray-300">
          Seu próximo nível começa aqui.
        </p>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
          Descubra promoções, conquistas, recompensas e a ajuda do Atlas
          para encontrar os melhores jogos para você.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="rounded-xl bg-cyan-500 px-8 py-4 font-bold hover:bg-cyan-400 transition">
            Explorar Jogos
          </button>

          <button className="rounded-xl border border-cyan-500 px-8 py-4 hover:bg-cyan-500 hover:text-black transition">
            Conhecer o Atlas
          </button>
        </div>

      </div>
    </section>
  );
}