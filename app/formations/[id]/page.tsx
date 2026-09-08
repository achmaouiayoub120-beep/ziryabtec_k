import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formations, CategorieFormation } from "@/lib/formations";
import { formateurs } from "@/lib/formateurs";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Target,
  Mail,
  Award,
} from "lucide-react";

const categoryVariantMap: Record<CategorieFormation, "cloud" | "cyber" | "dev" | "ia"> = {
  Cloud: "cloud",
  Cybersécurité: "cyber",
  Développement: "dev",
  "Intelligence artificielle": "ia",
};

export async function generateStaticParams() {
  return formations.map((f) => ({ id: f.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const formation = formations.find((f) => f.id === id);
  if (!formation) return { title: "Formation introuvable | ZiryabTec" };
  return {
    title: `${formation.nom} | ZiryabTec`,
    description: formation.description,
  };
}

export default async function FormationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const formation = formations.find((f) => f.id === id);
  if (!formation) notFound();

  const formateur = formateurs.find((f) => f.id === formation.formateurId);
  const placesPct = (formation.placesDisponibles / formation.places) * 100;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
          <Image
            src={formation.image}
            alt={formation.nom}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="container mx-auto px-4 relative z-10 pb-12">
            <Link
              href="/formations"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors interactive text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Retour au catalogue
            </Link>
            <div className="flex flex-wrap gap-3 mb-4">
              <Badge variant={categoryVariantMap[formation.categorie]}>
                {formation.categorie}
              </Badge>
              <Badge variant="glass">{formation.niveau}</Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-3">
              {formation.nom}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">{formation.description}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main content — 2 cols */}
              <div className="lg:col-span-2 space-y-12">
                {/* Programme */}
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">
                    Programme de la Formation
                  </h2>
                  <div className="space-y-4">
                    {formation.programme.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 hover:shadow-glass transition-shadow"
                      >
                        <CheckCircle2 className="w-6 h-6 text-secondary mt-0.5 shrink-0" />
                        <span className="text-foreground font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Objectifs */}
                <div>
                  <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">
                    Objectifs Pédagogiques
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {formation.objectifs.map((obj, i) => (
                      <Card key={i} className="bg-background/50">
                        <CardContent className="p-6 flex items-start gap-4">
                          <Target className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground">{obj}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Formateur */}
                {formateur && (
                  <div>
                    <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">
                      Votre Formateur
                    </h2>
                    <Card>
                      <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-start">
                        <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                          <Image
                            src={formateur.photo}
                            alt={`${formateur.prenom} ${formateur.nom}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 className="text-xl font-heading font-semibold text-foreground">
                              {formateur.prenom} {formateur.nom}
                            </h3>
                            <p className="text-primary font-medium">{formateur.specialite}</p>
                          </div>
                          <p className="text-muted">{formateur.biographie}</p>
                          <div className="flex flex-wrap gap-2">
                            {formateur.certifications.map((cert) => (
                              <Badge key={cert} variant="outline">
                                <Award className="w-3 h-3 mr-1" /> {cert}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted">
                            <span className="font-mono">{formateur.experience} d'expérience</span>
                            <a
                              href={`mailto:${formateur.email}`}
                              className="flex items-center gap-1 text-primary hover:underline interactive"
                            >
                              <Mail className="w-4 h-4" /> Contacter
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-28">
                  <Card className="shadow-elevated border-none">
                    <CardContent className="p-8 space-y-6">
                      <div>
                        <span className="text-sm text-muted font-mono">Tarif de la formation</span>
                        <p className="text-3xl font-bold font-mono text-foreground mt-1">
                          {formation.prix.toLocaleString()} <span className="text-lg">MAD</span>
                        </p>
                      </div>

                      <div className="space-y-4 text-sm">
                        <div className="flex items-center gap-3 text-muted">
                          <Clock className="w-5 h-5 text-primary" />
                          <div>
                            <span className="block text-foreground font-medium">Durée</span>
                            {formation.duree}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-muted">
                          <MapPin className="w-5 h-5 text-primary" />
                          <div>
                            <span className="block text-foreground font-medium">Mode</span>
                            {formation.mode}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-muted">
                          <Calendar className="w-5 h-5 text-primary" />
                          <div>
                            <span className="block text-foreground font-medium">Dates</span>
                            {new Date(formation.dateDebut).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })} — {new Date(formation.dateFin).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                          </div>
                        </div>
                      </div>

                      {/* Places bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="flex items-center gap-2 text-muted">
                            <Users className="w-4 h-4 text-primary" /> Places restantes
                          </span>
                          <span className="font-mono font-semibold text-foreground">
                            {formation.placesDisponibles} / {formation.places}
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-primary h-full rounded-full transition-all duration-1000"
                            style={{ width: `${placesPct}%` }}
                          />
                        </div>
                      </div>

                      <Button className="w-full h-14 text-lg" asChild>
                        <Link href="/inscription">S'inscrire à cette formation</Link>
                      </Button>

                      <p className="text-xs text-center text-slate-400">
                        Paiement sécurisé • Facilités disponibles
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
