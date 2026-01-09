import { useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFeedback("");
    setIsSending(true);

    const formData = new FormData(event.target);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone") || "Não informado",
      subject: "Mensagem do formulário do site",
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/.netlify/functions/sendTelegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Falha no envio");
      }

      setFeedback("Mensagem enviada com sucesso. Em breve entraremos em contato.");
      event.target.reset();
    } catch (error) {
      setFeedback(
        "Erro ao enviar sua mensagem. Tente novamente ou use o WhatsApp.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-charcoal px-6 py-24 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(249,80,4,0.12)_0%,transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold text-mist md:text-4xl">
          Fale <span className="text-ember">Conosco</span>
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1.3fr_1.1fr]">
          <div className="rounded-2xl border border-ember/30 bg-slate/80 p-6 shadow-ember">
            <div className="space-y-6 text-sm text-ash">
              <div className="flex gap-4">
                <i
                  className="fas fa-map-marker-alt text-xl text-ember"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-base font-semibold text-ember">
                    Endereço
                  </h3>
                  <p>
                    R. Jacyrema de Castro Giulianetti Almeida, N° 11
                    <br />
                    Vila São Paulo
                    <br />
                    Pindamonhangaba - SP, 12405-588
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <i
                  className="fas fa-phone-alt text-xl text-ember"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-base font-semibold text-ember">Telefone</h3>
                  <p>(12) 99173-0255</p>
                </div>
              </div>

              <div className="flex gap-4">
                <i className="fas fa-clock text-xl text-ember" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold text-ember">
                    Horário de Funcionamento
                  </h3>
                  <p>
                    <span className="font-semibold text-mist">
                      Segunda a Sexta:
                    </span>{" "}
                    08:30 - 18:00
                  </p>
                  <p>
                    <span className="font-semibold text-mist">Sábado:</span>{" "}
                    09:00 - 14:00
                  </p>
                  <p>
                    <span className="font-semibold text-mist">Domingo:</span>{" "}
                    Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-[280px] overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="Mapa Box23"
              src="https://www.google.com/maps?q=R.%20Jacyrema%20de%20Castro%20Giulianetti%20Almeida%2C%2011%20-%20Vila%20S%C3%A3o%20Paulo%2C%20Pindamonhangaba%20-%20SP%2C%2012405-588&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-2xl border border-ember/30 bg-slate/80 p-6 shadow-ember">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-sm text-ash">
                  Nome completo
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-lg border border-ember/40 bg-transparent px-4 py-3 text-sm text-mist outline-none transition focus:border-ember focus:ring-2 focus:ring-ember/30"
                    aria-required="true"
                  />
                </label>

                <label className="block text-sm text-ash">
                  E-mail
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-lg border border-ember/40 bg-transparent px-4 py-3 text-sm text-mist outline-none transition focus:border-ember focus:ring-2 focus:ring-ember/30"
                    aria-required="true"
                  />
                </label>
              </div>

              <label className="block text-sm text-ash">
                Telefone (opcional)
                <input
                  type="tel"
                  name="phone"
                  inputMode="tel"
                  autoComplete="tel"
                  className="mt-2 w-full rounded-lg border border-ember/40 bg-transparent px-4 py-3 text-sm text-mist outline-none transition focus:border-ember focus:ring-2 focus:ring-ember/30"
                />
              </label>

              <label className="block text-sm text-ash">
                Descreva brevemente o serviço necessário
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="mt-2 w-full rounded-lg border border-ember/40 bg-transparent px-4 py-3 text-sm text-mist outline-none transition focus:border-ember focus:ring-2 focus:ring-ember/30"
                  aria-required="true"
                />
              </label>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:-translate-y-0.5 hover:shadow-ember disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isSending}
                aria-label="Enviar mensagem pelo formulário"
              >
                <i className="fas fa-paper-plane" aria-hidden="true" />
                {isSending ? "Enviando..." : "Enviar mensagem"}
              </button>

              {feedback && (
                <p className="text-sm text-mist/80" role="status">
                  {feedback}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
