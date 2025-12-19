'use client';
export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8 border-t-4 border-primary" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-secondary font-bold border border-primary-dark">
                <span className="material-icons text-xl">flutter_dash</span>
              </div>
              <span className="text-2xl font-bold">شركة القديراني</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              الخيار الأول لمنتجات الدواجن في سوريا. جودة، ثقة، وأمان غذائي لكل عائلة.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <a className="text-gray-300 hover:text-primary transition-colors" href="#">
                  الرئيسية
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-primary transition-colors" href="#about">
                  عن الشركة
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-primary transition-colors" href="#products">
                  منتجاتنا
                </a>
              </li>
              <li>
                <a className="text-gray-300 hover:text-primary transition-colors" href="#">
                  سياسة الخصوصية
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-icons text-primary mt-1">location_on</span>
                <span className="text-gray-300">سوريا - دمشق - المنطقة الصناعية</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary">phone</span>
                <span className="text-gray-300" dir="ltr">
                  +963 11 123 4567
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons text-primary">email</span>
                <span className="text-gray-300">info@alqudairani.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 شركة القديراني. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
