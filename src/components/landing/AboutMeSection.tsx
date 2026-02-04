import personalPhoto from "@/assets/personal-photo.png";
const AboutMeSection = () => {
  return <section className="py-20 md:py-28 bg-dusty-pink/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-background shadow-xl">
                <img src={personalPhoto} alt="Foto personal" className="w-full h-full object-cover object-top" />
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
            
            <div className="space-y-5 text-foreground/80 font-light leading-relaxed">
              <p>Hola, soy Antía, no Anita.<span className="font-medium text-foreground">Antía</span>.
              </p>
              
              <p>
                Soy ingeniera de formación, madre, y he vivido en distintos países 
                —algo que ha moldeado mi forma de entender a las personas y sus procesos.
              </p>

              <p>
                A lo largo de mi camino profesional descubrí que lo que realmente me 
                movía no era solo resolver problemas técnicos, sino acompañar a otros 
                en su crecimiento.
              </p>
              
              <p>Encontré en la educación un trabajo con propósito, desde donde disfruto ayudando a las personas a desarrollar su máximo potencial. </p>

              <p className="text-foreground/70 italic">
                Me gusta trabajar desde lo práctico, lo honesto y lo humano, con la 
                convicción de que cada persona tiene su propio ritmo y su propio camino.
              </p>

              <div className="pt-3 border-t border-foreground/10">
                <p>
                  No vengo del mundo de las ventas. Vengo de querer algo diferente. 
                  Y si estás aquí, probablemente tú también.
                </p>
                
                <p className="text-foreground font-normal pt-3">
                  Me encantará contarte más si sientes que esto puede ser para ti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutMeSection;