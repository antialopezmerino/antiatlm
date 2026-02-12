import { Button } from "@/components/ui/button";

const WhatIsRinganaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight">
            ¿Qué es Ringana?
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
            <p>
              Ringana es una empresa austriaca fundada en 1996, pionera en el desarrollo de 
              <span className="text-foreground font-normal"> cosméticos frescos</span> y 
              <span className="text-foreground font-normal"> suplementos naturales</span> de alta calidad.
            </p>
            
            <p>
              A diferencia de los productos convencionales, Ringana formula sin conservantes artificiales, 
              apostando por la frescura y la eficacia real de los ingredientes activos. 
              Cada producto se elabora en pequeños lotes para garantizar su máxima potencia.
            </p>
            
            <p>
              Con una filosofía de sostenibilidad integral —desde el origen de las materias primas 
              hasta el packaging reciclable— Ringana representa una forma consciente de cuidarse 
              y de cuidar el planeta.
            </p>
            
            <p className="text-foreground font-normal pt-4">
              Ahora, por primera vez, este modelo de bienestar europeo abre sus puertas en Perú.
            </p>

            <div className="pt-6 space-y-2">
              <Button asChild variant="outline" className="rounded-full px-8 py-5 text-base font-medium border-olive text-olive hover:bg-olive hover:text-olive-foreground transition-all duration-300">
                <a href="https://antia.ringana.com.co/" target="_blank" rel="noopener noreferrer">
                  Conoce más de los productos aquí
                </a>
              </Button>
              <p className="text-sm text-olive font-medium">
                Obtén 80 soles de descuento en tu primera compra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsRinganaSection;
