export default function AtlasStatus() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>

      <span className="text-sm text-zinc-400">
        Online
      </span>
    </div>
  );
}