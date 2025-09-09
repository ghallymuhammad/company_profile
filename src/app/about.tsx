"use client";
import React from "react";
import Image from "next/image";
// @ts-ignore
import { Typography, Button, Chip, Card, CardBody } from "@material-tailwind/react";
import { CheckCircleIcon, ClockIcon, TruckIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

// @ts-ignore
const Feature = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex items-start gap-3">
    <CheckCircleIcon className="h-6 w-6 text-green-600 shrink-0" />
    <div>
      {/* @ts-ignore */}
      <Typography variant="h6" className="mb-1">{title}</Typography>
      {/* @ts-ignore */}
      <Typography className="!text-gray-600 text-sm">{desc}</Typography>
    </div>
  </div>
);

// @ts-ignore
export default function AboutPage() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden rounded-3xl shadow-lg">
              {/* @ts-ignore */}
              <Image
                src="/image/about-repair.jpg"
                alt="Teknisi memperbaiki casing laptop"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {/* @ts-ignore */}
              <Card className="shadow-md">
                {/* @ts-ignore */}
                <CardBody className="flex items-center gap-2 py-3">
                  <ShieldCheckIcon className="h-5 w-5 text-emerald-600" />
                  {/* @ts-ignore */}
                  <Typography variant="small" className="font-semibold">Garansi hingga 90 hari</Typography>
                </CardBody>
              </Card>
              {/* @ts-ignore */}
              <Card className="shadow-md">
                {/* @ts-ignore */}
                <CardBody className="flex items-center gap-2 py-3">
                  <ClockIcon className="h-5 w-5 text-indigo-600" />
                  {/* @ts-ignore */}
                  <Typography variant="small" className="font-semibold">Pengerjaan 1–3 hari</Typography>
                </CardBody>
              </Card>
              {/* @ts-ignore */}
              <Card className="shadow-md">
                {/* @ts-ignore */}
                <CardBody className="flex items-center gap-2 py-3">
                  <TruckIcon className="h-5 w-5 text-cyan-600" />
                  {/* @ts-ignore */}
                  <Typography variant="small" className="font-semibold">Pickup & Delivery Bandung</Typography>
                </CardBody>
              </Card>
            </div>
          </div>

          <div className="text-left">
            {/* @ts-ignore */}
            <Chip value="Bandung • Laptop Body & IT Service" className="mb-4 w-fit" />
            {/* @ts-ignore */}
            <Typography variant="h2" color="blue-gray" className="mb-3">
              Tentang Kami
            </Typography>
            {/* @ts-ignore */}
            <Typography variant="lead" className="mb-6 !text-gray-600">
              Kami adalah layanan spesialis <span className="font-semibold">service casing laptop di Bandung</span>—menangani
              casing retak atau pecah, perbaikan engsel patah/macet, serta peremajaan body kusam/tergores. Tim kami juga
              membantu kebutuhan IT lain seperti upgrade hardware, instalasi OS, hingga perapihan thermal dan kebersihan internal.
              Fokus kami: hasil rapi, kuat, dan tahan lama dengan harga transparan.
            </Typography>

            <div className="grid gap-5">
              {/* @ts-ignore */}
              <Feature
                title="Perbaikan Casing Retak/Pecah"
                desc="Rekonstruksi, penguatan bracket, pengelasan plastik, atau penggantian panel sehingga kokoh kembali."
              />
              {/* @ts-ignore */}
              <Feature
                title="Engsel Patah / Macet"
                desc="Re-anchoring dudukan engsel, penggantian part kompatibel, dan kalibrasi agar buka-tutup kembali mulus."
              />
              {/* @ts-ignore */}
              <Feature
                title="Body Kusam & Tergores"
                desc="Refinishing dan cat ulang presisi warna agar tampilan lebih fresh seperti baru."
              />
              {/* @ts-ignore */}
              <Feature
                title="Kebutuhan IT Lainnya"
                desc="Upgrade SSD/RAM, reinstall OS, backup data, thermal service, dan pembersihan menyeluruh."
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* @ts-ignore */}
              <Button size="lg" color="blue" as="a" href="/contact">
                Konsultasi Gratis
              </Button>
              {/* @ts-ignore */}
              <Button size="lg" variant="outlined" color="blue" as="a" href="/services">
                Lihat Layanan
              </Button>
              <div className="flex items-center gap-2">
                {/* @ts-ignore */}
                <Image
                  src="/logos/casinglaptoplogosmall.png"
                  alt="Logo Casing Laptop"
                  width={40}
                  height={40}
                  className="rounded-full h-auto"
                />
                {/* @ts-ignore */}
                <Typography variant="small" className="!text-gray-600">
                  Berpengalaman menangani ratusan unit lintas merek.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
