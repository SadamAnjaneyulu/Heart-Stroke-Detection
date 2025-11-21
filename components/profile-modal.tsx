"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Mail, Phone, MapPin, User } from "lucide-react"
import { useState } from "react"
import { EditProfileModal } from "./edit-profile-modal"

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const [editOpen, setEditOpen] = useState(false)

  if (!isOpen) return null

  const patientData = {
    name: "John Anderson",
    email: "john.anderson@email.com",
    phone: "(555) 123-4567",
    age: 52,
    bloodType: "O+",
    height: "5'10\"",
    weight: "185 lbs",
    location: "San Francisco, CA",
    riskLevel: "Low",
    lastCheckup: "Nov 28, 2024",
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-card border border-border rounded-3xl p-0 overflow-hidden animate-fade-scale">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 border-b border-border flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Patient Profile</h2>
            <button onClick={onClose} className="p-2 hover:bg-background/50 rounded-lg transition-colors">
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <User className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{patientData.name}</h3>
                <p className="text-sm text-muted-foreground">{patientData.age} years old</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{patientData.email}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{patientData.phone}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{patientData.location}</span>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 space-y-2">
              <h4 className="font-bold text-foreground text-sm">Health Metrics</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Blood Type</p>
                  <p className="font-semibold text-foreground">{patientData.bloodType}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Height</p>
                  <p className="font-semibold text-foreground">{patientData.height}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Weight</p>
                  <p className="font-semibold text-foreground">{patientData.weight}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Risk Level</p>
                  <p className="font-semibold text-emerald-600">{patientData.riskLevel}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={onClose}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold"
              >
                Close
              </Button>
              <Button
                onClick={() => setEditOpen(true)}
                variant="outline"
                className="flex-1 border-2 border-primary text-primary hover:bg-primary/5 bg-transparent rounded-lg font-semibold"
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <EditProfileModal isOpen={editOpen} onClose={() => setEditOpen(false)} />
    </>
  )
}
