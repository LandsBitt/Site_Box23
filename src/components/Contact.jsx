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
    <section id="contato" className="relative bg-charcoal px-6 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(249,80,4,0.12)_0%,transparent_45%)]" />
      <div className="relative mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold text-mist md:text-4xl">
          Fale <span className="text-ember">Conosco</span>
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1.3fr_1.1fr]">
          <div className="rounded-2xl border border-ember/30 bg-slate/80 p-6 shadow-ember">
            <div className="space-y-6 text-sm text-mist/80">
              <div className="flex gap-4">
                <i className="fas fa-map-marker-alt text-xl text-ember" />
                <div>
                  <h3 className="text-base font-semibold text-ember">
                    Endereço
                  </h3>
                  <p>
                    Av. Amélia Prata Balarin, 105
                    <br />
                    Parque das Palmeiras
                    <br />
                    Pindamonhangaba - SP, 12404-241
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <i className="fas fa-phone-alt text-xl text-ember" />
                <div>
                  <h3 className="text-base font-semibold text-ember">Telefone</h3>
                  <p>(12) 99173-0255</p>
                </div>
              </div>

              <div className="flex gap-4">
                <i className="fas fa-clock text-xl text-ember" />
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.123456789012!2d-45.4302789!3d-22.9190197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccef53bde58fbd%3A0x706f705214b4968a!2sOficina%20Box23!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-2xl border border-ember/30 bg-slate/80 p-6 shadow-ember">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="relative block">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder=" "
                    className="peer w-full rounded-lg border border-ember/40 bg-transparent px-4 py-3 text-sm text-mist outline-none transition focus:border-ember focus:ring-2 focus:ring-ember/30"
                  />
                  <span className="absolute left-4 top-3 text-xs text-mist/60 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-ember">
                    Nome completo
                  </span>
                </label>

                <label className="relative block">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder=" "
                    className="peer w-full rounded-lg border border-ember/40 bg-transparent px-4 py-3 text-sm text-mist outline-none transition focus:border-ember focus:ring-2 focus:ring-ember/30"
                  />
                  <span className="absolute left-4 top-3 text-xs text-mist/60 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-ember">
                    E-mail
                  </span>
                </label>
              </div>

              <label className="relative block">
                <input
                  type="tel"
                  name="phone"
                  placeholder=" "
                  className="peer w-full rounded-lg border border-ember/40 bg-transparent px-4 py-3 text-sm text-mist outline-none transition focus:border-ember focus:ring-2 focus:ring-ember/30"
                />
                <span className="absolute left-4 top-3 text-xs text-mist/60 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-ember">
                  Telefone
                </span>
              </label>

              <label className="relative block">
                <textarea
                  name="message"
                  required
                  placeholder=" "
                  rows="4"
                  className="peer w-full rounded-lg border border-ember/40 bg-transparent px-4 py-3 text-sm text-mist outline-none transition focus:border-ember focus:ring-2 focus:ring-ember/30"
                />
                <span className="absolute left-4 top-3 text-xs text-mist/60 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-ember">
                  Descreva brevemente o serviço necessário
                </span>
              </label>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:-translate-y-0.5 hover:shadow-ember disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isSending}
              >
                <i className="fas fa-paper-plane" />
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
