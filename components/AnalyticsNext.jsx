"use client";

import React, { useState, useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

function ClientOnlyRender({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return children;
}

const AnalyticsNext = () => (
  <ClientOnlyRender>
    <SpeedInsights />
    <Analytics />
  </ClientOnlyRender>
);

export default AnalyticsNext;
