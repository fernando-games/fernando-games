import AtlasInteraction from "./AtlasInteraction";
import AtlasChat from "./AtlasChat";

export default function AtlasSidebar() {
  return (
    <aside className="w-full rounded-3xl border border-cyan-500 bg-zinc-900 p-6">

      <AtlasInteraction />

      <div className="mt-6">

      </div>

      <div className="mt-6">
        <AtlasChat />
      </div>

    </aside>
  );
}