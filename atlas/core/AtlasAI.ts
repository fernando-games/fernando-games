import { AtlasMessage, AtlasResponse } from "@/types/AtlasTypes";

const MODEL = "nvidia/nemotron-3-ultra-550b-a55b:free";

export class AtlasAI {
    async think(message: AtlasMessage): Promise<AtlasResponse> {
        const apiKey = process.env.OPENROUTER_API_KEY;

        if (!apiKey) {
            console.error("OPENROUTER_API_KEY não encontrada.");

            return {
                message:
                    "Meu sistema de inteligência ainda não está configurado corretamente. 🤖",
            };
        }

        try {
            const response = await fetch(
                "https://openrouter.ai/api/v1/chat/completions",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${apiKey}`,
                        "HTTP-Referer": "http://localhost:3000",
                        "X-Title": "Fernando.Games - Atlas",
                    },
                    body: JSON.stringify({
                        model: MODEL,
                        messages: [
                            {
                                role: "system",
                                content: `
Você é Atlas, o assistente virtual do Fernando.Games.

Sua personalidade:
- amigável
- inteligente
- descontraído
- gosta de ajudar gamers
- fala português do Brasil
- explica assuntos técnicos de forma simples
- nunca inventa produtos ou informações
- quando não souber algo, diga claramente que não sabe

Você faz parte de uma loja gamer chamada Fernando.Games.

Responda de forma natural e útil ao usuário.
`,
                            },
                            {
                                role: "user",
                                content: message.content,
                            },
                        ],
                    }),
                }
            );

            if (!response.ok) {
                const errorText = await response.text();

                console.error(
                    "Erro OpenRouter:",
                    response.status,
                    errorText
                );

                return {
                    message:
                        "Tive um problema para acessar meu cérebro de IA agora. 🤖",
                };
            }

            const data = await response.json();

            const content =
                data?.choices?.[0]?.message?.content;

            if (!content) {
                return {
                    message:
                        "Recebi uma resposta vazia da minha inteligência. 🤔",
                };
            }

            return {
                message: content,
            };
        } catch (error) {
            console.error("Erro ao chamar OpenRouter:", error);

            return {
                message:
                    "Não consegui me conectar à minha inteligência agora. 🤖",
            };
        }
    }
}