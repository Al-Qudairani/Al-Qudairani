import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Poultry Farm Background"
          src="/icons/chik.jpg"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center blur-[6px]"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/25 to-black/60"></div>
      </div>
      <div className="container mx-auto px-4 relative z-20 text-center">
        <div className="inline-block p-2 px-4 rounded-full bg-primary/20 border border-primary text-primary mb-6 shadow-md">
          <span className="font-bold">الجودة والثقة شعارنا</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
          مرحبا بكم في <span className="text-primary">شركة القديراني</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          شركة القديراني للدواجن.. خبرة عريقة في السوق السوري، نوفر لكم من خلالها أجود المنتجات والخدمات المتكاملة في قطاع الدواجن
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-primary hover:bg-primary-dark text-secondary font-bold text-lg py-4 px-10 rounded-md shadow-2xl ring-1 ring-white/10 transition-transform transform hover:-translate-y-1"
          >
            اطلع على منتجاتنا
          </a>
          <a
            href="#about"
            className="bg-transparent border-2 border-white/80 hover:border-white text-white font-bold text-lg py-4 px-10 rounded-md backdrop-blur-sm transition-colors"
          >
            اعرف المزيد
          </a>
        </div>
      </div>
    </section>
  );
}
