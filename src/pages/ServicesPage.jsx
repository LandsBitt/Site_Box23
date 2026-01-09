import { useState } from "react";
import { Link } from "react-router-dom";
import { serviceCategories } from "../data/servicesData.js";

export default function ServicesPage() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    serviceCategories[0]?.id || "",
  );

  const activeCategory =
    serviceCategories.find((category) => category.id === activeCategoryId) ||
    serviceCategories[0];

  return (
    <div className="bg-charcoal">
      <section className="relative overflow-hidden bg-graphite px-6 py-20 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(249,80,4,0.18)_0%,transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-ember/80">
            Catálogo completo
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-white md:text-5xl">
            Serviços da <span className="text-ember">Box23</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-ash md:text-base">
            Veja todas as especialidades organizadas por categoria e fale com a
            oficina para tirar dúvidas ou agendar seu atendimento.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-charcoal px-6 py-24 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(249,80,4,0.15)_0%,transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {serviceCategories.map((category) => {
              const isActive = category.id === activeCategoryId;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategoryId(category.id)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember ${
                    isActive
                      ? "border-ember bg-ember text-black"
                      : "border-white/10 bg-black/40 text-mist/80 hover:border-ember/60 hover:text-ember"
                  }`}
                  aria-pressed={isActive}
                >
                  {category.title}
                </button>
              );
            })}
          </div>

          {activeCategory && (
            <div className="mt-10">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold text-mist">
                  {activeCategory.title}
                </h2>
                <p className="mt-2 text-sm text-ash">
                  {activeCategory.description}
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {activeCategory.items.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-2xl border border-ember/25 bg-slate/70 p-5 transition hover:-translate-y-0.5 hover:shadow-ember"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-ember">
                        <i className={item.icon} aria-hidden="true" />
                        <span className="sr-only">{item.title}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-ash">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/5512991730255"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:-translate-y-0.5 hover:shadow-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              Chamar no WhatsApp
            </a>
            <Link
              to="/#contato"
              className="inline-flex items-center justify-center rounded-full border border-ember/60 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-ember transition hover:bg-ember hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
            >
              Falar com a oficina
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
