export type AtlasAction =
    | "none"
    | "games"
    | "pc"
    | "promotions"
    | "peripherals"
    | "surprise";

export function detectAtlasAction(text: string): AtlasAction {
    const input = text.toLowerCase();

    if (input.includes("jogo")) return "games";
    if (input.includes("pc")) return "pc";
    if (input.includes("promo")) return "promotions";
    if (input.includes("perif")) return "peripherals";
    if (input.includes("surpre")) return "surprise";

    return "none";
}