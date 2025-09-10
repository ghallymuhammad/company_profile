"use client";
import React from "react";
import Image from "next/image";
import { CheckCircleIcon, ClockIcon, TruckIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

const Feature = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex items-start gap-3">
    <CheckCircleIcon className="h-6 w-6 text-green-600 shrink-0" />
    <div>
      <h6 className="text-lg font-semibold mb-1">{title}</h6>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/image/about-repair.jpg"
                alt="Teknisi memperbaiki casing laptop"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-white rounded-lg shadow-md p-3">
                <div className="flex items-center gap-2">
                  <ShieldCheckIcon className="h-5 w-5 text-emerald-600" />
                  <p className="text-sm font-semibold">Garansi hingga 90 hari</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-3">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-indigo-600" />
                  <p className="text-sm font-semibold">Pengerjaan 1–3 hari</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-3">
                <div className="flex items-center gap-2">
                  <TruckIcon className="h-5 w-5 text-cyan-600" />
                  <p className="text-sm font-semibold">Pickup & Delivery Bandung</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-left">
            <span className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Bandung • Laptop Body & IT Service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-gray-900 mb-3">
              Tentang Kami
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Kami adalah layanan spesialis <span className="font-semibold">service casing laptop di Bandung</span>—menangani
              casing retak atau pecah, perbaikan engsel patah/macet, serta peremajaan body kusam/tergores. Tim kami juga
              membantu kebutuhan IT lain seperti upgrade hardware, instalasi OS, hingga perapihan thermal dan kebersihan internal.
              Fokus kami: hasil rapi, kuat, dan tahan lama dengan harga transparan.
            </p>

            <div className="grid gap-5">
              <Feature
                title="Perbaikan Casing Retak/Pecah"
                desc="Rekonstruksi, penguatan bracket, pengelasan plastik, atau penggantian panel sehingga kokoh kembali."
              />
              <Feature
                title="Engsel Patah / Macet"
                desc="Re-anchoring dudukan engsel, penggantian part kompatibel, dan kalibrasi agar buka-tutup kembali mulus."
              />
              <Feature
                title="Body Kusam & Tergores"
                desc="Refinishing dan cat ulang presisi warna agar tampilan lebih fresh seperti baru."
              />
              <Feature
                title="Kebutuhan IT Lainnya"
                desc="Upgrade SSD/RAM, reinstall OS, backup data, thermal service, dan pembersihan menyeluruh."
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
                Konsultasi Gratis
              </a>
              <a href="/services" className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-md transition-colors">
                Lihat Layanan
              </a>
              <div className="flex items-center gap-2">
                <Image
                  src="/logos/casinglaptoplogosmall.png"
                  alt="Logo Casing Laptop"
                  width={40}
                  height={40}
                  className="rounded-full h-auto"
                />
                <p className="text-sm text-gray-600">
                  Berpengalaman menangani ratusan unit lintas merek.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
