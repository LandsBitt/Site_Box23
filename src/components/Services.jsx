const services = [
  {
    title: "Diagnóstico via osciloscópio e scanner",
    description:
      "Leitura precisa de falhas e parâmetros para soluções rápidas e seguras.",
    image: "/imagens/scanner.jpg",
    icon: "fas fa-microchip",
    iconLabel: "Ícone de diagnóstico eletrônico",
  },
  {
    title: "Serviços elétricos",
    description:
      "Reparo de chicotes, sensores e sistemas elétricos com garantia.",
    image: "/imagens/eletrico.jpg",
    icon: "fas fa-bolt",
    iconLabel: "Ícone de energia elétrica",
  },
  {
    title: "Revisão preventiva",
    description:
      "Checklist completo para viagens e uso diário com tranquilidade.",
    image: "/imagens/revisao.jpg",
    icon: "fas fa-clipboard-check",
    iconLabel: "Ícone de checklist",
  },
  {
    title: "Troca de óleo",
    description:
      "Lubrificantes certos para prolongar a vida útil do motor.",
    image: "/imagens/oleo.jpg",
    icon: "fas fa-oil-can",
    iconLabel: "Ícone de óleo automotivo",
  },
  {
    title: "Manutenção de freios",
    description:
      "Pastilhas, discos e fluido revisados para máxima segurança.",
    image: "/imagens/freio.jpg",
    icon: "fas fa-car-crash",
    iconLabel: "Ícone de freios",
  },
  {
    title: "Suspensão e amortecedores",
    description:
      "Conforto e estabilidade com inspeção completa do conjunto.",
    image: "/imagens/suspensao.jpg",
    icon: "fas fa-car-side",
    iconLabel: "Ícone de suspensão",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-graphite px-6 py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(249,80,4,0.15)_0%,transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold text-mist md:text-4xl">
          Nossos <span className="text-ember">Serviços</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative h-72 overflow-hidden rounded-2xl border border-ember/30 shadow-ember transition hover:-translate-y-1"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-75"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-ember">
                  <i className={service.icon} aria-hidden="true" />
                  <span className="sr-only">{service.iconLabel}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-ash">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
