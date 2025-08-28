import { Heart } from "lucide-react";

export function DashboardFooter() {
  return (
    <footer className="bg-dashboard-surface border-t border-dashboard-border px-6 py-4 mt-auto">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <span>© 2024 DashPro. Feito com</span>
          <Heart className="h-4 w-4 text-red-500 fill-current" />
          <span>no Brasil</span>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="#" 
            className="hover:text-foreground transition-smooth"
          >
            Suporte
          </a>
          <a 
            href="#" 
            className="hover:text-foreground transition-smooth"
          >
            Privacidade
          </a>
          <a 
            href="#" 
            className="hover:text-foreground transition-smooth"
          >
            Termos
          </a>
        </div>
      </div>
    </footer>
  );
}