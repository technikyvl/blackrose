export default function Home() {
  const services = [
    {
      id: "manicure",
      title: "Paznokcie",
      description: "Stylizacje hybrydowe, żelowe, klasyczne – precyzja i trwałość.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      href: "/services.html",
    },
    {
      id: "pedicure",
      title: "Pedicure",
      description: "Pielęgnacja stóp, wygładzenie pięt i perfekcyjne wykończenie.",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80",
      href: "/services.html",
    },
    {
      id: "depilacja",
      title: "Depilacja",
      description: "Delikatna depilacja woskiem, gładkość i komfort skóry.",
      image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1200&q=80",
      href: "/services.html",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Usługi
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">
            Manicure, pedicure i depilacja
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Wybierz jedną z naszych usług – precyzyjny manicure, komfortowy pedicure
            lub delikatną depilację woskiem. Każde zdjęcie prowadzi do strony usług.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={service.href}
                className="group overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Przejdź do usługi
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
