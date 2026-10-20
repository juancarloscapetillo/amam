"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function ContactForm({ whatsappNumber }: { whatsappNumber: string }) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [pago, setPago] = useState("Crédito bancario");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `Hola, me llamo ${nombre || "—"} y me interesa Amam en San Ramón Norte.`,
      `Teléfono: ${telefono || "—"}`,
      `Forma de pago: ${pago}`,
    ];
    if (mensaje.trim()) lines.push(`Mensaje: ${mensaje.trim()}`);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="label" htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            required
            className="input"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="label" htmlFor="telefono">Teléfono</label>
          <input
            id="telefono"
            required
            type="tel"
            className="input"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="999 000 0000"
          />
        </div>
      </div>
      <div>
        <label className="label" htmlFor="pago">¿Cómo te gustaría adquirir tu casa?</label>
        <select id="pago" className="input" value={pago} onChange={(e) => setPago(e.target.value)}>
          <option>Crédito bancario</option>
          <option>Recursos propios</option>
          <option>Infonavit / Fovissste + banco</option>
          <option>Aún no lo sé</option>
        </select>
      </div>
      <div>
        <label className="label" htmlFor="mensaje">Mensaje (opcional)</label>
        <textarea
          id="mensaje"
          className="input"
          rows={3}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="¿Qué te gustaría saber?"
        />
      </div>
      <button
        type="submit"
        disabled={!whatsappNumber}
        className="btn w-full bg-[#25D366] text-white hover:bg-[#1EBE5A]"
      >
        <MessageCircle size={18} />
        Enviar por WhatsApp
      </button>
      <p className="text-xs text-amam-cream/70 text-center">
        Al enviar, se abrirá WhatsApp con tus datos para que un asesor te atienda directamente.
      </p>
    </form>
  );
}
