type Props = {
    message: string;
    thinking?: boolean;
};

export default function AtlasConversation({
    message,
    thinking = false,
}: Props) {
    return (
        <div className="w-full rounded-2xl border border-cyan-500/30 bg-zinc-900 p-4 shadow-lg">

            {thinking ? (
                <div className="flex gap-2 py-2">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
                    <span
                        className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"
                        style={{ animationDelay: "0.2s" }}
                    />
                    <span
                        className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"
                        style={{ animationDelay: "0.4s" }}
                    />
                </div>
            ) : (
                <p className="text-center text-sm leading-6 text-zinc-200">
                    {message}
                </p>
            )}

            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-cyan-500/30 bg-zinc-900" />
        </div>
    );
}