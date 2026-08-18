type Props = {
    messages: string[];
};

export default function SpeechBubble({ messages }: Props) {
    return (
        <div className="space-y-3">
            {messages.map((message, index) => (
                <div
                    key={index}
                    className="relative rounded-2xl border border-cyan-500/30 bg-zinc-900 p-4"
                >
                    <p className="text-center text-sm leading-6 text-zinc-200">
                        {message}
                    </p>

                    {/* Pontinha do balão */}
                    <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-cyan-500/30 bg-zinc-900"></div>
                </div>
            ))}
        </div>
    );
}