import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "الدجاج اللاحم",
    description: "توفير أجود أنواع الدجاج اللاحم المربى في مزارع صحية وبأعلى المعايير.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDi99WMThy2ErHAz1bNNrGYyIhBU8hfyiHkPgBiuJzSffWtpK1YJqwnLlVpU6M-IIRfo3DOLplwu9pFYlZ5B5-TwiayAZv_Sk1Frtuy9iz_Ms3XJrqpl7vtCKpb6AOJegrtK8aGYwWxuyNDdoFvhDgwbtat4-yfF4Ld65j2Bsq7P9gxTA_z3KnNm4NODIWhQlxo-6L6ZKHOLgcdj-Gl-9oFVic5SRi9csGhcU1mltps3xVLKUXAaaqw8dsWjAQWrQRG_BLRckW1_yA",
    alt: "Chickens",
  },
  {
    id: 2,
    title: "الدجاج البياض",
    description: "سلالات مميزة من الدجاج البياض ذات إنتاجية عالية ومناعة قوية.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVLrDZGOfLC8URt7lxLoItIN1VBt7l1cJDZ_MUiUAGn651eBYt68nV_5_yj5DKiKy7ZjaE_EGgrFiKbeXH1Que8g1ZDhIy7RwfmHex0BhpyPgsA_Cdiuh2qpu_gGwKwv66GSNCfyQOp3Y8sOXdm8JKr8DU-uRE1SHcrzGQTGanr63D3_95HPPw4Ruy0lmEGJLk4tj-ZL1Q_t6RGXxnZYZ0-Z7k7KNy7obw8W4wjCOu0iN83nEWVKpn6gMqW6s9NC1BptjbPH4moyE",
    alt: "Laying Hens",
  },
  {
    id: 3,
    title: "الأعلاف",
    description: "تركيبات علفية متوازنة تضمن النمو السليم والإنتاجية العالية للطيور.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAp3ohUqYBAnNe96CtxsjPIoONRutng-41oXazhWK0IXNkj1VFop_4Ku7_j4h1_J--MOEnDjRfuAe_6nTRhSvhiDlzBaHOhlFfU9pivayhmUAjDSghweMGY4WokS6OJIhnrvYJhXSDHf9MjuA3o9X1L2PmxusRlCuT-KAYNbYtubURHZ13vEvMjfNNiBnrCUC-o-IPEwLVKqTsBbSO-IqcQCfG9Y4uDU2YcfJgwhQMSpRsfVZUREVn3ifiBKDs-CE17S6WRAc2i64A",
    alt: "Feed",
  },
  {
    id: 4,
    title: "بيض المائدة",
    description: "بيض طازج يومياً، يتم فحصه وتغليفه بأحدث الطرق الآلية.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDS81nhaUFll9w2mwoz6_bkU06emMLe6N5NUHOSCM3kaqsPIMHbNI2_8DQ7h1hqOwQecR9bGjPWkF9QrNmSkzUBxCRzfXjLPBYk0seQehmPbWPf8aX2scOcLSrdDJscekIgCYXCzHNk1ylhVSMrEKnsiR6R3I3xaVPKHSRRN_BMf-8pCM_0sKTtMNXtpiLRsVvMiitSHZhPrrezN8kSiTXC6sfm2-AEQe-lzORZYVTjm_N6zAoxzIcedeifNPVIgQ3-g6oDTo2hXCI",
    alt: "Table Eggs",
  },
  {
    id: 5,
    title: "بيض التفريخ",
    description: "بيض مخصب عالي الجودة بنسب تفقيس ممتازة للمزارع والمفاقس.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA3X36tCaBsNo3Mo890EdYDqTDWAOTuUHbu0PmVDBRDSF2_xOPvpkOonC-8-AKRt9CVXWAFOz_LGeYj3p_fO6OmVW1IY_6x4FB3ap7XCp4KhsJ5S-Yqvvyh85rbKTci0F3DM1PK56QU3nc-fGmS_T7FiONM7kV5J8XFgX4OLd-pLiaZZB9BBePEn6Fi-bfBEg51fjuxFOCio9ie0zx_IyAGpPuTy9jKfLdiKhLVeo_JGxMQObMDqGJkGZRERq_UonqoOg5bHc5ydE4",
    alt: "Hatching Eggs",
  },
  {
    id: 6,
    title: "تربية الفروج",
    description: "خدمات استشارية وإشرافية لمشاريع تربية الفروج لضمان الربحية.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBAx4H06mTPkMW16CzBEEYmREp7zciM8nvTk8_jshazOLWMyzunloTx-hn0jCopD12o5ERFr7SEPhRsXHOEHzmSA1VEGL_6Z4mPept3mQPF-zheBiypHgJsXYJkffqMCJIlz95Pevv_Ap0Xv2wgfE46o49dyG_Ig6DF3SPyMjLVA3DQuA2P5jeJL_TSZpH629WGbOQ7dpBJuEH8n9VpplPQkh8xp2CDBPolTngj2-QLRjO3tz1T1jwvQfzeCCF8siwDjPmR9kTp_oA",
    alt: "Broiler Farming",
  },
  {
    id: 7,
    title: "الأدوية واللقاحات",
    description: "مجموعة كاملة من التحصينات والأدوية البيطرية المعتمدة.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrtEakr2JChkUv9ixuKpePm-wEX692iHrs1Dh0MirgsIPTFdp9tBW4dC1XKMxoX4JgER3WKDZG2RS5mnV3i1FSeNBIF21fFpcw9_eBOvrcAqe4IIDhJTNMGyiD7uyyAgs_mU9KOWjBm3hwxgCFI8YqHuX6SNsGHflcpMoH4btsvuHZlztQM8tooa0iqK6kzLan7XVy-FwtFNuOiNEpYazeNI19NllLVzNmPXzPS14ITEgYCUXmkfyDlsmpAyUW_bfYsLtXyx50Fpw",
    alt: "Medicines",
  },
  {
    id: 8,
    title: "مستلزمات الدواجن",
    description: "كل ما تحتاجه مزارع الدواجن من معدات وأدوات وتجهيزات.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDViUWcOeUG5GzfzbL9Vj2F9M3CWv9JhEkLo6Ud2J4qHbCHpGsRYgNKB_R2q7HLSWhDi54IUSfHWWOE4NQQXhMZ_VvpnNyMlhZjfCB94XT6MFHiaPkkUyfxIpMMMuakw9nGUg06KqMZnUmfDAFkncON_-5DzM7Fk9aW6yxYQOKIADrPIxx8xEfJkAjCL8popmkv7wdgK2KfxcQIg_RL5AsRl8Za4zHEjKkSwi4aR9UERHrj-jiqkkO_GfflYy7pHcB5GegyIXJ22B8",
    alt: "Supplies",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-20 bg-background transition-colors duration-300 dark:bg-background-dark" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-lg mb-2 block">ماذا نقدم</span>
          <h2 className="text-4xl font-bold text-foreground">منتجاتنا وخدماتنا</h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card-light dark:bg-card-dark rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border-b-4 border-primary"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="100vw"
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-secondary dark:text-primary-dark">{product.title}</h3>
                <p className="text-foreground/70 dark:text-foreground/70 text-sm mb-4 line-clamp-2">{product.description}</p>
                <Link href="#" className="text-sm font-bold text-primary dark:text-primary-dark hover:text-primary-dark dark:hover:text-primary uppercase tracking-wide inline-block">
                  عرض التفاصيل
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
