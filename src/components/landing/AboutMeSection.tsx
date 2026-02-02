const AboutMeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-dusty-pink/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-background shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces"
                  alt="Foto personal - Tu nombre"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-olive/20 rounded-full blur-xl -z-10" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-light text-foreground tracking-tight">
              Sobre mí
            </h2>
            
            <div className="space-y-4 text-foreground/80 font-light leading-relaxed">
              <p>
                Hola, soy <span className="font-medium text-foreground">[Tu nombre]</span>.
              </p>
              
              <p>
                Después de años buscando una forma de trabajar que respetara mi tiempo 
                y mis valores, encontré en Ringana un proyecto que encajaba con lo que 
                quería: productos reales, un modelo honesto y la libertad de construir 
                algo propio.
              </p>
              
              <p>
                No vengo del mundo de las ventas. Vengo de querer algo diferente. 
                Y si estás aquí, probablemente tú también.
              </p>
              
              <p className="text-foreground font-normal pt-2">
                Me encantará contarte más si sientes que esto puede ser para ti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
