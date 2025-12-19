import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 bg-white dark:bg-card-dark transition-colors duration-300" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-2 bg-primary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <div className="absolute inset-0">
                <Image
                  alt="About Al-Qudairani"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjWAhWkWdoQdwfHAJlEcr9PwnExWtoboAgmh7h2ax6MHwGd8r4ITA3DIfA-JZZzrl448CBqmxJEmvvjHbzce9T41HF0ddZ_SGDC8dtVqC1MQ52KUD17TNTllcCTJvp2303RYOeJ0YaeO9GTRb7r5GUSWSNtzbayq9BacfNjU9c9aDGNg5d6I5W5ioAYmdqIDBOiYKJY3h9bkbLSrFYY8e-W1HNGcPojCZEmAbbPsEXesUG4LaMgfvL-VsBdOwBi5gjQ0AdhduHZBI"
                  fill
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer hover:bg-black/20 transition-colors">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center pl-1 shadow-lg animate-bounce">
                  <span className="material-icons text-secondary text-4xl">play_arrow</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1 w-10 bg-primary rounded-full"></span>
              <span className="text-primary font-bold uppercase tracking-wider">من نحن</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary dark:text-white">تاريخ عريق ومستقبل واعد في صناعة الدواجن</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-8 text-lg">
              تأسست شركة القديراني برؤية واضحة لتكون الرائدة في مجال الدواجن في سوريا. نحن نفخر بتقديم منتجات عالية الجودة تغطي كافة احتياجات السوق المحلي، من البيض الطازج إلى اللحوم، مع الالتزام الكامل بمعايير الصحة والسلامة العالمية.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary">check_circle</span>
                <span className="text-gray-700 dark:text-gray-200">خبرة تمتد لسنوات طويلة في السوق السوري</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary">check_circle</span>
                <span className="text-gray-700 dark:text-gray-200">فريق عمل متخصص وتقنيات حديثة</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary">check_circle</span>
                <span className="text-gray-700 dark:text-gray-200">التزام بالجودة والاستدامة</span>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}

