import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/51XXXXXXXXX"; // Configurar número

  return (
    <section className="min-h-screen bg-background flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight tracking-tight">
                Ringana llega a Perú
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                Bienestar europeo, productos naturales y un proyecto flexible que ahora abre mercado en el país.
              </p>
              <p className="text-sm text-muted-foreground tracking-wide">
                100 % online · Sin stock · Sin compras obligatorias
              </p>
            </div>

            <div className="space-y-3">
              <Button
                asChild
                size="lg"
                className="bg-olive text-olive-foreground hover:bg-olive/90 rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Habla conmigo por WhatsApp
                </a>
              </Button>
              <p className="text-sm text-muted-foreground italic">
                Sin compromiso. Te cuento con calma.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop&crop=faces"
                  alt="Mujer serena disfrutando de un momento de calma y bienestar natural"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Subtle decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-dusty-pink/30 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-olive/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
