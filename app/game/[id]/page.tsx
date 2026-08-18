import GameActions from "@/components/GameActions";
import AtlasCard from "@/components/AtlasCard";
import { games } from "@/data/games";
import RelatedGames from "@/components/RelatedGames";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GamePage({ params }: Props) {
  const { id } = await params;
  const game = games.find((g) => g.id === Number(id));
  if (!game) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white p-10">
        <h1 className="text-4xl font-bold text-red-500">
          Jogo não encontrado.
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">

        <img
          src={game.image}
          alt={game.title}
          className="rounded-2xl shadow-lg"
        />

        <div>

          <h1 className="text-5xl font-bold text-cyan-400">
            {game.title}
          </h1>

          <p className="mt-6 text-3xl font-bold">
            R$ {game.price.toFixed(2).replace(".", ",")}
          </p>

          <div className="mt-6 space-y-4">

            <p className="text-yellow-400 text-xl">
              ⭐ {game.rating}/5
            </p>

            <p className="text-zinc-400">
              🎮 {game.platform}
            </p>

            <p className="text-zinc-300 leading-8">
              {game.description}
            </p>

          </div>

          <GameActions game={game} />
          <AtlasCard />
          <RelatedGames currentGameId={game.id} />

        </div>

      </div>
    </main>
  );
}