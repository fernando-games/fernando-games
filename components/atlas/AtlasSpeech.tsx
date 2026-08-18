"use client";

import SpeechBubble from "../home/SpeechBubble";

type AtlasSpeechProps = {
    messages: string[];
};

export default function AtlasSpeech({
    messages,
}: AtlasSpeechProps) {
    return (
        <SpeechBubble
            messages={messages}
        />
    );
}