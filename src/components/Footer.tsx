import { Phone, Mail, MapPin, Clock, Cross } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <Cross className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Parisi Mario</h3>
                <p className="text-sm text-gray-400">Servizi Funebri</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Dal 1954 al servizio delle famiglie siciliane con rispetto, 
              dignità e professionalità in ogni momento difficile.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">095 93 88 11</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@parisimario.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-sm">
                  <p>Via Vincenzo Gioberti, 7/9</p>
                  <p>95014 - Giarre (CT)</p>
                  <p>P.IVA 036338100879</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Servizi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servizi" className="text-gray-300 hover:text-primary transition-colors">Trasporto Funebre</a></li>
              <li><a href="#servizi" className="text-gray-300 hover:text-primary transition-colors">Camera Ardente</a></li>
              <li><a href="#servizi" className="text-gray-300 hover:text-primary transition-colors">Disbrigo Pratiche</a></li>
              <li><a href="#servizi" className="text-gray-300 hover:text-primary transition-colors">Organizzazione Funerale</a></li>
              <li><a href="#servizi" className="text-gray-300 hover:text-primary transition-colors">Celebrazioni Religiose</a></li>
              <li><a href="#servizi" className="text-gray-300 hover:text-primary transition-colors">Supporto Familiare</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Disponibilità</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Servizio</span>
                <span>24/7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Emergenze</span>
                <span>24/7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Ufficio</span>
                <span>8:00 - 18:00</span>
              </div>
            </div>
            <div className="pt-2">
              <div className="flex items-center space-x-2 text-primary">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">Supporto continuo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 Parisi Mario Servizi Funebri. Tutti i diritti riservati.</p>
              <p className="mt-1">Dal 1954 al servizio delle famiglie siciliane</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Termini di Servizio</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
