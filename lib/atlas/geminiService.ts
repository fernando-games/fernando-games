import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
});

export async function geminiService(
    prompt: string
): Promise<string> {

    try {

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        return response.text ?? "Desculpe, não consegui gerar uma resposta.";

    } catch (error) {

        console.error("Erro Gemini:", error);

        return "Estou com dificuldades para responder agora. Tente novamente em alguns instantes.";

    }

}