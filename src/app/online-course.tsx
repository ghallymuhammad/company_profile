"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: WrenchScrewdriverIcon,
    title: "Perbaikan & Penggantian Komponen",
    description:
      "Layanan penggantian keyboard, layar, baterai, fan, dan komponen hardware lain yang rusak atau aus. Dikerjakan oleh teknisi berpengalaman dengan garansi pengerjaan.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Upgrade & Optimasi Perangkat",
    description:
      "Upgrade RAM, SSD, dan komponen lain untuk meningkatkan performa laptop/PC Anda. Termasuk optimasi sistem dan pembersihan internal.",
  },
  {
    icon: BoltIcon,
    title: "Servis Kelistrikan & Charging",
    description:
      "Solusi masalah charging, port power, dan kelistrikan laptop/PC. Diagnosa akurat dan perbaikan cepat untuk perangkat yang tidak bisa mengisi daya.",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="col-span-1 flex justify-center items-center">
          <Image
            width={400}
            height={400}
            src="/image/online-course.png"
            className="rounded-xl shadow-lg object-cover"
            alt="Layanan Servis Laptop & Komputer"
          />
        </div>
        <div className="col-span-2 lg:pl-16">
          {/* @ts-ignore */}
          <Typography as="h2" color="blue-gray" className="mb-4 text-3xl font-bold">
            Layanan Servis Laptop & Komputer
          </Typography>
          {/* @ts-ignore */}
          <Typography as="p" color="gray" className="mb-6 text-lg">
            Kami menyediakan berbagai layanan perbaikan dan upgrade perangkat komputer dan laptop, mulai dari penggantian komponen, optimasi performa, hingga solusi masalah kelistrikan. Semua pengerjaan dilakukan oleh teknisi profesional dengan standar kualitas tinggi.
          </Typography>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <FeatureCard key={title} icon={Icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;
