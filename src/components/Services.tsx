import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Car, Flower, FileText, Clock, Cross, Heart } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Trasporto Funebre",
    description: "Automezzi funebri eleganti e rispettosi per accompagnare il defunto con dignità.",
    badge: "24/7"
  },
  {
    icon: Flower,
    title: "Allestimento Camera Ardente",
    description: "Camera ardente allestita con cura e rispetto presso la residenza o in cappella.",
    badge: "Personalizzato"
  },
  {
    icon: FileText,
    title: "Disbrigo Pratiche",
    description: "Gestione completa di tutte le pratiche burocratiche e documentali necessarie.",
    badge: "Completo"
  },
  {
    icon: Clock,
    title: "Organizzazione Funerale",
    description: "Pianificazione e organizzazione completa del rito funebre secondo le vostre esigenze.",
    badge: "Professionale"
  },
  {
    icon: Cross,
    title: "Celebrazioni Religiose",
    description: "Supporto per celebrazioni religiose cattoliche o cerimonie laiche personalizzate.",
    badge: "Tradizionale"
  },
  {
    icon: Heart,
    title: "Supporto Familiare",
    description: "Assistenza psicologica e supporto emotivo per tutta la famiglia durante il lutto.",
    badge: "Umano"
  }
];

export function Services() {
  return (
    <section id="servizi" className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950/20 dark:to-slate-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">I Nostri Servizi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Servizi completi e personalizzati per accompagnare con rispetto e dignità 
            ogni famiglia nei momenti più difficili
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/10 to-gray-600/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-gray-600/20 transition-all">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-medium">Servizio 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-primary" />
              <span className="font-medium">Supporto umano</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <span className="font-medium">Pratiche complete</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
