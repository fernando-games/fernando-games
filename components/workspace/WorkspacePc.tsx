"use client";

import { useAtlas } from "@/atlas/context/AtlasContext";

export default function WorkspacePc() {
    const { atlas } = useAtlas();

    const build = atlas.memory?.build;

    return (
        <div className="flex h-full flex-col">

            <h2 className="text-3xl font-bold text-cyan-400">
                🖥️ Monte seu PC
            </h2>

            <p className="mt-2 text-zinc-400">
                O Atlas irá montar a configuração ideal para você.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">

                <Card
                    title="🧠 Processador"
                    value={build?.cpu ?? "Aguardando recomendação..."}
                />

                <Card
                    title="🎮 Placa de Vídeo"
                    value={build?.gpu ?? "Aguardando recomendação..."}
                />

                <Card
                    title="⚡ Memória RAM"
                    value={
                        build?.ram !== undefined
                            ? `${build.ram} GB`
                            : "Aguardando recomendação..."
                    }
                />

                <Card
                    title="💾 SSD"
                    value={build?.storage ?? "Aguardando recomendação..."}
                />

                <Card
                    title="🔋 Fonte"
                    value={build?.powerSupply ?? "Aguardando recomendação..."}
                />

                <Card
                    title="🖥️ Placa-mãe"
                    value={build?.motherboard ?? "Aguardando recomendação..."}
                />

            </div>

        </div>
    );
}

type CardProps = {
    title: string;
    value: string;
};

function Card({ title, value }: CardProps) {
    return (
        <div className="rounded-xl border border-cyan-500 bg-zinc-900 p-4">

            <h3 className="font-semibold text-cyan-300">
                {title}
            </h3>

            <p className="mt-3 text-zinc-400">
                {value}
            </p>

        </div>
    );
}