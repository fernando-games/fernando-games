export type AtlasRole = "user" | "atlas";

export interface AtlasMessage {
    id: string;
    role: AtlasRole;
    content: string;
    createdAt: Date;
}

export interface AtlasResponse {
    message: string;
    action?: string;
    payload?: unknown;
}