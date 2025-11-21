"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Activity,
  AlertCircle,
  Calendar,
  ChevronRight,
  Clock,
  Heart,
  LogOut,
  Pill,
  ShieldAlert,
  TrendingUp,
  User,
  Zap,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ProfileModal } from "@/components/profile-modal"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [profileOpen, setProfileOpen] = useState(false)

  const handleLogout = () => {
    window.location.href = "/"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-72" : "w-20"
        } bg-card border-r border-border transition-all duration-300 flex flex-col`}
      >
        <div className="h-16 px-6 flex items-center justify-between border-b border-border">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary fill-primary" />
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                HealthVault
              </span>
            </div>
          )}
        </div>

        <nav className="flex-1 px-3 py-8 space-y-2">
          {[
            { icon: Activity, label: "Dashboard", href: "/dashboard", active: true },
            { icon: ShieldAlert, label: "Risk Assessment", href: "/risk-assessment" },
            { icon: Pill, label: "Medications", href: "/medications" },
            { icon: AlertCircle, label: "Precautions", href: "/precautions" },
            { icon: Calendar, label: "Appointments", href: "/appointments" },
            { icon: TrendingUp, label: "History", href: "/history" },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                item.active
                  ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-border">
          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg"
            // Added onClick handler to logout button
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5 mr-3" />
            {sidebarOpen && "Logout"}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="h-16 border-b border-border bg-card/50 backdrop-blur-sm px-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Welcome back, Patient</h1>
          <div className="flex items-center gap-4">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <button
              onClick={() => setProfileOpen(true)}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center hover:shadow-lg hover:shadow-primary/50 transition-all cursor-pointer"
            >
              <User className="w-6 h-6 text-primary-foreground" />
            </button>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Health Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Risk Level",
                value: "Low",
                icon: Heart,
                color: "from-green-500/20 to-emerald-500/20",
                textColor: "text-emerald-600 dark:text-emerald-400",
              },
              {
                title: "Last Assessment",
                value: "3 days ago",
                icon: Calendar,
                color: "from-blue-500/20 to-cyan-500/20",
                textColor: "text-blue-600 dark:text-blue-400",
              },
              {
                title: "Active Medications",
                value: "2",
                icon: Pill,
                color: "from-amber-500/20 to-orange-500/20",
                textColor: "text-amber-600 dark:text-amber-400",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden hover:border-primary/50 transition-all duration-500 animate-slide-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{card.title}</p>
                      <p className={`text-3xl font-bold mt-2 ${card.textColor}`}>{card.value}</p>
                    </div>
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${card.color}`}>
                      <card.icon className={`w-6 h-6 ${card.textColor}`} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/risk-assessment" className="group">
                <Card className="p-6 border border-border hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">New Risk Assessment</h3>
                      <p className="text-sm text-muted-foreground">Complete your latest health assessment</p>
                    </div>
                    <Zap className="w-6 h-6 text-primary group-hover:animate-pulse" />
                  </div>
                  <div className="mt-4 flex items-center text-primary font-semibold text-sm">
                    Start Now <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>
              </Link>

              <Link href="/medications" className="group">
                <Card className="p-6 border border-border hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">View Medications</h3>
                      <p className="text-sm text-muted-foreground">Review your current prescriptions</p>
                    </div>
                    <Pill className="w-6 h-6 text-accent group-hover:animate-pulse" />
                  </div>
                  <div className="mt-4 flex items-center text-primary font-semibold text-sm">
                    Review <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <Card className="border border-border">
              <div className="divide-y divide-border">
                {[
                  { action: "Risk Assessment Completed", time: "2 days ago", icon: ShieldAlert },
                  { action: "Medication Refilled", time: "5 days ago", icon: Pill },
                  { action: "Appointment Scheduled", time: "1 week ago", icon: Calendar },
                ].map((item, idx) => (
                  <div key={idx} className="p-6 flex items-start justify-between hover:bg-muted/50 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.action}</p>
                        <p className="text-sm text-muted-foreground mt-1">{item.time}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  )
}
