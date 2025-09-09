"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Typography, Chip, Card, CardBody } from "@material-tailwind/react";

type RUser = {
  name: { first: string; last: string };
  email: string;
  picture: { large: string };
};

const INDO_CITIES = [
  "Bandung", "Jakarta", "Surabaya", "Yogyakarta", "Medan",
  "Denpasar", "Makassar", "Semarang", "Bekasi", "Depok", "Tangerang",
];

export default function TeamsPage() {
  const [users, setUsers] = useState<RUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    // pakai seed agar hasil konsisten di reload
    fetch("https://randomuser.me/api/?results=6&seed=indonesia&noinfo")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch team");
        return res.json();
      })
      .then((data) => {
        setUsers(data.results || []);
      })
      .catch((e) => setErr(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="team" className="py-28 px-8">
      <div className="container mx-auto text-center">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          Our Team
        </Typography>
        <Typography variant="lead" className="!text-gray-600 mb-8">
          Tim teknisi & IT support kami yang siap melayani area Bandung & seluruh Indonesia.
        </Typography>

        {loading && (
          <div className="mt-12">
            <Typography className="!text-gray-500">Memuat tim…</Typography>
          </div>
        )}

        {err && (
          <div className="mt-12">
            <Typography className="text-red-600">Gagal memuat data: {err}</Typography>
          </div>
        )}

        {!loading && !err && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
            {users.map((user: RUser, idx: number) => {
              const city = INDO_CITIES[idx % INDO_CITIES.length];
              return (
                <Card key={idx} className="rounded-xl shadow-lg">
                  <CardBody className="flex flex-col items-center p-6">
                    <div className="relative h-24 w-24 mb-3">
                      <Image
                        src={user.picture.large}
                        alt={`${user.name.first} ${user.name.last}`}
                        fill
                        sizes="96px"
                        className="rounded-full object-cover"
                      />
                    </div>

                    <Typography variant="h5" className="mb-1">
                      {user.name.first} {user.name.last}
                    </Typography>
                    <Typography variant="small" className="!text-gray-500">
                      {user.email}
                    </Typography>

                    <div className="mt-3 flex items-center gap-2">
                      <Image
                        src="https://flagcdn.com/w20/id.png"
                        alt="Indonesia flag"
                        width={20}
                        height={14}
                        className="rounded-[2px]"
                      />
                      <Typography variant="small" className="!text-gray-700">
                        {city}, Indonesia
                      </Typography>
                    </div>

                    {/* Badge role sederhana (opsional) */}
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {idx % 3 === 0 && <Chip value="Casing Repair" size="sm" className="w-fit" />}
                      {idx % 3 === 1 && <Chip value="Hinge Specialist" size="sm" className="w-fit" />}
                      {idx % 3 === 2 && <Chip value="IT Support" size="sm" className="w-fit" />}
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
