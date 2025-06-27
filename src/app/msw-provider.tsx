/* eslint-disable */
"use client";

import { useEffect, useState } from "react";

export function MswProvider({ children }: { children: React.ReactNode }) {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (typeof window !== "undefined") {
        const { worker } = await import("../mock/brower");
        await worker.start({
          onUnhandledRequest: "bypass", // 처리되지 않은 요청은 그대로 통과
        });
        setMswReady(true);
      }
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  if (!mswReady) {
    return <div>MSW 초기화 중...</div>;
  }

  return <>{children}</>;
}
