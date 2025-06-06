import React from "react";

function loading() {
  return (
    <div className="flex-col gap-4 w-full h-full flex items-center justify-center">
      <div className="w-20 h-20 border-4 border-transparent text-neutral-400 text-4xl animate-spin flex items-center justify-center border-t-neutral-400 rounded-full">
        <div className="w-16 h-16 border-4 border-transparent text-neutral-800 text-2xl animate-spin flex items-center justify-center border-t-neutral-800 rounded-full"></div>
      </div>
    </div>
  );
}

export default loading;
