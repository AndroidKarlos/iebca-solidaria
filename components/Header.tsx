import Image from "next/image";

export default function Header() {
  return (
    <header className="text-white py-8 px-4 shadow-lg" style={{ background: 'linear-gradient(to right, #008751, #006b40)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-4">
          <div className="relative w-[60px] h-[60px] overflow-hidden shadow-lg">
            <Image
              src="/iebca-logo.jpeg"
              alt="Logo IEBCA Solidária"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">IEBCA Solidária</h1>
            <p className="text-white/90 text-sm md:text-base">
              Tecnologia que transforma vidas
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
