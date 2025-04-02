import React from "react";
import { LanguageIcon } from "./Icons";

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 right-0 left-64 z-10 h-16 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)] max-sm:left-[60px]">
      <div className="flex justify-between items-center px-4 py-0 h-full">
        <div />
        <div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e32af2b611e9b1c6427df46d0ace4c617158621"
            alt="User avatar"
            className="w-8 h-8 rounded-2xl"
          />
        </div>
      </div>
      <div className="absolute top-4 right-[58px]">
        <LanguageIcon />
      </div>
    </header>
  );
};
