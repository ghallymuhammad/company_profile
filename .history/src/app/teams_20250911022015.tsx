"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

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
        <h2 className="text-3xl md:text-4xl font-bold text-blue-gray-900 mb-2">
          Our Team
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Tim teknisi & IT support kami yang siap melayani area Bandung & seluruh Indonesia.
        </p>

        {loading && (
          <div className="mt-12">
            <p className="text-gray-500">Memuat tim…</p>
          </div>
        )}

        {err && (
          <div className="mt-12">
            <p className="text-red-600">Gagal memuat data: {err}</p>
          </div>
        )}

        {!loading && !err && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-4">
            {users.map((user: RUser, idx: number) => {
              const city = INDO_CITIES[idx % INDO_CITIES.length];
              return (
                <div key={idx} className="bg-white rounded-xl shadow-lg">
                  <div className="flex flex-col items-center p-6">
                    <div className="relative h-24 w-24 mb-3">
                      <Image
                        src={user.picture.large}
                        alt={`${user.name.first} ${user.name.last}`}
                        fill
                        sizes="96px"
                        className="rounded-full object-cover"
                      />
                    </div>

                    <h5 className="text-xl font-semibold mb-1">
                      {user.name.first} {user.name.last}
                    </h5>
                    <p className="text-sm text-gray-500">
                      {user.email}
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                      <Image
                        src="https://flagcdn.com/w20/id.png"
                        alt="Indonesia flag"
                        width={20}
                        height={14}
                        className="rounded-[2px]"
                      />
                      <p className="text-sm text-gray-700">
                        {city}, Indonesia
                      </p>
                    </div>

                    {/* Badge role sederhana (opsional) */}
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {idx % 3 === 0 && (
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Casing Repair
                        </span>
                      )}
                      {idx % 3 === 1 && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Hinge Specialist
                        </span>
                      )}
                      {idx % 3 === 2 && (
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          IT Support
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
