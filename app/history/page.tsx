"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, TrendingUp, Heart, Pill, Calendar, FileText, Download, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function History() {
  const [exportLoading, setExportLoading] = useState(false)
  const [exportSuccess, setExportSuccess] = useState(false)

  const medicalHistory = [
    {
      date: "Nov 28, 2024",
      type: "Assessment",
      title: "Quarterly Risk Assessment",
      description: "Overall health status: Good. Risk level remains low.",
      icon: TrendingUp,
    },
    {
      date: "Nov 20, 2024",
      type: "Vitals",
      title: "Blood Pressure Check",
      description: "BP: 120/80 mmHg - Within normal range",
      icon: Heart,
    },
    {
      date: "Nov 15, 2024",
      type: "Medication",
      title: "Prescription Refilled",
      description: "Lisinopril 10mg - 30 day supply",
      icon: Pill,
    },
    {
      date: "Nov 10, 2024",
      type: "Appointment",
      title: "Follow-up Consultation",
      description: "Visited Dr. Sarah Chen for cardiology check-up",
      icon: Calendar,
    },
    {
      date: "Nov 1, 2024",
      type: "Lab Results",
      title: "Cholesterol Panel",
      description: "Total Cholesterol: 185 mg/dL - Acceptable",
      icon: FileText,
    },
    {
      date: "Oct 20, 2024",
      type: "Assessment",
      title: "Annual Health Screening",
      description: "Comprehensive physical examination completed",
      icon: TrendingUp,
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Assessment":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400"
      case "Vitals":
        return "bg-red-500/10 text-red-600 dark:text-red-400"
      case "Medication":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400"
      case "Appointment":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400"
      case "Lab Results":
        return "bg-green-500/10 text-green-600 dark:text-green-400"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const handleExportPDF = () => {
    setExportLoading(true)
    // Simulate PDF generation
    setTimeout(() => {
      setExportLoading(false)
      setExportSuccess(true)
      // Simulate PDF download
      const element = document.createElement("a")
      element.setAttribute(
        "href",
        "data:text/plain;charset=utf-8,Medical%20History%20Report%0APatient%3A%20John%20Anderson%0AExported%3A%20" +
          new Date().toLocaleDateString(),
      )
      element.setAttribute("download", "medical-history.pdf")
      element.style.display = "none"
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)

      setTimeout(() => setExportSuccess(false), 2000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        {/* Header */}
        <div className="mb-8 animate-slide-in">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Medical History</h1>
          <p className="text-muted-foreground">Complete record of your healthcare activities</p>
        </div>

        {/* Timeline */}
        <div className="space-y-4 mb-8">
          {medicalHistory.map((event, idx) => (
            <Card
              key={idx}
              className="border border-border bg-card rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${getTypeColor(event.type)}`}>
                  <event.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{event.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{event.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Export Section */}
        <Card className="border border-border bg-card rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">Export Your Records</h3>
              <p className="text-sm text-muted-foreground">Download your complete medical history as PDF</p>
            </div>
            {exportSuccess ? (
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/50 text-emerald-600">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold text-sm">Downloaded!</span>
              </div>
            ) : (
              <Button
                onClick={handleExportPDF}
                disabled={exportLoading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg flex items-center gap-2 disabled:opacity-50"
              >
                <Download className="w-4 h-4" />
                {exportLoading ? "Exporting..." : "Export PDF"}
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}
