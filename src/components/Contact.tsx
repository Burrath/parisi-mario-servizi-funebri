import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contatti" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Contattaci</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Siamo qui per supportarvi in ogni momento. Contattateci per informazioni 
            sui nostri servizi o per assistenza immediata.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  La Nostra Sede
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Parisi Mario Servizi Funebri</p>
                  <p>Via Vincenzo Gioberti, 7/9</p>
                  <p>95014 - Giarre (CT)</p>
                  <p>P.IVA 036338100879</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  Contatti
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href="tel:+393484191693" className="font-medium hover:text-primary transition-colors">+39 348 419 1693</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href="mailto:info@parisimario.com" className="font-medium hover:text-primary transition-colors">info@parisimario.com</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-4 w-4 text-muted-foreground" />
                    <a href="https://wa.me/393484191693" className="font-medium hover:text-primary transition-colors">WhatsApp disponibile</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-primary" />
                  Disponibilità
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Servizio</span>
                    <span className="font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergenze</span>
                    <span className="font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ufficio</span>
                    <span className="font-medium">8:00 - 18:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-primary/10 to-gray-600/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Emergenza 24/7</h3>
              <p className="text-sm text-muted-foreground mb-4">
                In caso di emergenza, il nostro servizio è disponibile 24 ore su 24, 
                7 giorni su 7. Siamo qui per supportarvi in ogni momento.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="sm" className="flex-1" asChild>
                  <a href="tel:+393484191693">
                    <Phone className="mr-2 h-3 w-3" />
                    Chiama Ora
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="flex-1" asChild>
                  <a href="https://wa.me/393484191693">
                    <MessageCircle className="mr-2 h-3 w-3" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
