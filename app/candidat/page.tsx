"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  User,
  Settings,
  Bell,
  LogOut,
  ChevronRight,
  Menu,
  X,
  Award,
  Clock,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formations } from "@/lib/formations";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { icon: LayoutDashboard, label: "Vue d'ensemble", id: "dashboard" },
  { icon: BookOpen, label: "Mes formations", id: "courses" },
  { icon: Award, label: "Certifications", id: "certs" },
  { icon: User, label: "Mon profil", id: "profile" },
  { icon: Settings, label: "Paramètres", id: "settings" },
];

export default function EspaceCandidat() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Example data
  const enrolledCourse = formations[0]; // AWS
  const progress = 65;

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
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex lg:flex-col ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-20 flex items-center px-8 border-b border-slate-100">
          <Link href="/" className="flex items-center">
            <Image src="/logo-transparent.png" alt="ZiryabTec Logo" width={140} height={45} className="object-contain" />
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
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive ? "text-primary" : "text-slate-400 group-hover:text-slate-600"
                  }`}
                />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors group">
            <LogOut className="w-5 h-5 text-slate-400 group-hover:text-red-500" />
            Déconnexion
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 flex items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-semibold text-slate-900 hidden sm:block">
              {navItems.find((i) => i.id === activeTab)?.label}
            </h1>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 sm:pl-6 border-l border-slate-200">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-slate-900">Youssef B.</p>
                <p className="text-xs text-slate-500">Candidat</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-indigo-500 flex items-center justify-center text-white font-medium shadow-sm">
                YB
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Welcome Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-8"
            >
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
              <div className="relative z-10 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
                  Bonjour, Youssef ! 👋
                </h2>
                <p className="text-slate-300 max-w-xl">
                  Prêt à continuer votre apprentissage ? Vous avez complété 65% de votre formation AWS Cloud Architect.
                </p>
              </div>
              <Button className="relative z-10 shrink-0">
                Reprendre <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { label: "Formations actives", value: "1", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-50" },
                { label: "Heures d'apprentissage", value: "48h", icon: Clock, color: "text-indigo-500", bg: "bg-indigo-50" },
                { label: "Certifications", value: "0", icon: Award, color: "text-emerald-500", bg: "bg-emerald-50" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                        <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Enrolled Course */}
            <div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-6">Formation en cours</h3>
              <Card className="border-none shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-slate-100 relative min-h-[200px] md:min-h-auto">
                     {/* Placeholder for course image */}
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-multiply"></div>
                  </div>
                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <Badge variant="cloud" className="mb-3">
                          {enrolledCourse.categorie}
                        </Badge>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">
                          {enrolledCourse.nom}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            Prochaine session: Demain, 19:00
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm font-medium mb-2">
                        <span className="text-slate-600">Progression</span>
                        <span className="text-primary">{progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Just needed for the dummy import above since lucide-react ArrowRight is missing from the destructuring
import { ArrowRight } from "lucide-react";
