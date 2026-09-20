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


        if (error) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Autorização cancelada pelo Mercado Livre.",
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
                    error: "Variáveis do Mercado Livre não configuradas.",
                },
                { status: 500 }
            );
        }


        const body = new URLSearchParams();

        body.set(
            "grant_type",
            "authorization_code"
        );

        body.set(
            "client_id",
            clientId
        );

        body.set(
            "client_secret",
            clientSecret
        );

        body.set(
            "code",
            code
        );

        body.set(
            "redirect_uri",
            redirectUri
        );


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
            }
        );


        const tokenData =
            await tokenResponse.json();


        if (!tokenResponse.ok) {

            return NextResponse.json(
                {
                    success: false,
                    error:
                        "Mercado Livre recusou o token.",
                    details: tokenData,
                },
                {
                    status: tokenResponse.status,
                }
            );
        }


        const accessToken =
            tokenData.access_token;


        const refreshToken =
            tokenData.refresh_token;



        if (!accessToken) {

            return NextResponse.json(
                {
                    success: false,
                    error:
                        "Token não recebido.",
                },
                {
                    status: 500,
                }
            );
        }



        const response =
            NextResponse.redirect(
                new URL(
                    "/mercadolivre/conectado",
                    request.url
                )
            );



        response.cookies.set(
            "mercadolivre_access_token",
            accessToken,
            {
                httpOnly: true,
                secure: true,
                sameSite: "lax",
                path: "/",
                maxAge:
                    tokenData.expires_in || 21600,
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
                    path: "/",
                }
            );

        }


        return response;


    } catch (error) {

        console.error(
            "Erro callback Mercado Livre:",
            error
        );


        return NextResponse.json(
            {
                success: false,
                error:
                    "Erro interno ao conectar Mercado Livre."
            },
            {
                status: 500
            }
        );
    }
}