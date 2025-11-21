"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Calendar, Clock, User, CheckCircle2 } from "lucide-react"

interface ScheduleModalProps {
  isOpen: boolean
  onClose: () => void
  isReschedule?: boolean
}

export function ScheduleModal({ isOpen, onClose, isReschedule = false }: ScheduleModalProps) {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState("")

  if (!isOpen) return null

  const doctors = [
    { id: 1, name: "Dr. Sarah Chen", specialty: "Cardiology", available: true },
    { id: 2, name: "Dr. Michael Johnson", specialty: "General Practice", available: true },
    { id: 3, name: "Dr. Emily Rodriguez", specialty: "Cardiology", available: true },
  ]

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"]

  const handleConfirm = () => {
    setStep(3)
    setTimeout(() => {
      onClose()
      setStep(1)
      setSelectedDate("")
      setSelectedTime("")
      setSelectedDoctor("")
    }, 2000)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-card border border-border rounded-3xl p-0 overflow-hidden animate-fade-scale">
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 border-b border-border flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            {isReschedule ? "Reschedule Appointment" : "Schedule Appointment"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-background/50 rounded-lg transition-colors">
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-bold text-foreground mb-4">Select Doctor</h3>
              {doctors.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDoctor(doc.name)}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    selectedDoctor === doc.name
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.specialty}</p>
                    </div>
                  </div>
                </button>
              ))}
              <Button
                onClick={() => setStep(2)}
                disabled={!selectedDoctor}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold disabled:opacity-50"
              >
                Next
              </Button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-bold text-foreground mb-4">Select Date & Time</h3>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 rounded-lg border border-border bg-background text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Time Slot</label>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-3 rounded-lg border-2 transition-all font-medium ${
                        selectedTime === time
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50 text-foreground"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  onClick={() => setStep(1)}
                  variant="outline"
                  className="flex-1 border-2 border-border bg-transparent rounded-lg"
                >
                  Back
                </Button>
                <Button
                  onClick={handleConfirm}
                  disabled={!selectedDate || !selectedTime}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold disabled:opacity-50"
                >
                  Confirm
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-4">
              <div className="inline-block p-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <CheckCircle2 className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {isReschedule ? "Appointment Rescheduled!" : "Appointment Scheduled!"}
              </h3>
              <div className="bg-primary/10 rounded-lg p-4 text-left space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{selectedDoctor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{selectedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-foreground">{selectedTime}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
