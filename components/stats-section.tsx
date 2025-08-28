export function StatsSection() {
  const stats = [
    {
      number: "1000+",
      label: "Produk Terjual",
      description: "Furniture berkualitas telah dipercaya pelanggan",
    },
    {
      number: "500+",
      label: "Pelanggan Puas",
      description: "Testimoni positif dari seluruh Indonesia",
    },
    {
      number: "15+",
      label: "Tahun Pengalaman",
      description: "Berpengalaman dalam craftsmanship kayu Jepara",
    },
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-muted-foreground text-pretty">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
