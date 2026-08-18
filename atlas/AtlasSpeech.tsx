"use client";

type AtlasSpeechProps = {
    message: string;
};

export default function AtlasSpeech({
    message,
}: AtlasSpeechProps) {
    return (
        <div className="mt-6 rounded-2xl border border-cyan-500/30 bg-zinc-900 px-6 py-5">
            <p className="text-center text-lg leading-8 text-zinc-200">
                {message}
            </p>
        </div>
    );
}