import Image from "next/image";
import {
  Car,
  Waves,
  MoveVertical,
  Grid3x3,
  Paintbrush,
  DoorOpen,
  PanelsTopLeft,
  ChefHat,
  Flame,
  Footprints,
  MapPin,
  MessageCircle,
  CalendarCheck,
  ArrowDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";

const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");

const STATS = [
  { value: "178 m²", label: "de construcción" },
  { value: "205 m²", label: "de terreno" },
  { value: "3", label: "recámaras" },
  { value: "3.5", label: "baños" },
];

const ESPECIFICACIONES = [
  { icon: Car, label: "Estacionamiento techado para 2 vehículos" },
  { icon: Waves, label: "Alberca propia" },
  { icon: MoveVertical, label: "Altura interior de 2.7 m" },
  { icon: Grid3x3, label: "Pisos de cerámica" },
  { icon: Footprints, label: "Concreto estampado en cochera y andadores" },
  { icon: Paintbrush, label: "Acabado de yeso en muros interiores y plafones" },
  { icon: DoorOpen, label: "Puertas de madera de piso a techo" },
  { icon: PanelsTopLeft, label: "Cancelería Serie 80 color negro" },
  { icon: ChefHat, label: "Cocina con carpintería inferior y superior, meseta de granito" },
  { icon: Flame, label: "Parrilla de 4 quemadores" },
];

const GALERIA = [
  { src: "/renders/area-social.jpg", alt: "Sala y comedor de la casa Amam", label: "Área social", className: "md:row-span-2" },
  { src: "/renders/cocina.jpg", alt: "Cocina con carpintería de madera y meseta de granito", label: "Cocina", className: "md:row-span-2" },
  { src: "/renders/fachada-frontal.jpg", alt: "Fachada frontal de la casa Amam", label: "Fachada", className: "md:row-span-2" },
  { src: "/renders/recamara.jpg", alt: "Recámara principal", label: "Recámara principal", className: "md:col-span-2" },
  { src: "/renders/closet.jpg", alt: "Clóset vestidor de la recámara principal", label: "Clóset principal", className: "" },
];

const PLANTAS = [
  {
    nombre: "Planta baja",
    src: "/plantas/planta-baja.jpg",
    espacios: ["Sala, comedor y cocina", "Cuarto de lavado", "½ baño", "Terraza", "Alberca + jardín", "Cochera para 2 autos"],
  },
  {
    nombre: "Planta alta",
    src: "/plantas/planta-alta.jpg",
    espacios: ["3 recámaras", "3 baños completos", "Recámara principal con clóset vestidor"],
  },
];

const CERCANIAS = [
  "Prolongación Paseo Montejo",
  "Periférico Norte",
  "City Center",
  "Plaza La Isla",
  "The Harbor",
  "Altabrisa",
  "Hospitales privados de primer nivel",
  "Universidades y colegios de prestigio",
  "Restaurantes y cafeterías reconocidas",
];

export default function Home() {
  const waLink = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, me interesa información de Amam en San Ramón Norte.")}`
    : "#contacto";

  return (
    <>
      <Navbar />
      <main id="top">
        {/* HERO */}
        <section className="relative min-h-[100svh] flex items-end">
          <Image
            src="/renders/conjunto.jpg"
            alt="Conjunto de residencias Amam en San Ramón Norte"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/40" />
          <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 pt-32">
            <p className="eyebrow text-amam-sage">San Ramón Norte · Mérida, Yucatán</p>
            <h1 className="mt-4 font-serif text-6xl sm:text-7xl lg:text-8xl text-amam-cream leading-none">Amam</h1>
            <p className="mt-6 max-w-2xl font-serif text-2xl sm:text-3xl lg:text-4xl text-amam-cream leading-tight">
              11 residencias exclusivas en <em>San Ramón Norte</em>. Sin régimen de condominio.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#contacto" className="btn-light">
                <CalendarCheck size={18} />
                Agenda una visita
              </a>
              <a href={waLink} target={WHATSAPP_NUMBER ? "_blank" : undefined} rel="noopener noreferrer" className="btn-outline-light">
                <MessageCircle size={18} />
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
          <a
            href="#concepto"
            aria-label="Ir a concepto"
            className="hidden lg:flex absolute bottom-8 right-8 h-12 w-12 items-center justify-center rounded-full border border-amam-cream/50 text-amam-cream hover:bg-amam-cream/10"
          >
            <ArrowDown size={20} />
          </a>
        </section>

        {/* CONCEPTO */}
        <section id="concepto" className="bg-amam-mint scroll-mt-16">
          <div className="grid lg:grid-cols-2">
            <div className="px-4 sm:px-6 lg:px-16 xl:pl-[max(4rem,calc((100vw-80rem)/2+2rem))] py-20 lg:py-28 flex flex-col justify-center">
              <Image src="/brand/a11-oscuro.png" alt="A11" width={320} height={182} className="h-10 w-auto mb-6 self-start" />
              <p className="eyebrow text-amam-forest">El concepto</p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                Más espacio.
                <br />
                Más privacidad.
                <br />
                Más hogar.
              </h2>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-amam-ink/80">
                Un conjunto exclusivo de solo 11 casas independientes que combina arquitectura contemporánea, seguridad
                y la tranquilidad de vivir con mayor privacidad y autonomía.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
                <div>
                  <p className="font-serif text-4xl text-amam-forest">11</p>
                  <p className="text-sm text-amam-ink/70">casas independientes</p>
                </div>
                <div>
                  <p className="font-serif text-4xl text-amam-forest">0</p>
                  <p className="text-sm text-amam-ink/70">cuotas de régimen de condominio</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[420px] lg:min-h-[640px]">
              <Image
                src="/renders/fachada-posterior.jpg"
                alt="Fachada posterior con terraza y alberca"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* LA CASA */}
        <section id="casa" className="bg-textura scroll-mt-16">
          <div className="bg-amam-forest/20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
              <p className="eyebrow text-amam-cream/90">Un solo modelo, pensado a detalle</p>
              <h2 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-tight [text-shadow:0_2px_20px_rgba(0,0,0,0.15)]">
                Diseñado para quienes buscan más que una propiedad: buscan permanencia.
              </h2>
              <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 border border-white/80">
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className={`p-6 lg:p-8 border-white/80 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b lg:border-b-0" : ""} ${
                      i === 1 ? "lg:border-r" : ""
                    }`}
                  >
                    <p className="font-serif text-4xl lg:text-5xl text-white">{s.value}</p>
                    <p className="mt-1 text-sm uppercase tracking-widest text-white/90">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALERÍA */}
        <section id="galeria" className="bg-amam-cream py-20 lg:py-28 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-amam-forest">Galería</p>
                <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Espacios cálidos, luz natural.</h2>
              </div>
              <p className="max-w-md text-amam-ink/70">
                Interiores con madera, tonos tierra y ventanales de piso a techo que conectan cada espacio con el jardín.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 md:auto-rows-[260px] gap-3">
              {GALERIA.map((img) => (
                <figure
                  key={img.src}
                  className={`group relative overflow-hidden rounded-xl h-80 md:h-auto ${img.className}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm font-semibold text-white">
                    {img.label}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 text-xs text-amam-ink/50">
              *Las imágenes son puramente ilustrativas y pueden cambiar sin previo aviso. No incluye mobiliario ni falso
              plafón.
            </p>
          </div>
        </section>

        {/* PLANTAS */}
        <section id="plantas" className="bg-amam-sage py-20 lg:py-28 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="eyebrow text-amam-forest">Plantas arquitectónicas</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Dos niveles, una casa completa.</h2>
            <div className="mt-12 space-y-12">
              {PLANTAS.map((p) => (
                <div key={p.nombre} className="grid lg:grid-cols-[1fr_280px] gap-6 lg:gap-10 items-center">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-white/40">
                    <Image
                      src={p.src}
                      alt={`${p.nombre} de la casa Amam`}
                      fill
                      sizes="(min-width: 1024px) 70vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl">{p.nombre}</h3>
                    <ul className="mt-4 space-y-2">
                      {p.espacios.map((e) => (
                        <li key={e} className="flex items-start gap-2 text-amam-ink/80">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amam-forest flex-shrink-0" />
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ESPECIFICACIONES */}
        <section id="especificaciones" className="bg-amam-deep text-amam-sage scroll-mt-16">
          <div className="grid lg:grid-cols-[1.2fr_1fr]">
            <div className="px-4 sm:px-6 lg:px-16 xl:pl-[max(4rem,calc((100vw-80rem)/2+2rem))] py-20 lg:py-28">
              <p className="eyebrow text-amam-stone">Acabados</p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-amam-sage">Especificaciones</h2>
              <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-5">
                {ESPECIFICACIONES.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-3">
                    <Icon size={20} className="mt-0.5 flex-shrink-0 text-amam-leaf" />
                    <span className="text-amam-sage/90">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[420px]">
              <Image
                src="/renders/closet.jpg"
                alt="Clóset vestidor con carpintería de madera"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion" className="scroll-mt-16">
          <div className="relative w-full aspect-[16/9] max-h-[80vh] bg-amam-sage">
            <Image
              src="/brand/mapa.jpg"
              alt="Mapa de ubicación de Amam en San Ramón Norte, cerca de Av. Cámara de Comercio y Prolongación Paseo Montejo"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <div className="grid lg:grid-cols-2">
            <div className="bg-amam-ink text-amam-cream px-4 sm:px-6 lg:px-16 py-16 lg:py-24">
              <h2 className="font-serif text-4xl sm:text-5xl">Ubicación estratégica</h2>
              <ul className="mt-8 space-y-3">
                {CERCANIAS.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-amam-cream/85">
                    <MapPin size={16} className="text-amam-leaf flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amam-mint px-4 sm:px-6 lg:px-16 py-16 lg:py-24">
              <h2 className="font-serif text-4xl sm:text-5xl">Casas Amam</h2>
              <p className="mt-8 text-lg leading-relaxed text-amam-ink/80">
                Ubicada en el corazón del norte de Mérida, esta colonia ofrece un entorno residencial tranquilo, rodeado
                de servicios premium, reconocidos restaurantes, hospitales, centros comerciales y las principales
                vialidades de la ciudad.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-amam-ink/80">
                Su consolidada plusvalía, ambiente familiar y ubicación estratégica la convierten en una de las zonas más
                codiciadas para vivir e invertir en Yucatán.
              </p>
            </div>
          </div>
        </section>

        {/* ENTREGA + CONTACTO */}
        <section id="contacto" className="bg-textura scroll-mt-16">
          <div className="bg-amam-forest/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <p className="eyebrow text-white/90">Fecha de entrega</p>
                <p className="mt-2 font-serif text-6xl sm:text-7xl lg:text-8xl">Abril 2027</p>
                <h2 className="mt-10 font-serif text-3xl sm:text-4xl leading-tight">
                  Solo 11 casas.
                  <br />
                  Asegura la tuya hoy.
                </h2>
                <p className="mt-6 max-w-md text-white/90">
                  Déjanos tus datos y un asesor te compartirá precio, disponibilidad y esquemas de pago.
                </p>
              </div>
              <div className="rounded-2xl bg-amam-deep/85 backdrop-blur p-6 sm:p-8 shadow-2xl">
                <h3 className="font-serif text-3xl text-amam-cream">Agenda una visita</h3>
                <p className="mt-1 mb-6 text-sm text-amam-cream/70">Te respondemos el mismo día.</p>
                <ContactForm whatsappNumber={WHATSAPP_NUMBER} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-amam-ink text-amam-cream/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <p className="font-serif text-3xl text-amam-cream">Amam</p>
              <Image src="/brand/a11-claro.png" alt="A11" width={320} height={182} className="h-7 w-auto" />
            </div>
            <p className="mt-1 text-sm">San Ramón Norte, Mérida, Yucatán</p>
          </div>
          <div className="text-sm md:text-right">
            <p>
              Un desarrollo de <span className="font-semibold text-amam-cream">MID OBRAS</span>
            </p>
            <p className="mt-1">© {new Date().getFullYear()} Amam. Todos los derechos reservados.</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-xs text-amam-cream/50">
            *Las imágenes son puramente ilustrativas y pueden cambiar sin previo aviso. No incluye mobiliario ni falso
            plafón. Consulta lo incluido en la memoria descriptiva.
          </p>
        </div>
      </footer>
    </>
  );
}
