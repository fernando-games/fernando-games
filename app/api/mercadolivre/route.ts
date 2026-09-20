import { NextRequest, NextResponse } from "next/server";

const MERCADO_LIVRE_AUTH_URL =
    "https://auth.mercadolivre.com.br/authorization";

export async function GET(request: NextRequest) {
    const clientId = process.env.ID_DO_CLIENTE_MERCADOLIVRE;
    const redirectUri = process.env.URI_REDIRECIONADA_MERCADOLIVRE;

    if (!clientId || !redirectUri) {
        return NextResponse.json(
            {
                error:
                    "Configuração do Mercado Livre não encontrada. Verifique as variáveis de ambiente.",
            },
            { status: 500 }
        );
    }

    const url = new URL(MERCADO_LIVRE_AUTH_URL);

    url.searchParams.set("response_type", "code");
    url.searchParams.set("client_id", clientId);
    url.searchParams.set("redirect_uri", redirectUri);

    return NextResponse.redirect(url.toString());
}