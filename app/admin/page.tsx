"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  Settings,
  Bell,
  LogOut,
  Menu,
  TrendingUp,
  CreditCard,
  Plus,
  MoreVertical,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formations } from "@/lib/formations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { icon: LayoutDashboard, label: "Vue d'ensemble", id: "dashboard" },
  { icon: Users, label: "Inscriptions", id: "enrollments" },
  { icon: GraduationCap, label: "Formateurs", id: "trainers" },
  { icon: BookOpen, label: "Catalogue", id: "catalog" },
  { icon: Settings, label: "Paramètres", id: "settings" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex lg:flex-col ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-20 flex items-center px-8 border-b border-slate-800">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-heading font-bold text-xl shadow-glow">
              Z
            </div>
            <span className="font-heading font-bold text-xl text-white">
              Ziryab Admin
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive
                    ? "bg-primary text-white font-medium shadow-md shadow-primary/20"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                  }`}
                />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-4 py-3 mb-4 rounded-xl bg-slate-800/50">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-medium shadow-sm shrink-0">
              AD
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-white truncate">Admin Principal</p>
              <p className="text-xs text-slate-400 truncate">admin@ziryabtec.ma</p>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors group">
            <LogOut className="w-5 h-5 text-slate-400 group-hover:text-red-400" />
            Déconnexion
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-4 flex-1">
            <button
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden sm:flex relative max-w-md w-full">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Rechercher (candidat, formation, formateur)..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-primary/50 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Button size="sm" className="hidden sm:inline-flex">
              <Plus className="w-4 h-4 mr-2" /> Nouvelle formation
            </Button>
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
                Vue d'ensemble
              </h1>
              <div className="flex gap-2">
                <select className="bg-white border border-slate-200 text-sm rounded-lg px-3 py-2 text-slate-700 outline-none focus:ring-2 focus:ring-primary/50">
                  <option>Ce mois</option>
                  <option>Mois dernier</option>
                  <option>Cette année</option>
                </select>
              </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: "Nouveaux Inscrits", value: "128", change: "+12%", up: true, icon: Users, color: "text-blue-500", bg: "bg-blue-50" },
                { label: "Revenu Estimé", value: "840K DH", change: "+18%", up: true, icon: CreditCard, color: "text-emerald-500", bg: "bg-emerald-50" },
                { label: "Formations Actives", value: "12", change: "0%", up: true, icon: BookOpen, color: "text-indigo-500", bg: "bg-indigo-50" },
                { label: "Taux de Complétion", value: "86%", change: "+2%", up: true, icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-50" },
              ].map((kpi, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className={`w-12 h-12 rounded-xl ${kpi.bg} ${kpi.color} flex items-center justify-center`}>
                          <kpi.icon className="w-6 h-6" />
                        </div>
                        <Badge variant="outline" className={`bg-white ${kpi.up ? 'text-emerald-600 border-emerald-200' : 'text-red-600 border-red-200'}`}>
                          {kpi.change}
                        </Badge>
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-1">{kpi.value}</h3>
                      <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Enrollments Table */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-sm h-full flex flex-col">
                  <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h2 className="text-lg font-heading font-bold text-slate-900">Inscriptions récentes</h2>
                    <button className="text-sm text-primary font-medium hover:underline">Voir tout</button>
                  </div>
                  <div className="flex-1 overflow-x-auto">
                    <table className="w-full text-left text-sm whitespace-nowrap">
                      <thead className="bg-slate-50 text-slate-500 font-medium">
                        <tr>
                          <th className="px-6 py-4">Candidat</th>
                          <th className="px-6 py-4">Formation</th>
                          <th className="px-6 py-4">Statut</th>
                          <th className="px-6 py-4">Date</th>
                          <th className="px-6 py-4"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          { name: "Ahmed C.", email: "ahmed@example.com", course: "AWS Cloud Architect", status: "Confirmé", date: "Aujourd'hui" },
                          { name: "Sara M.", email: "sara@example.com", course: "Cybersecurity Expert", status: "En attente", date: "Hier" },
                          { name: "Karim L.", email: "karim@example.com", course: "Full Stack Next.js", status: "Confirmé", date: "Il y a 2 jrs" },
                          { name: "Mouna B.", email: "mouna@example.com", course: "DevOps Engineer", status: "Confirmé", date: "Il y a 3 jrs" },
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4">
                              <p className="font-medium text-slate-900">{row.name}</p>
                              <p className="text-xs text-slate-500">{row.email}</p>
                            </td>
                            <td className="px-6 py-4 text-slate-700">{row.course}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                row.status === 'Confirmé' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                              }`}>
                                {row.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-slate-500">{row.date}</td>
                            <td className="px-6 py-4 text-right">
                              <button className="text-slate-400 hover:text-slate-600">
                                <MoreVertical className="w-5 h-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>

              {/* Popular Courses */}
              <div>
                <Card className="border-none shadow-sm h-full flex flex-col">
                  <div className="p-6 border-b border-slate-100">
                    <h2 className="text-lg font-heading font-bold text-slate-900">Formations Populaires</h2>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col gap-6">
                    {formations.slice(0, 4).map((formation) => (
                      <div key={formation.id} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                          <BookOpen className="w-5 h-5 text-slate-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-slate-900 truncate">{formation.nom}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant={formation.categorie === "Cloud" ? "cloud" : formation.categorie === "Cybersécurité" ? "cyber" : "dev"} className="px-1.5 py-0 text-[10px]">
                              {formation.categorie}
                            </Badge>
                            <span className="text-xs text-slate-500">{Math.floor(Math.random() * 50) + 10} inscrits</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
