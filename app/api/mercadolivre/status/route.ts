import { NextResponse } from "next/server";

export async function GET() {

    const connected =
        Boolean(process.env.ID_DO_CLIENTE_MERCADOLIVRE) &&
        Boolean(process.env.SEGREDO_DO_CLIENTE_MERCADOLIVRE);

    return NextResponse.json({
        connected,
        service: "Mercado Livre",
        atlas: connected
            ? "ONLINE"
            : "OFFLINE",
    });

}