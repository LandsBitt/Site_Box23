import { useState } from "react";
import { Reveal } from "./ui/Reveal.jsx";
import Magnetic from "./ui/Magnetic.jsx";

const ADDRESS =
  "R. Jacyrema de Castro Giulianetti Almeida, Nº 11, Vila São Paulo, Pindamonhangaba - SP, 12405-588";

function Field({ label, name, type = "text", required, autoComplete, textarea }) {
  const baseClass =
    "peer w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-base text-bone outline-none transition-colors focus:border-ember placeholder:text-transparent";
  return (
    <label className="group relative block">
      {textarea ? (
        <textarea
          name={name}
          required={required}
          autoComplete={autoComplete}
          rows={4}
          placeholder={label}
          className={`${baseClass} resize-none`}
          aria-required={required ? "true" : undefined}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          autoComplete={autoComplete}
          inputMode={type === "tel" ? "tel" : undefined}
          placeholder={label}
          className={baseClass}
          aria-required={required ? "true" : undefined}
        />
      )}
      <span className="pointer-events-none absolute -top-2.5 left-0 text-[10px] uppercase tracking-widest text-steel-400 transition-colors group-focus-within:text-ember">
        {label}
      </span>
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-500 peer-focus:scale-x-100" />
    </label>
  );
}

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;
  const mapsUrl = "https://maps.app.goo.gl/R6Ejpbf7jxye2NqMA";
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFeedback({ type: "", message: "" });
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
      if (!response.ok) throw new Error("Falha no envio");
      setFeedback({
        type: "success",
        message: "Mensagem enviada. Em breve entraremos em contato.",
      });
      event.target.reset();
    } catch (error) {
      setFeedback({
        type: "error",
        message: "Erro ao enviar. Tente novamente ou use o WhatsApp.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-ink-950 py-32 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,80,4,0.12),transparent_55%)]" />

      <div className="container-page relative">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left column: heading + info */}
          <div>
            <Reveal>
              <p className="eyebrow mb-6">Fale conosco</p>
              <h2 className="font-display text-display-md font-semibold text-bone text-balance">
                Pronto para uma <span className="text-ember italic">conversa direta</span>?
              </h2>
              <p className="mt-6 max-w-md text-base text-steel-300">
                Mande sua dúvida ou descreva o problema do veículo. Respondemos
                rapidamente — geralmente em poucos minutos durante o expediente.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-12 space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-steel-400">Endereço</p>
                <p className="mt-2 text-base text-bone">
                  R. Jacyrema de Castro Giulianetti Almeida, Nº 11
                  <br />
                  Vila São Paulo · Pindamonhangaba SP
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest text-ember underline-offset-4 transition hover:underline"
                  >
                    → Obter rota
                  </a>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-widest text-steel-300 underline-offset-4 transition hover:text-ember hover:underline"
                  >
                    Abrir no Maps
                  </a>
                </div>
              </div>

              <div className="hairline" />

              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-steel-400">Telefone</p>
                  <a href="tel:+5512991730255" className="mt-2 block font-display text-2xl text-bone hover:text-ember transition">
                    (12) 99173-0255
                  </a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-steel-400">Horário</p>
                  <p className="mt-2 text-sm text-bone">Seg–Sex · 8h30–18h</p>
                  <p className="text-sm text-bone">Sáb · 9h–14h</p>
                </div>
              </div>

              <Magnetic strength={0.18} className="inline-block">
                <a
                  href="https://wa.me/5512991730255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <i className="fab fa-whatsapp text-base" aria-hidden="true" />
                  Atendimento direto
                </a>
              </Magnetic>
            </Reveal>

            <Reveal delay={0.3} className="mt-12 overflow-hidden rounded-2xl border border-white/[0.08]">
              <iframe
                title="Mapa Box23"
                src={mapEmbedSrc}
                className="h-64 w-full grayscale-[0.4] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>

          {/* Right column: form */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 md:p-12">
              <div className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-ember/20 blur-3xl" />
              <div className="relative">
                <p className="text-[10px] uppercase tracking-widest text-ember/80">
                  Formulário · 30 segundos
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold text-bone md:text-3xl">
                  Conte o que você precisa.
                </h3>

                <form className="mt-10 space-y-8" onSubmit={handleSubmit}>
                  <div className="grid gap-8 md:grid-cols-2">
                    <Field label="Nome completo" name="name" required autoComplete="name" />
                    <Field label="E-mail" name="email" type="email" required autoComplete="email" />
                  </div>
                  <Field label="Telefone (opcional)" name="phone" type="tel" autoComplete="tel" />
                  <Field label="Descreva o serviço necessário" name="message" required textarea />

                  <button
                    type="submit"
                    disabled={isSending}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                    aria-label="Enviar mensagem"
                  >
                    {isSending ? "Enviando..." : "Enviar mensagem"}
                    {!isSending && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    )}
                  </button>

                  {feedback.message && (
                    <p
                      role="status"
                      className={`text-sm ${
                        feedback.type === "success" ? "text-ember" : "text-steel-300"
                      }`}
                    >
                      {feedback.message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
