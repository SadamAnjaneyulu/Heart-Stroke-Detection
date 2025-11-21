"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, AlertTriangle, Shield, CheckCircle2, Info } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { UpdateContactsModal } from "@/components/update-contacts-modal"

export default function Precautions() {
  const [contactsOpen, setContactsOpen] = useState(false)

  const precautions = [
    {
      category: "Medication Interactions",
      items: [
        "Avoid NSAIDs (ibuprofen, naproxen) with Lisinopril",
        "Do not take with potassium supplements",
        "Avoid grapefruit juice with Atorvastatin",
      ],
      icon: AlertTriangle,
      severity: "high",
    },
    {
      category: "Lifestyle Precautions",
      items: [
        "Limit sodium intake to less than 2300mg daily",
        "Regular exercise (150 mins/week recommended)",
        "Maintain healthy weight",
        "Limit alcohol consumption",
      ],
      icon: Shield,
      severity: "medium",
    },
    {
      category: "Dietary Restrictions",
      items: [
        "High-potassium foods: bananas, oranges, tomatoes (with Lisinopril)",
        "High-fat foods may affect cholesterol medication effectiveness",
        "Consistent vitamin K intake if on anticoagulants",
      ],
      icon: Info,
      severity: "medium",
    },
  ]

  const getSeverityColor = (severity: string) => {
    return severity === "high"
      ? "bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400"
      : "bg-amber-500/10 border-amber-500/50 text-amber-600 dark:text-amber-400"
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Health Precautions</h1>
          <p className="text-muted-foreground">Important health and safety guidelines for you</p>
        </div>

        {/* Precautions Cards */}
        <div className="space-y-6 mb-8">
          {precautions.map((item, idx) => (
            <Card key={idx} className={`border-2 rounded-2xl p-6 ${getSeverityColor(item.severity)}`}>
              <div className="flex items-start gap-3 mb-4">
                <item.icon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <h3 className="text-xl font-bold">{item.category}</h3>
              </div>
              <ul className="space-y-2 ml-9">
                {item.items.map((precaution, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{precaution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Emergency Contact */}
        <Card className="border border-border bg-card rounded-2xl p-6 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Emergency Contacts</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Primary Care: (555) 123-4567</p>
                <p>Emergency: 911</p>
                <p>Poison Control: (800) 222-1222</p>
              </div>
            </div>
            <Button
              onClick={() => setContactsOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
            >
              Update Contacts
            </Button>
          </div>
        </Card>

        <Card className="border-2 border-green-500/50 bg-green-500/10 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-foreground mb-2">Safety Tips</h3>
              <p className="text-sm text-muted-foreground">
                Always consult with your healthcare provider before making changes to your health routine. Keep these
                precautions in mind and report any unusual symptoms immediately.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <UpdateContactsModal isOpen={contactsOpen} onClose={() => setContactsOpen(false)} />
    </div>
  )
}
