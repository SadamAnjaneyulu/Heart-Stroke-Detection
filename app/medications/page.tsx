"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Pill, AlertCircle, Castle as Capsule, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Medications() {
  const [refillMed, setRefillMed] = useState<number | null>(null)
  const [refillConfirmed, setRefillConfirmed] = useState<number | null>(null)

  const medications = [
    {
      id: 1,
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      purpose: "Blood Pressure Control",
      nextRefill: "15 days",
      icon: Capsule,
    },
    {
      id: 2,
      name: "Atorvastatin",
      dosage: "20mg",
      frequency: "Once daily at night",
      purpose: "Cholesterol Management",
      nextRefill: "22 days",
      icon: Pill,
    },
  ]

  const handleRefill = (medId: number) => {
    setRefillMed(medId)
    setTimeout(() => {
      setRefillConfirmed(medId)
      setTimeout(() => {
        setRefillMed(null)
        setRefillConfirmed(null)
      }, 2000)
    }, 800)
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Your Medications</h1>
          <p className="text-muted-foreground">Manage and track your current prescriptions</p>
        </div>

        {/* Medications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {medications.map((med, idx) => (
            <Card
              key={idx}
              className="border border-border bg-card rounded-2xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{med.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{med.purpose}</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/10">
                  <med.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dosage:</span>
                  <span className="font-semibold text-foreground">{med.dosage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frequency:</span>
                  <span className="font-semibold text-foreground">{med.frequency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Next Refill:</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">{med.nextRefill}</span>
                </div>
              </div>

              {refillConfirmed === med.id ? (
                <div className="w-full p-3 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/50 flex items-center justify-center gap-2 text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold text-sm">Refill Confirmed!</span>
                </div>
              ) : refillMed === med.id ? (
                <div className="w-full space-y-2">
                  <p className="text-xs text-muted-foreground text-center font-medium">Confirm refill?</p>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleRefill(med.id)}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm"
                    >
                      Yes, Refill
                    </Button>
                    <Button
                      onClick={() => setRefillMed(null)}
                      variant="outline"
                      className="flex-1 border-2 border-border bg-transparent rounded-lg text-sm"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <Button
                  onClick={() => setRefillMed(med.id)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
                >
                  Request Refill
                </Button>
              )}
            </Card>
          ))}
        </div>

        {/* Important Info */}
        <Card className="border-2 border-amber-500/50 bg-amber-500/10 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-foreground mb-2">Important Reminders</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Always take medications exactly as prescribed</li>
                <li>• Set reminders for consistent medication adherence</li>
                <li>• Report any side effects to your healthcare provider</li>
                <li>• Never skip doses or adjust dosage without medical advice</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
