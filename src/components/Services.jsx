const services = [
  {
    title: "Diagnóstico via osciloscópio e scanner",
    image: "/imagens/scanner.jpg",
  },
  {
    title: "Serviços Elétricos",
    image: "/imagens/eletrico.jpg",
  },
  {
    title: "Revisão Preventiva",
    image: "/imagens/revisao.jpg",
  },
  {
    title: "Troca de Óleo",
    image: "/imagens/oleo.jpg",
  },
  {
    title: "Manutenção de Freios",
    image: "/imagens/freio.jpg",
  },
  {
    title: "Suspensão e Amortecedores",
    image: "/imagens/suspensao.jpg",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-graphite px-6 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(249,80,4,0.15)_0%,transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold text-mist md:text-4xl">
          Nossos <span className="text-ember">Serviços</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative h-64 overflow-hidden rounded-2xl border border-ember/30 shadow-ember transition hover:-translate-y-1"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ember/80 to-transparent opacity-0 transition duration-500 group-hover:opacity-100">
                <h3 className="p-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
