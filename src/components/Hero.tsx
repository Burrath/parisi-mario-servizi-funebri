import { Button } from "@/components/ui/button";
import { ArrowRight, Cross, Shield, Clock, Heart } from "lucide-react";
import heroImage from "@/assets/hero.png";

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950/20 dark:to-slate-950/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Servizi Funebri{" "}
                <span className="text-primary">Parisi Mario</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Dal 1954 al servizio delle famiglie siciliane con rispetto, 
                dignità e professionalità in ogni momento difficile.
              </p>
              <p className="text-sm text-primary font-medium">
                📍 Serviamo Catania e tutta la provincia
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Scopri i nostri servizi
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Chiama Ora
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Tradizione</h3>
                <p className="text-xs text-muted-foreground">Dal 1954</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Rispetto</h3>
                <p className="text-xs text-muted-foreground">E dignità</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Disponibilità</h3>
                <p className="text-xs text-muted-foreground">24 ore su 24</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Parisi Mario Servizi Funebri" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
