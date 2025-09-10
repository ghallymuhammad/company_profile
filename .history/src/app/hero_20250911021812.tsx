"use client";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/laptoprepair.jpg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold md:max-w-full lg:max-w-3xl">
          Master of Repairing Cracked Laptop Case in Indonesia
        </h1>
        <p className="text-white text-lg md:text-xl mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl">
          Spesialis Perbaikan Casing Laptop Pecah & Retak, Engsel Patah, hingga Body 
          Kusam—Profesional dan Presisi di Indonesia
        </p>
        <div>
          <button className="bg-gradient-to-r from-gray-100 to-white text-gray-900 font-semibold py-3 px-6 rounded-md hover:from-white hover:to-gray-100 transition-all duration-300">
            Call Us Now
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
