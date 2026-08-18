export type UserProfile =
    | "beginner"
    | "intermediate"
    | "advanced"
    | "parent";

export class UserProfiler {

    detect(message: string): UserProfile {

        const text = message.toLowerCase();

        if (
            text.includes("não entendo") ||
            text.includes("nao entendo") ||
            text.includes("sou leigo") ||
            text.includes("iniciante")
        ) {
            return "beginner";
        }

        if (
            text.includes("meu filho") ||
            text.includes("minha filha")
        ) {
            return "parent";
        }

        if (
            text.includes("ddr5") ||
            text.includes("overclock") ||
            text.includes("rtx")
        ) {
            return "advanced";
        }

        return "intermediate";
    }

}