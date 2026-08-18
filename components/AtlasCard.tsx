export default function AtlasXpCard() {
  return (
    <div className="rounded-3xl border border-cyan-500/30 bg-zinc-900 p-5">

      <div className="flex items-center justify-between">

        <span className="text-zinc-400">
          Nível
        </span>

        <span className="font-bold text-cyan-400">
          12
        </span>

      </div>

      <div className="mt-5">

        <div className="mb-2 flex justify-between text-sm">

          <span className="text-zinc-500">
            XP
          </span>

          <span className="text-cyan-400">
            8.450 / 10.000
          </span>

        </div>

        <div className="h-3 rounded-full bg-zinc-800">

          <div className="h-3 w-[84%] rounded-full bg-cyan-400 transition-all"></div>

        </div>

      </div>

    </div>
  );
}