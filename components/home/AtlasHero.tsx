import Image from "next/image";

export default function AtlasHero() {
    return (
        <div className="flex justify-center items-center">
            <div className="relative">

                {/* brilho atrás */}
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl scale-125"></div>

                {/* Atlas */}
                <div className="relative z-10">

                    <Image
                        src="/images/atlas.png"
                        alt="Atlas"
                        width={520}
                        height={720}
                        priority
                        className="drop-shadow-[0_0_35px_rgba(34,211,238,0.45)]"
                    />

                </div>

            </div>
        </div>
    );
}