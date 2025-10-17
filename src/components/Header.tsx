import { Button } from "@/components/ui/button";
import { Phone, Mail, Cross } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>095 93 88 11</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>info@parisimario.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Servizi Funebri 24/7</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
              <Cross className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Parisi Mario</h1>
              <p className="text-xs text-muted-foreground">Servizi Funebri</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="#chi-siamo" className="text-sm font-medium hover:text-primary transition-colors">
              Chi Siamo
            </a>
            <a href="#servizi" className="text-sm font-medium hover:text-primary transition-colors">
              Servizi
            </a>
            <a href="#pompe-funebri" className="text-sm font-medium hover:text-primary transition-colors">
              Pompe Funebri
            </a>
            <a href="#contatti" className="text-sm font-medium hover:text-primary transition-colors">
              Contatti
            </a>
          </nav>

          <Button size="sm" className="hidden md:inline-flex">
            Contattaci
          </Button>
        </div>
      </div>
    </header>
  );
}
