import React from "react";

function GifLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex flex-row flex-wrap justify-center items-center gap-4">
      {children}
    </div>
  );
}

export default GifLayout;
