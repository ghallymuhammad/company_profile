import React from "react";

interface BackgroundCardProps {
  title: string;
  children: React.ReactNode;
}

export function BackgroundCard({ title, children }: BackgroundCardProps) {
  return (
    <div className="grid place-items-center h-full px-8 py-6 bg-gray-900 rounded-xl">
      <div>
        <h2 className="text-center text-3xl font-bold text-white">
          {title}
        </h2>
        <p className="my-2 text-base w-full text-center font-normal text-white">
          {children}
        </p>
      </div>
    </div>
  );
}
export default BackgroundCard;