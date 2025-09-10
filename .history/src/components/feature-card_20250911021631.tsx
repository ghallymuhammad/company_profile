import React from "react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}
export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <div className="bg-transparent">
      <div className="grid place-items-start px-0">
        <div className="mb-3 grid place-content-center rounded-lg text-left text-blue-gray-900">
          <Icon className="h-6 w-6" />
        </div>
        <h5 className="text-xl font-bold text-blue-gray-900 mb-2">
          {title}
        </h5>
        <p className="text-gray-500 font-normal">
          {children}
        </p>
      </div>
    </div>
  );
}


export default FeatureCard;
