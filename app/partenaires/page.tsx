import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { partenaires } from "@/lib/data";
import { Shield, Globe, Users, Zap } from "lucide-react";
import Image from "next/image";

export default function PartenairesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-6">Notre Écosystème Technologique</h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              ZiryabTec s'associe aux leaders mondiaux de la technologie pour vous offrir des formations pertinentes et alignées sur les besoins réels du marché.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {partenaires.map((partenaire) => (
              <div key={partenaire.id} className="bg-white rounded-2xl p-8 flex items-center justify-center border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <Image src={partenaire.logo} alt={partenaire.nom} width={120} height={60} className="object-contain" />
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
            <h2 className="text-3xl font-bold font-heading mb-10 text-center">Pourquoi devenir partenaire ?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Users className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Accès aux Talents</h3>
                  <p className="text-slate-500">Recrutez directement parmi nos lauréats certifiés et formés sur vos technologies spécifiques.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                  <Shield className="text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visibilité Marque</h3>
                  <p className="text-slate-500">Renforcez votre image de marque auprès de la nouvelle génération de développeurs et d'ingénieurs.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                  <Globe className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Projets Concrets</h3>
                  <p className="text-slate-500">Proposez des projets de fin d'études à nos étudiants pour résoudre vos problématiques métiers.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Zap className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovation Continue</h3>
                  <p className="text-slate-500">Participez à nos événements, hackathons et ateliers pour stimuler l'innovation.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
