import { Check, X } from "lucide-react";

const forYou = [
  "Buscas una fuente de ingresos extra con flexibilidad",
  "Te interesa el bienestar natural y la cosmética consciente",
  "Quieres trabajar desde casa, a tu ritmo",
  "Valoras el crecimiento personal y profesional",
  "Estás dispuesta a aprender y ser constante",
];

const notForYou = [
  "Buscas dinero rápido sin esfuerzo",
  "No te interesa aprender sobre los productos",
  "Prefieres la venta presencial tradicional",
  "No tienes tiempo para dedicar al proyecto",
  "No te sientes cómoda recomendando",
];

const ForWhoSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight text-center mb-16">
          ¿Es para ti?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
          {/* For You Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-olive flex items-center gap-2">
              <Check className="w-5 h-5" />
              Sí es para ti si...
            </h3>
            <ul className="space-y-3">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-olive/10 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-olive" strokeWidth={2.5} />
                  </div>
                  <span className="text-foreground font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-muted-foreground flex items-center gap-2">
              <X className="w-5 h-5" />
              No es para ti si...
            </h3>
            <ul className="space-y-3">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-muted rounded-full flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-muted-foreground" strokeWidth={2.5} />
                  </div>
                  <span className="text-muted-foreground font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
