"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, AlertCircle, CheckCircle2 } from "lucide-react"

interface UpdateContactsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function UpdateContactsModal({ isOpen, onClose }: UpdateContactsModalProps) {
  const [primaryPhone, setPrimaryPhone] = useState("(555) 123-4567")
  const [emergencyContact, setEmergencyContact] = useState("(555) 987-6543")
  const [emergencyName, setEmergencyName] = useState("Sarah Anderson")
  const [submitted, setSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setPrimaryPhone("(555) 123-4567")
      setEmergencyContact("(555) 987-6543")
      setEmergencyName("Sarah Anderson")
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card border border-border rounded-3xl p-0 overflow-hidden animate-fade-scale">
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Update Contacts</h2>
          <button onClick={onClose} className="p-2 hover:bg-background/50 rounded-lg transition-colors">
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="p-6">
          {!submitted ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Primary Phone</label>
                <input
                  type="tel"
                  value={primaryPhone}
                  onChange={(e) => setPrimaryPhone(e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Emergency Contact Name</label>
                <input
                  type="text"
                  value={emergencyName}
                  onChange={(e) => setEmergencyName(e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground"
                  placeholder="Emergency contact name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Emergency Contact Phone</label>
                <input
                  type="tel"
                  value={emergencyContact}
                  onChange={(e) => setEmergencyContact(e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground"
                  placeholder="Emergency contact phone"
                />
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-700 dark:text-amber-300">
                  Emergency contacts will be notified in case of medical emergencies.
                </p>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="flex-1 border-2 border-border bg-transparent rounded-lg"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold"
                >
                  Save Changes
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <CheckCircle2 className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Contacts Updated!</h3>
              <p className="text-sm text-muted-foreground">Your emergency contacts have been saved successfully.</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
