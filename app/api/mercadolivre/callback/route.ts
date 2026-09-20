import { NextRequest, NextResponse } from "next/server";

const MERCADO_LIVRE_TOKEN_URL =
    "https://api.mercadolibre.com/oauth/token";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);

        const code = searchParams.get("code");
        const error = searchParams.get("error");

        const clientId = process.env.ID_DO_CLIENTE_MERCADOLIVRE;
        const clientSecret =
            process.env.SEGREDO_DO_CLIENTE_MERCADOLIVRE;
        const redirectUri =
            process.env.URI_REDIRECIONADA_MERCADOLIVRE;

        if (error) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Autorização do Mercado Livre não concluída.",
                    details: error,
                },
                { status: 400 }
            );
        }

        if (!code) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Código de autorização não recebido.",
                },
                { status: 400 }
            );
        }

        if (!clientId || !clientSecret || !redirectUri) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Configuração do Mercado Livre incompleta.",
                },
                { status: 500 }
            );
        }

        const body = new URLSearchParams();

        body.set("grant_type", "authorization_code");
        body.set("client_id", clientId);
        body.set("client_secret", clientSecret);
        body.set("code", code);
        body.set("redirect_uri", redirectUri);

        const tokenResponse = await fetch(MERCADO_LIVRE_TOKEN_URL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: body.toString(),
            cache: "no-store",
        });

        const tokenData = await tokenResponse.json();

        if (!tokenResponse.ok) {
            console.error(
                "Erro ao obter token do Mercado Livre:",
                tokenData
            );

            return NextResponse.json(
                {
                    success: false,
                    error:
                        "Mercado Livre recusou a troca do código por token.",
                    details: tokenData,
                },
                { status: tokenResponse.status }
            );
        }

        const accessToken = tokenData.access_token;
        const refreshToken = tokenData.refresh_token;

        if (!accessToken) {
            return NextResponse.json(
                {
                    success: false,
                    error:
                        "Mercado Livre não retornou um Access Token.",
                },
                { status: 500 }
            );
        }

        const response = NextResponse.json({
            success: true,
            message:
                "Fernando.Games conectado ao Mercado Livre com sucesso!",
            connected: true,
            userId: tokenData.user_id ?? null,
            expiresIn: tokenData.expires_in ?? null,
            scope: tokenData.scope ?? null,
        });

        response.cookies.set(
            "mercadolivre_access_token",
            accessToken,
            {
                httpOnly: true,
                secure: true,
                sameSite: "lax",
                path: "/api",
                maxAge: tokenData.expires_in || 21600,
            }
        );

        if (refreshToken) {
            response.cookies.set(
                "mercadolivre_refresh_token",
                refreshToken,
                {
                    httpOnly: true,
                    secure: true,
                    sameSite: "lax",
                    path: "/api",
                }
            );
        }

        return response;
    } catch (error) {
        console.error(
            "Erro interno no callback do Mercado Livre:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                error:
                    "Erro interno ao conectar com o Mercado Livre.",
            },
            { status: 500 }
        );
    }
}