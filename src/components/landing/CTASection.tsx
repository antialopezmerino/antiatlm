import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const whatsappLink = "https://wa.me/51941926985?text=Hola%2C%20vi%20la%20web%20sobre%20Ringana%20en%20Per%C3%BA%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20%F0%9F%98%8A";

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed">
            Si te genera curiosidad y quieres saber si esto puede encajar contigo:
          </p>

          <div className="space-y-4">
            <Button
              asChild
              size="lg"
              className="bg-olive text-olive-foreground hover:bg-olive/90 rounded-full px-10 py-7 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Escríbeme por WhatsApp
              </a>
            </Button>
            
            <p className="text-muted-foreground font-light italic">
              Te respondo yo misma. Sin presión ni compromiso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
