import React from "react";

const Watch = React.lazy(() => import("producer/App"));

export const Component = () => (
  <React.Suspense fallback="Loading Watch...">
    <Watch />
  </React.Suspense>
);

Component.displayName = "WatchPage";
