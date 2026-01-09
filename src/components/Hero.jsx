const heroStyle = {
  backgroundImage:
    "linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 100%), url('/imagens/2024-07-16.jpg')",
};

export default function Hero() {
  return (
    <section
      id="resumo"
      className="flex min-h-[70vh] items-center bg-cover bg-center px-6 py-24 md:min-h-[80vh] md:py-28"
      style={heroStyle}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-ember/80">
            Oficina especializada
          </p>
          <h1 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            Cuidamos do seu carro com{" "}
            <span className="text-ember">dedicação</span>, entregando resultados{" "}
            <span className="text-ember">precisos</span>.
          </h1>
          <div className="mt-6 h-1 w-24 rounded-full bg-ember" />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/5512991730255"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-ember px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-ember transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember sm:w-auto"
              aria-label="Chamar no WhatsApp"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
