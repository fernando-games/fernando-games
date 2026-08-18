type PcBuildCardProps = {
    cpu: string;
    gpu: string;
    ram: number;
    storage: string;
    motherboard: string;
    powerSupply: string;
    explanation: string;
    upgrades: string[];
};

export default function PcBuildCard({
    cpu,
    gpu,
    ram,
    storage,
    motherboard,
    powerSupply,
    explanation,
    upgrades,
}: PcBuildCardProps) {
    return (
        <div className="rounded-2xl border border-cyan-500 bg-zinc-900 p-5">

            <h2 className="text-2xl font-bold text-cyan-400">
                🖥️ Configuração Recomendada
            </h2>

            <div className="mt-5 space-y-2 text-white">

                <p><strong>CPU:</strong> {cpu}</p>

                <p><strong>GPU:</strong> {gpu}</p>

                <p><strong>RAM:</strong> {ram} GB</p>

                <p><strong>SSD:</strong> {storage}</p>

                <p><strong>Placa-mãe:</strong> {motherboard}</p>

                <p><strong>Fonte:</strong> {powerSupply}</p>

            </div>

            <div className="mt-6">

                <h3 className="font-bold text-cyan-400">
                    💡 Explicação
                </h3>

                <p className="mt-2 text-zinc-300">
                    {explanation}
                </p>

            </div>

            <div className="mt-6">

                <h3 className="font-bold text-cyan-400">
                    🚀 Upgrades futuros
                </h3>

                <ul className="mt-2 list-disc pl-6 text-zinc-300">
                    {upgrades.map((upgrade, index) => (
                        <li key={index}>{upgrade}</li>
                    ))}
                </ul>

            </div>

        </div>
    );
}