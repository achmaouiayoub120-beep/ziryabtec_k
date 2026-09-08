import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image src="/logo-transparent.png" alt="ZiryabTec Logo" width={160} height={50} className="object-contain" />
            </Link>
            <p className="text-muted text-sm mb-6 max-w-xs">
              Académie d'élite et centre de formation certifiant en IT basé à Casablanca. Formations AWS, Cybersécurité, IA et Full Stack.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors interactive">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors interactive">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors interactive">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">Formations</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="/formations#cloud" className="hover:text-primary transition-colors interactive">Cloud Architecture</Link></li>
              <li><Link href="/formations#cyber" className="hover:text-primary transition-colors interactive">Cybersécurité Avancée</Link></li>
              <li><Link href="/formations#dev" className="hover:text-primary transition-colors interactive">Développement Full Stack</Link></li>
              <li><Link href="/formations#ia" className="hover:text-primary transition-colors interactive">Intelligence Artificielle</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">Entreprise</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="/apropos" className="hover:text-primary transition-colors interactive">À propos de nous</Link></li>
              <li><Link href="/formateurs" className="hover:text-primary transition-colors interactive">Nos Formateurs</Link></li>
              <li><Link href="/partenaires" className="hover:text-primary transition-colors interactive">Partenaires</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors interactive">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li>contact@ziryabtec.com</li>
              <li>+212 5XX XX XX XX</li>
              <li>Casablanca, Maroc</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} ZiryabTec. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-primary transition-colors interactive">Mentions Légales</Link>
            <Link href="/confidentialite" className="hover:text-primary transition-colors interactive">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
