import React from "react";
import Image from "next/image";

interface CourseCardProps {
  img: string;
  title: string;
  desc: string;
  buttonLabel: string;
}

export function CourseCard({ img, title, desc, buttonLabel }: CourseCardProps) {
  return (
    <div className="bg-transparent">
      <div className="mx-0 mt-0 mb-6 h-48 rounded-lg overflow-hidden">
        <Image width={768} height={768} src={img} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <h5 className="text-xl font-bold mb-2">
            {title}
          </h5>
        </a>
        <p className="mb-6 font-normal text-gray-500">
          {desc}
        </p>
        <button className="bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default CourseCard;