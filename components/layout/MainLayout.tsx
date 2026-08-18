"use client";

import { useHome } from "../../context/HomeContext";
import Header from "./Header";
import Navigation from "./Navigation";
import AtlasColumn from "../atlas/AtlasColumn";
import HomeContent from "../home/HomeContent";

export default function MainLayout() {


    const { changeMode } = useHome();

    return (
        <div className="min-h-screen bg-black">

            <Header />

            <Navigation />

            <main className="flex-1 px-4 py-2">

                <div className="mx-auto grid h-full w-full max-w-screen-2xl grid-cols-12 gap-4">

                    <section className="relative col-span-3 z-50">
                        <div className="sticky top-4 rounded-2xl border border-cyan-500 bg-gradient-to-b from-zinc-900 to-black">
                            <AtlasColumn />
                        </div>
                    </section>

                    <section className="col-span-9 h-full rounded-2xl">
                        <HomeContent />
                    </section>

                </div>
                <button
                    onClick={() => changeMode("pc")}
                    className="fixed bottom-6 right-6 z-50 rounded-xl bg-cyan-500 px-4 py-2 font-bold text-black shadow-lg hover:bg-cyan-400"
                >
                    🖥️ Testar PC
                </button>

            </main >

        </div>

    );
}

