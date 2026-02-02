import { UserPlus, Share2, Wallet } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Regístrate gratis",
    description: "Sin inversión inicial",
  },
  {
    icon: Share2,
    title: "Comparte lo que usas",
    description: "Con tu enlace personal",
  },
  {
    icon: Wallet,
    title: "Genera ingresos",
    description: "Desde cualquier lugar",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight text-center mb-16">
          ¿Cómo funciona?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-olive rounded-full flex items-center justify-center shadow-lg">
                <step.icon className="w-7 h-7 text-olive-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
