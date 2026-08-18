import { NextRequest, NextResponse } from "next/server";
import { AtlasEngine } from "@/atlas/core/AtlasEngine";

const atlas = new AtlasEngine();

export async function POST(request: NextRequest) {

    const { message } = await request.json();

    const response = await atlas.process({
        role: "user",
        content: message,
    });

    return NextResponse.json(response);
}