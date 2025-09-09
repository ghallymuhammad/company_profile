/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "randomuser.me" },              // avatar RandomUser
      { protocol: "https", hostname: "flagcdn.com" },                // bendera kecil
      { protocol: "https", hostname: "lh3.googleusercontent.com" },  // foto profil Google Reviews
      { protocol: "https", hostname: "lh4.googleusercontent.com" },
      { protocol: "https", hostname: "lh5.googleusercontent.com" },
      { protocol: "https", hostname: "lh6.googleusercontent.com" },
      { protocol: "https", hostname: "www.material-tailwind.com" },  // <<< tambahkan ini
    ],
  },
};

module.exports = nextConfig;
