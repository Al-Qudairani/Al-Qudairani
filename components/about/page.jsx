import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function About() {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark transition-colors duration-300" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center md:text-right mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/15 text-primary font-bold">من نحن</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-secondary dark:text-white">
            تاريخ عريق ومستقبل واعد في تربية الدواجن
          </h2>
          <div className="mx-auto md:mx-0 w-24 h-1 bg-primary dark:bg-primary-dark mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative group">
            <div className="absolute -inset-3 bg-primary rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video border-b-8 border-primary">
              <div className="absolute inset-0">
                <Image
                  alt="About Al-Qudairani"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjWAhWkWdoQdwfHAJlEcr9PwnExWtoboAgmh7h2ax6MHwGd8r4ITA3DIfA-JZZzrl448CBqmxJEmvvjHbzce9T41HF0ddZ_SGDC8dtVqC1MQ52KUD17TNTllcCTJvp2303RYOeJ0YaeO9GTRb7r5GUSWSNtzbayq9BacfNjU9c9aDGNg5d6I5W5ioAYmdqIDBOiYKJY3h9bkbLSrFYY8e-W1HNGcPojCZEmAbbPsEXesUG4LaMgfvL-VsBdOwBi5gjQ0AdhduHZBI"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center pl-1 shadow-lg ring-8 ring-white/10 hover:ring-white/20 transition">
                  <span className="material-icons text-secondary text-4xl">play_arrow</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-foreground/80 dark:text-gray-300 mb-6 leading-8 text-lg">
              تأسست شركة القديراني عام 1984 برؤية واضحة لتكون الرائدة في مجال الدواجن في سوريا. نفخر بتقديم منتجات عالية الجودة تغطي كافة
              احتياجات السوق المحلي، من البيض الطازج إلى اللحوم، مع الالتزام الكامل بمعايير الصحة والسلامة العالمية.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm">
                <span className="material-icons text-primary">verified</span>
                <span className="text-foreground">خبرة تمتد لسنوات طويلة في السوق السوري</span>
              </div>
              <div className="flex items-center gap-3 bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm">
                <span className="material-icons text-primary">science</span>
                <span className="text-foreground">تقنيات حديثة وفريق عمل متخصص</span>
              </div>
              <div className="flex items-center gap-3 bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm">
                <span className="material-icons text-primary">eco</span>
                <span className="text-foreground">التزام بالجودة والاستدامة</span>
              </div>
              <div className="flex items-center gap-3 bg-card-light dark:bg-card-dark rounded-xl p-4 shadow-sm">
                <span className="material-icons text-primary">inventory_2</span>
                <span className="text-foreground">سلسلة توريد موثوقة وتغليف حديث</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="text-center bg-card-light dark:bg-card-dark rounded-xl p-4 border-b-4 border-primary shadow-sm">
                <div className="text-3xl font-extrabold text-primary">40+</div>
                <div className="text-sm text-foreground/70">سنوات خبرة</div>
              </div>
              <div className="text-center bg-card-light dark:bg-card-dark rounded-xl p-4 border-b-4 border-primary shadow-sm">
                <div className="text-3xl font-extrabold text-primary">100+</div>
                <div className="text-sm text-foreground/70">شراكات</div>
              </div>
              <div className="text-center bg-card-light dark:bg-card-dark rounded-xl p-4 border-b-4 border-primary shadow-sm">
                <div className="text-3xl font-extrabold text-primary">24/7</div>
                <div className="text-sm text-foreground/70">دعم</div>
              </div>
              <div className="text-center bg-card-light dark:bg-card-dark rounded-xl p-4 border-b-4 border-primary shadow-sm">
                <div className="text-3xl font-extrabold text-primary">+95%</div>
                <div className="text-sm text-foreground/70">رضا العملاء</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                aria-label="WhatsApp Contact"
                href="https://wa.me/963989889025"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-secondary font-bold px-6 py-3 rounded-md shadow-lg transition-colors"
              >
                <WhatsAppIcon fontSize="small" className="shrink-0" />
                <span>اتصل بنا</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

