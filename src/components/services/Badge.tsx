import React from "react";

interface BadgeProps {
  text: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, className = "" }) => {
  return (
    <span
      className={`px-2.5 py-0.5 text-xs font-medium leading-4 text-red-800 bg-red-100 rounded-xl ${className}`}
    >
      {text}
    </span>
  );
};
