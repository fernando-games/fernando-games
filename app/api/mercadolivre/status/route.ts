import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const accessToken =
        request.cookies.get(
            "mercadolivre_access_token"
        )?.value;


    const connected = Boolean(accessToken);


    return NextResponse.json({
        connected,
        service: "Mercado Livre",
        atlas: connected
            ? "ONLINE"
            : "OFFLINE",
    });

}