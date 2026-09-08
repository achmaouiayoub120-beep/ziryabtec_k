import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { temoignages } from "@/lib/data";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function TemoignagesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-6">Ce que disent nos lauréats</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Découvrez les histoires de réussite de nos anciens étudiants et comment ZiryabTec a propulsé leur carrière.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temoignages.map((temoignage) => (
              <div key={temoignage.id} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-50 opacity-50" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < temoignage.note ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}`} 
                    />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-8 min-h-[120px]">
                  "{temoignage.texte}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={temoignage.photo} alt={temoignage.nom} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold font-heading text-slate-900">{temoignage.nom}</h4>
                    <p className="text-sm text-slate-500">{temoignage.role} chez {temoignage.entreprise}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
