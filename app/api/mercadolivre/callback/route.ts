import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    const code = searchParams.get("code");
    const error = searchParams.get("error");

    if (error) {
        return NextResponse.json(
            {
                error: "Autorização do Mercado Livre não concluída.",
                details: error,
            },
            { status: 400 }
        );
    }

    if (!code) {
        return NextResponse.json(
            {
                error: "Código de autorização não recebido.",
            },
            { status: 400 }
        );
    }

    return NextResponse.json({
        success: true,
        message: "Callback do Mercado Livre recebida com sucesso.",
        codeReceived: true,
    });
}