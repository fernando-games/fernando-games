"use client";

import Image from "next/image";

export default function AtlasAvatar() {
  return (
    <div className="flex justify-center py-4">

      <Image
        src="/images/atlas.png"
        alt="Atlas"
        width={320}
        height={420}
        priority
        className="
                    h-auto
                    w-full
                    max-w-xs
                    rounded-3xl
                    object-contain
                    drop-shadow-[0_0_35px_rgba(34,211,238,0.7)]
                    transition
                    duration-300
                    hover:scale-105
                "
      />

    </div>
  );
}