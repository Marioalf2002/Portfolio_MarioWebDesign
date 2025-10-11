"use client";

import React, { useState, useEffect } from "react";
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
    <Analytics />
  </ClientOnlyRender>
);

export default AnalyticsNext;
