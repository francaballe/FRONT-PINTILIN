import React from "react";

function GifLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-10 flex flex-row flex-wrap justify-center items-center gap-2">
      {children}
    </div>
  );
}

export default GifLayout;
