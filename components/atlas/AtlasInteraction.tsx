"use client";

import { useState } from "react";

import AtlasAvatar from "./AtlasAvatar";
import AtlasDock from "./AtlasDock";

export default function AtlasInteraction() {

    const [open, setOpen] = useState(false);

    return (
        <div className="relative">

            <div onClick={() => setOpen(!open)}>

                <AtlasAvatar />

            </div>

            {open && (
                <div className="absolute left-full top-0 ml-4 rounded-xl bg-red-500 p-4 text-white">
                    TESTE
                </div>
            )}

        </div>
    );
}