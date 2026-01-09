import { Link } from "react-router-dom";
import { featuredServices, serviceCategories } from "../data/servicesData.js";

const allServices = serviceCategories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categoryId: category.id,
    categoryTitle: category.title,
  })),
);

const servicesById = allServices.reduce((accumulator, item) => {
  accumulator[item.id] = item;
  return accumulator;
}, {});

export default function Services({ variant = "featured" }) {
  const isFeatured = variant === "featured";
  const services = isFeatured
    ? featuredServices
        .map((id) => servicesById[id])
        .filter(Boolean)
    : allServices;

  return (
    <section
      id={isFeatured ? "servicos" : undefined}
      className="relative overflow-hidden bg-graphite px-6 py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(249,80,4,0.15)_0%,transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold text-mist md:text-4xl">
          Nossos <span className="text-ember">Serviços</span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative rounded-2xl border border-ember/30 bg-slate/70 p-6 shadow-ember transition hover:-translate-y-1"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-ember">
                <i className={service.icon} aria-hidden="true" />
                <span className="sr-only">{service.title}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-ash">{service.description}</p>
              {!isFeatured && service.categoryTitle && (
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-ember/80">
                  {service.categoryTitle}
                </p>
              )}
            </article>
          ))}
        </div>

        {isFeatured && (
          <div className="mt-10 flex justify-center">
            <Link
              to="/servicos"
              className="inline-flex items-center justify-center rounded-full border border-ember/60 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-ember transition hover:bg-ember hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
              aria-label="Ver todos os serviços"
            >
              Ver todos os serviços
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
