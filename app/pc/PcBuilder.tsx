export default function PcBuilder() {
    return (
        <div className="rounded-2xl border border-cyan-500/30 bg-zinc-900 p-8">

            <h2 className="text-3xl font-bold text-cyan-400">
                Área de Montagem
            </h2>

            <p className="mt-2 text-zinc-400">
                O Atlas preencherá automaticamente sua configuração.
            </p>

            <div className="mt-8 space-y-4">

                <Item titulo="💰 Orçamento" valor="Aguardando..." />
                <Item titulo="🎮 Jogo Principal" valor="Aguardando..." />
                <Item titulo="🖥️ Processador" valor="Aguardando..." />
                <Item titulo="🎮 Placa de Vídeo" valor="Aguardando..." />
                <Item titulo="💾 Memória RAM" valor="Aguardando..." />
                <Item titulo="🖴 SSD" valor="Aguardando..." />
                <Item titulo="⚡ Fonte" valor="Aguardando..." />

                <div className="border-t border-zinc-700 pt-6 flex justify-between text-2xl font-bold">
                    <span>💵 Total</span>
                    <span className="text-cyan-400">R$ 0,00</span>
                </div>

            </div>

        </div>
    );
}

type ItemProps = {
    titulo: string;
    valor: string;
};

function Item({ titulo, valor }: ItemProps) {
    return (
        <div className="flex justify-between rounded-xl bg-zinc-800 p-4">
            <span>{titulo}</span>
            <span className="text-zinc-400">{valor}</span>
        </div>
    );
}