"use client";
import React from "react";
import Image from "next/image";
import {
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
  CpuChipIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  TruckIcon,
  ArrowPathIcon,
  DevicePhoneMobileIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";

type Service = {
  icon: React.ElementType;
  title: string;
  desc: string;
  badge?: string;
  startFrom?: string; // harga mulai
  href?: string;
};

const SERVICES: Service[] = [
  {
    icon: WrenchScrewdriverIcon,
    title: "Perbaikan Casing Retak / Pecah",
    desc: "Rekonstruksi & penguatan bracket, pengelasan plastik, penggantian panel casing agar kembali kokoh.",
    badge: "Best Seller",
    startFrom: "Rp150.000",
    href: "/contact",
  },
  {
    icon: Cog6ToothIcon,
    title: "Engsel Patah / Macet",
    desc: "Perbaikan dudukan engsel, re-anchoring, dan kalibrasi buka-tutup hingga mulus.",
    startFrom: "Rp200.000",
    href: "/contact",
  },
  {
    icon: PaintBrushIcon,
    title: "Body Kusam & Repaint",
    desc: "Refinishing, repaint presisi warna, dan detailing agar tampilan seperti baru.",
    startFrom: "Rp250.000",
    href: "/contact",
  },
  {
    icon: CpuChipIcon,
    title: "Upgrade & Performa",
    desc: "Upgrade SSD/RAM, thermal service, pembersihan internal, dan perapihan kabel.",
    startFrom: "Rp100.000",
    href: "/contact",
  },
  {
    icon: ArrowPathIcon,
    title: "Instalasi & Recovery",
    desc: "Install ulang OS, driver, aplikasi kerja; backup & recovery data dengan aman.",
    startFrom: "Rp150.000",
    href: "/contact",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "IT Support On-Site",
    desc: "Setting jaringan/Wi-Fi, printer sharing, troubleshooting software & hardware di lokasi klien.",
    startFrom: "Hubungi kami",
    href: "/contact",
  },
  {
    icon: ServerStackIcon,
    title: "IT Supplier & Procurement",
    desc: "Pengadaan laptop, spare parts, aksesoris, serta peripheral kantor dengan konsultasi spesifikasi.",
    startFrom: "Quotation",
    href: "/contact",
  },
  {
    icon: ShieldCheckIcon,
    title: "Kontrak Maintenance (SLA)",
    desc: "Paket preventif & support bulanan untuk UMKM/kantor: inventaris, audit, & respon prioritas.",
    startFrom: "Mulai Rp499.000/bln",
    href: "/contact",
  },
  {
    icon: TruckIcon,
    title: "Pickup & Delivery Bandung",
    desc: "Jemput-antar unit di area Bandung, aman & tercatat. Hemat waktu, cocok untuk kantor/UMKM.",
    startFrom: "Gratis* (syarat berlaku)",
    href: "/contact",
  },
];

function ServiceCard({ s }: { s: Service }) {
  const Icon = s.icon;
  return (
    <Card className="shadow-md h-full">
      <CardBody className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50">
            <Icon className="h-6 w-6 text-blue-700" />
          </span>
          <div className="flex flex-col">
            <Typography variant="h6">{s.title}</Typography>
            {s.badge && <Chip value={s.badge} size="sm" className="w-fit mt-1" />}
          </div>
        </div>
        <Typography className="!text-gray-600 text-sm leading-relaxed">
          {s.desc}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 flex items-center justify-between">
        <Typography variant="small" className="!text-gray-700">
          Mulai: <span className="font-semibold">{s.startFrom}</span>
        </Typography>
        <Button size="sm" color="blue" as="a" href={s.href || "/contact"}>
          Tanya Harga
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ServicesPage() {
  return (
    <section id="services" className="py-24 px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Typography variant="h2" color="blue-gray" className="mb-3">
            Our Services
          </Typography>
          <Typography variant="lead" className="!text-gray-600">
            Kami tidak hanya memperbaiki <b>casing laptop</b> yang rusak, tetapi juga
            melayani <b>kebutuhan IT supplier</b> dan berbagai <b>jasa IT</b> lainnya
            untuk individu, UMKM, hingga kantor di area Bandung.
          </Typography>
        </div>

        {/* Banner image (opsional) */}
        <div className="relative mt-10 h-56 md:h-72 w-full overflow-hidden rounded-3xl">
          <Image
            src="/image/services-banner.png"
            alt="Layanan IT & perbaikan laptop Bandung"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Services grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} s={s} />
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 rounded-3xl bg-blue-50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <Typography variant="h5" className="mb-1">
              Butuh penawaran untuk kantor atau project besar?
            </Typography>
            <Typography className="!text-gray-600">
              Kami sediakan opsi <b>quotation</b>, <b>pembelian perangkat</b>, dan <b>kontrak maintenance</b> dengan SLA.
            </Typography>
          </div>
          <div className="flex gap-3">
            <Button color="blue" as="a" href="/contact">
              Minta Quotation
            </Button>
            <Button variant="outlined" color="blue" as="a" href="/why-choose-us">
              Kenapa Memilih Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
