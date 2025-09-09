"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import BackgroundCard from "@/components/background-card";

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="mb-2 md:w-10/12 font-normal !text-gray-500">
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h2" className="text-center mb-2" color="blue-gray">
        Kenapa Memilih Jasa Kami?
      </Typography>
      <Typography
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
      >
        Ahlinya Casing Laptop Retak & Engsel Patah — Rapi, Kuat, Seperti Baru Lagi.
Kami fokus pada perbaikan casing retak/pecah, penguatan dudukan engsel, dan cat ulang (repaint) agar laptop Anda kembali kokoh dan enak dipandang.
      </Typography>
      <div className="mt-8">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <BackgroundCard title="Nilai Utama">
            Learn from industry professionals with years of hands-on experience
            in React development.
          </BackgroundCard>
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={CloudIcon} title="Nilai Utama ">
                Kuat & Presisi — Penguatan struktur di titik rawan (engsel & sudut) + finishing halus.
Hemat Biaya — Opsi rekondisi atau ganti part menyesuaikan budget & ketersediaan.
Finishing Mulus — Repaint warna original/ custom, hasil rapi tanpa bekas tambalan mencolok.
Garansi Pengerjaan — Jaminan kekuatan & estetika sesuai paket yang dipilih.
Proses Transparan — Estimasi harga & waktu jelas sebelum mulai.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={ChartPieIcon} title="State and Props">
                Learn how to manage component state and utilize props to pass
                data between components.
              </Option>
            </div>
            <Option icon={Cog6ToothIcon} title="Component Lifecycle">
              Dive into the lifecycle of React components and harness its power
              to control your application&apos;s behavior.
            </Option>
          </div>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-8">
            <div className="my-4">
              <Option icon={KeyIcon} title="Routing with React Router">
                Create single-page applications (SPAs) with seamless navigation
                using React Router.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={UsersIcon} title="Handling Forms">
                Master form handling in React and manage user input effectively.
              </Option>
            </div>
            <Option icon={CloudArrowDownIcon} title="State Management">
              Explore state management options, including local component state
              and global state using Redux or Context API.
            </Option>
          </div>
          <BackgroundCard title="Supportive Community">
            Connect with fellow learners, share experiences, and get support
            from instructors and peers.
          </BackgroundCard>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
