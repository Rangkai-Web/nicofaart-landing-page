import { Award, Truck, Shield, Users } from "lucide-react";
import Image from "next/image";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: "Kualitas Premium",
      description:
        "Menggunakan kayu pilihan terbaik dengan finishing berkualitas tinggi yang tahan lama dan indah.",
    },
    {
      icon: Users,
      title: "Craftsman Berpengalaman",
      description:
        "Dikerjakan oleh pengrajin Jepara berpengalaman dengan teknik tradisional yang telah teruji.",
    },
    {
      icon: Truck,
      title: "Pengiriman Aman",
      description:
        "Sistem packaging khusus dan pengiriman ke seluruh Indonesia dengan asuransi penuh.",
    },
    {
      icon: Shield,
      title: "Garansi Terpercaya",
      description:
        "Garansi kualitas produk dan layanan after-sales yang memuaskan untuk kepuasan pelanggan.",
    },
  ];

  return (
    <section id="choose-us" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/skilled-craftsman-working-on-wooden-furniture-in-t.webp"
              width={500}
              height={500}
              alt="Pengrajin NICOFAART"
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              NICOFAART telah dipercaya sebagai produsen furniture kayu Jepara
              berkualitas tinggi dengan komitmen pada kepuasan pelanggan.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <reason.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-pretty">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
