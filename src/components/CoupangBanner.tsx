"use client";

import { useEffect, useRef } from "react";

interface CoupangBannerProps {
  id: number;
}

export default function CoupangBanner({ id }: CoupangBannerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const script = document.createElement("script");
    script.src = "https://ads-partners.coupang.com/g.js";
    script.async = true;
    script.onload = () => {
      new (window as any).PartnersCoupang.G({
        id,
        template: "carousel",
        trackingCode: "AF9006962",
        width: "680",
        height: "140",
      });
    };
    ref.current.appendChild(script);
  }, [id]);

  return <div ref={ref} className="flex justify-center" />;
}
