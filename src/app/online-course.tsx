"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: InboxIcon,
    title: "Casing Retak & Patah",
    description:
      "Casing laptop retak adalah masalah yang umum terjadi, biasanya disebabkan oleh benturan, terjatuh, tekanan saat dibawa, engsel yang aus, panas berlebih, atau kualitas material yang kurang baik.",
  },
  {
    icon: AcademicCapIcon,
    title: "Engsel Patah & Macet",
    description:
      "Engsel laptop patah atau macet membuat layar susah dibuka-tutup, terasa seret, atau terdengar bunyi “krek”. Dibiarkan terlalu lama bisa merusak casing, panel layar, hingga kabel fleksibel.",
  },
  {
    icon: CheckBadgeIcon,
    title: "Body Kusam & Tergores",
    description: "Laptop tampak kusam dan penuh baret? Cat ulang profesional adalah jawabannya. Kami lakukan sanding terukur, primer adhesion, warna sesuai pilihan (matte/doff/satin/gloss), lalu clear coat pelindung. Finishing presisi, tampilan segar, siap dipakai harian..",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/online-course.png"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            RESTORASI CASING LAPTOP
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
          >
            Dari sifatnya yang portabel, casing laptop rentan terhadap
            kerusakan fisik seperti retak, penyok, atau goresan. Casing yang
            rusak tidak hanya mengurangi estetika laptop, tetapi juga dapat
            mempengaruhi perlindungan komponen internalnya. Layanan restorasi
            casing laptop bertujuan untuk memperbaiki dan mengembalikan kondisi
            fisik casing laptop ke keadaan semula atau bahkan lebih baik.
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
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
