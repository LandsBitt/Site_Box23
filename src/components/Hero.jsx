const heroStyle = {
  backgroundImage:
    "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%), url('/imagens/2024-07-16.jpg')",
};

export default function Hero() {
  return (
    <section
      id="resumo"
      className="flex min-h-[70vh] items-center bg-cover bg-center px-6 py-20 md:min-h-[80vh]"
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
        </div>
      </div>
    </section>
  );
}
