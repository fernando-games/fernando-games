export class AtlasParser {
    parseBudget(text: string): number | null {
        const value = text.toLowerCase().trim();

        // "4 mil", "4mil"
        const milMatch = value.match(/(\d+(?:[.,]\d+)?)\s*mil/);

        if (milMatch) {
            return Math.round(
                Number(milMatch[1].replace(",", ".")) * 1000
            );
        }

        // "5k", "5.5k"
        const kMatch = value.match(/(\d+(?:[.,]\d+)?)\s*k/);

        if (kMatch) {
            return Math.round(
                Number(kMatch[1].replace(",", ".")) * 1000
            );
        }

        // "R$ 4.500", "4500", "4.500"
        const digits = value.replace(/[^\d]/g, "");

        if (digits.length > 0) {
            return Number(digits);
        }

        return null;
    }
}