import { Gallery4 } from "@/components/ui/gallery4";

export default function Home() {
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

      <Gallery4 />
    </main>
  );
}
