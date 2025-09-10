"use client";
import Image from "next/image";

export function FixedPlugin() {
  return (
    <a href="https://tailwindcss.com" target="_blank">
      <button className="fixed bottom-4 right-4 flex gap-1 pl-2 items-center bg-white text-gray-900 text-sm font-medium py-2 px-3 rounded-md border border-gray-200 shadow-lg hover:bg-gray-50 transition-colors">
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Tailwind CSS"
          src="https://tailwindcss.com/favicons/favicon-32x32.png"
        />{" "}
        Made With Tailwind CSS
      </button>
    </a>
  );
}
