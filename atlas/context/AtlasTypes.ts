export interface AtlasMessage {
    role: "user" | "assistant";
    content: string;
}

export interface AtlasProduct {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
}

export interface AtlasRecommendation {
    cpu: string;
    gpu: string;
    ram: number;
    storage: string;
    motherboard: string;
    powerSupply: string;
    explanation: string;
    upgrades: string[];
}

export interface AtlasResponse {
    type?: "text" | "recommendation";

    title?: string;

    message: string;

    action?:
    | "build-pc"
    | "open-games"
    | "open-promotions"
    | "open-product";

    product?: string;

    recommendation?: AtlasRecommendation;

    products?: AtlasProduct[];
}