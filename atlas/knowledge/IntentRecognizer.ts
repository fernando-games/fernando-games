export type Intent =
    | "build-pc"
    | "buy-ready-pc"
    | "recommend-game"
    | "choose-game"
    | "budget"
    | "beginner-help"
    | "unknown";

export class IntentRecognizer {

    detect(message: string): Intent {

        const text = message.toLowerCase();

        // Montar PC
        if (
            text.includes("montar pc") ||
            text.includes("montar um pc") ||
            text.includes("montar computador")
        ) {
            return "build-pc";
        }

        // Comprar pronto
        if (
            text.includes("pc pronto") ||
            text.includes("computador pronto")
        ) {
            return "buy-ready-pc";
        }

        // Recomendar jogo
        if (
            text.includes("me recomenda um jogo") ||
            text.includes("qual jogo") ||
            text.includes("recomenda um jogo")
        ) {
            return "recommend-game";
        }

        // Escolheu um jogo
        if (
            text.includes("gta") ||
            text.includes("minecraft") ||
            text.includes("valorant")
        ) {
            return "choose-game";
        }

        // Orçamento
        if (
            /\d/.test(text)
        ) {
            return "budget";
        }

        // Iniciante
        if (
            text.includes("não entendo") ||
            text.includes("nao entendo") ||
            text.includes("sou leigo")
        ) {
            return "beginner-help";
        }

        return "unknown";
    }
}