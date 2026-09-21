import { NextRequest, NextResponse } from "next/server";

const MERCADO_LIVRE_TOKEN_URL =
    "https://api.mercadolibre.com/oauth/token";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const code = searchParams.get("code");
        const error = searchParams.get("error");

        const clientId =
            process.env.ID_DO_CLIENTE_MERCADOLIVRE;

        const clientSecret =
            process.env.SEGREDO_DO_CLIENTE_MERCADOLIVRE;

        const redirectUri =
            process.env.URI_REDIRECIONADA_MERCADOLIVRE;

        // Mercado Livre recusou ou cancelou a autorização
        if (error) {
            return NextResponse.redirect(
                new URL(
                    `/?mercadolivre=erro&motivo=${encodeURIComponent(error)}`,
                    request.url
                )
            );
        }

        // Código de autorização não veio
        if (!code) {
            return NextResponse.redirect(
                new URL(
                    "/?mercadolivre=erro&motivo=code_ausente",
                    request.url
                )
            );
        }

        // Configuração incompleta
        if (!clientId || !clientSecret || !redirectUri) {
            console.error(
                "Configuração do Mercado Livre incompleta."
            );

            return NextResponse.redirect(
                new URL(
                    "/?mercadolivre=erro&motivo=configuracao",
                    request.url
                )
            );
        }

        // Monta requisição para trocar o code pelo token
        const body = new URLSearchParams();

        body.set("grant_type", "authorization_code");
        body.set("client_id", clientId);
        body.set("client_secret", clientSecret);
        body.set("code", code);
        body.set("redirect_uri", redirectUri);

        const tokenResponse = await fetch(
            MERCADO_LIVRE_TOKEN_URL,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type":
                        "application/x-www-form-urlencoded",
                },
                body: body.toString(),
                cache: "no-store",
            }
        );

        const tokenData = await tokenResponse.json();

        // Mercado Livre recusou a troca do código
        if (!tokenResponse.ok) {
            console.error(
                "Erro ao obter token do Mercado Livre:",
                tokenData
            );

            return NextResponse.redirect(
                new URL(
                    "/?mercadolivre=erro&motivo=token",
                    request.url
                )
            );
        }

        const accessToken = tokenData.access_token;
        const refreshToken = tokenData.refresh_token;

        // Access Token não veio
        if (!accessToken) {
            console.error(
                "Mercado Livre não retornou Access Token."
            );

            return NextResponse.redirect(
                new URL(
                    "/?mercadolivre=erro&motivo=access_token",
                    request.url
                )
            );
        }

        /*
         * Agora a conexão deu certo.
         *
         * Criamos a resposta de redirecionamento
         * para a página inicial da Fernando.Games.
         */
        const response = NextResponse.redirect(
            new URL(
                "/?mercadolivre=conectado",
                request.url
            )
        );

        // Access Token
        response.cookies.set(
            "mercadolivre_access_token",
            accessToken,
            {
                httpOnly: true,
                secure: true,
                sameSite: "lax",
                path: "/",
                maxAge: tokenData.expires_in || 21600,
            }
        );

        // Refresh Token
        if (refreshToken) {
            response.cookies.set(
                "mercadolivre_refresh_token",
                refreshToken,
                {
                    httpOnly: true,
                    secure: true,
                    sameSite: "lax",
                    path: "/",
                    maxAge: 60 * 60 * 24 * 180,
                }
            );
        }

        return response;
    } catch (error) {
        console.error(
            "Erro interno no callback do Mercado Livre:",
            error
        );

        return NextResponse.redirect(
            new URL(
                "/?mercadolivre=erro&motivo=interno",
                request.url
            )
        );
    }
}