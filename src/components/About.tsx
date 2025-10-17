import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Award, Heart } from "lucide-react";

export function About() {
  return (
    <section id="chi-siamo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Chi Siamo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una storia di tradizione, rispetto e servizio alle famiglie siciliane dal 1954
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">La Nostra Storia</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dal 1954, l'Impresa Parisi Mario si dedica con passione e professionalità 
                al servizio delle famiglie siciliane nei momenti più difficili. La nostra 
                esperienza pluridecennale ci ha permesso di comprendere l'importanza di 
                accompagnare con rispetto e dignità ogni famiglia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Oggi, con oltre 40.000 famiglie che si sono affidate ai nostri servizi, 
                continuiamo a mantenere i valori di tradizione e innovazione che ci 
                contraddistinguono da sempre.
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-primary" />
                  I Nostri Valori
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Rispetto, dignità e professionalità sono i pilastri del nostro servizio. 
                  Ogni famiglia merita di essere accompagnata con amore e competenza 
                  nei momenti più delicati della vita.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Dal 1954</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Oltre 70 anni di esperienza nel settore dei servizi funebri 
                in Sicilia.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">40.000+ Famiglie</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Migliaia di famiglie si sono affidate ai nostri servizi 
                con fiducia e soddisfazione.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Professionalità</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                Team qualificato e specializzato per offrire il miglior 
                servizio possibile.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Rispetto</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                La dignità e il rispetto sono al centro di ogni nostro 
                servizio e relazione.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
