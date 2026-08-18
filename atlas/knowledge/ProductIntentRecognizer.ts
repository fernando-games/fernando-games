export class ProductIntentRecognizer {

    detect(text: string): string | null {

        const message = text.toLowerCase();

        // GPU
        if (
            message.includes("placa de vídeo") ||
            message.includes("placa de video") ||
            message.includes("gpu") ||
            message.includes("rtx") ||
            message.includes("geforce")
        ) {
            return "gpu";
        }

        // Processador
        if (
            message.includes("processador") ||
            message.includes("cpu") ||
            message.includes("ryzen") ||
            message.includes("intel")
        ) {
            return "cpu";
        }

        // Memória
        if (
            message.includes("memória") ||
            message.includes("memoria") ||
            message.includes("ram")
        ) {
            return "ram";
        }

        // SSD
        if (
            message.includes("ssd") ||
            message.includes("nvme")
        ) {
            return "ssd";
        }

        return null;
    }
}