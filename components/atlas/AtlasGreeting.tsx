type AtlasGreetingProps = {
  message: string;
};

export default function AtlasGreeting({
  message,
}: AtlasGreetingProps) {
  return (
    <div className="space-y-4 text-center">
      <div>
        <span className="inline-block rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-400">
          🤖 ATLAS ONLINE
        </span>
      </div>

      <h2 className="text-4xl font-extrabold text-cyan-400">
        Olá, Explorador!
      </h2>

      <p className="text-zinc-300 text-lg leading-8 max-w-2xl mx-auto">
        {message}
      </p>

      <p className="text-sm text-zinc-500 italic">
        Seu próximo nível começa aqui.
      </p>
    </div>
  );
}