import { Check } from "lucide-react";

const benefits = [
  "100% online, sin reuniones presenciales obligatorias",
  "Sin stock ni productos en casa",
  "Sin cuotas ni compras obligatorias mensuales",
  "Formación y acompañamiento incluidos",
  "Flexibilidad total de horarios",
  "Comisiones directas y transparentes",
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-beige">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight text-center mb-12">
            ¿Qué ofrece este proyecto?
          </h2>

          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-start gap-4 bg-background/60 backdrop-blur-sm rounded-xl px-6 py-4 shadow-sm"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-olive rounded-full flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-olive-foreground" strokeWidth={2.5} />
                </div>
                <span className="text-foreground font-light text-lg">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
