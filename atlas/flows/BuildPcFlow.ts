import { AtlasMemory } from "@/types/AtlasTypes";

export class BuildPcFlow {

    private parseBudget(message: string): number | null {

        const text = message.toLowerCase().trim();

        const kMatch = text.match(/(\d+)\s*k/);
        if (kMatch) return Number(kMatch[1]) * 1000;

        const milMatch = text.match(/(\d+)\s*mil/);
        if (milMatch) return Number(milMatch[1]) * 1000;

        const number = Number(text.replace(/\D/g, ""));

        if (!isNaN(number) && number > 0) {
            return number;
        }

        return null;
    }

    next(memory: AtlasMemory, message: string) {

        const text = message.toLowerCase();

        switch (memory.step) {

            case "budget": {

                const budget = this.parseBudget(text);

                if (!budget) {
                    return {
                        nextStep: "budget",
                        question: "Não consegui entender seu orçamento. Pode informar apenas o valor? Exemplo: 4000"
                    };
                }

                return {

                    nextStep: "games",

                    question:
                        `Perfeito! Vou considerar um orçamento de R$ ${budget.toLocaleString("pt-BR")}.\n\n` +
                        `Agora me diga:\n\n` +
                        `🎮 Quais jogos você pretende jogar?`,

                    updateMemory: {
                        budget
                    }

                };

            }

            case "games":

                return {

                    nextStep: "parts",

                    question:
                        "Excelente! Agora vou montar uma configuração baseada nesses jogos.\n\n" +
                        "Você prefere:\n\n" +
                        "🔧 Montar peça por peça\n\n" +
                        "ou\n\n" +
                        "🖥️ Comprar um computador pronto?"

                };

            case "parts":

                if (
                    text.includes("montar") ||
                    text.includes("peça") ||
                    text.includes("peca")
                ) {

                    return {

                        nextStep: "finished",

                        question:
                            "Excelente escolha! 💙\n\n" +
                            "Na minha opinião, montar um computador oferece o melhor custo-benefício e facilita futuros upgrades.\n\n" +
                            "Agora vou preparar sua configuração ideal."

                    };

                }

                if (
                    text.includes("pronto") ||
                    text.includes("computador pronto") ||
                    text.includes("pc pronto")
                ) {

                    return {

                        nextStep: "finished",

                        question:
                            "Perfeito! 💙\n\n" +
                            "Vou procurar computadores prontos com desempenho semelhante à configuração que recomendo para você."

                    };

                }

                return {

                    nextStep: "parts",

                    question:
                        "Você prefere montar peça por peça ou comprar um computador pronto?"

                };

            default:

                return {

                    nextStep: "budget",

                    question:
                        "Vamos montar seu PC! Primeiro, qual é o seu orçamento?"

                };

        }

    }

}