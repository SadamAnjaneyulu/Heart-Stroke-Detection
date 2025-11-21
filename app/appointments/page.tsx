"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, Calendar, Clock, MapPin, Phone, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { ScheduleModal } from "@/components/schedule-modal"

export default function Appointments() {
  const [rescheduleOpen, setRescheduleOpen] = useState(false)
  const [scheduleOpen, setScheduleOpen] = useState(false)

  const appointments = [
    {
      doctor: "Dr. Sarah Chen",
      specialty: "Cardiology",
      date: "Dec 15, 2024",
      time: "2:30 PM",
      location: "Medical Center - Room 304",
      phone: "(555) 987-6543",
      status: "upcoming",
    },
    {
      doctor: "Dr. Michael Johnson",
      specialty: "General Practice",
      date: "Dec 22, 2024",
      time: "10:00 AM",
      location: "Downtown Clinic - Room 102",
      phone: "(555) 234-5678",
      status: "upcoming",
    },
    {
      doctor: "Dr. Emily Rodriguez",
      specialty: "Cardiology",
      date: "Nov 28, 2024",
      time: "3:00 PM",
      location: "Medical Center - Room 304",
      phone: "(555) 987-6543",
      status: "completed",
    },
  ]

  const getStatusStyles = (status: string) => {
    return status === "upcoming" ? "bg-blue-500/10 border-blue-500/50" : "bg-green-500/10 border-green-500/50"
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Your Appointments</h1>
          <p className="text-muted-foreground">Manage and schedule your healthcare visits</p>
        </div>

        {/* Upcoming Appointments */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Upcoming Appointments</h2>
          <div className="space-y-4">
            {appointments
              .filter((apt) => apt.status === "upcoming")
              .map((apt, idx) => (
                <Card key={idx} className={`border-2 rounded-2xl p-6 ${getStatusStyles(apt.status)}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{apt.doctor}</h3>
                      <p className="text-sm text-muted-foreground">{apt.specialty}</p>
                    </div>
                    <Button
                      onClick={() => setRescheduleOpen(true)}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm"
                    >
                      Reschedule
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{apt.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{apt.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm col-span-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{apt.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm col-span-2">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>{apt.phone}</span>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* Past Appointments */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Past Appointments</h2>
          <div className="space-y-4">
            {appointments
              .filter((apt) => apt.status === "completed")
              .map((apt, idx) => (
                <Card key={idx} className={`border-2 rounded-2xl p-6 ${getStatusStyles(apt.status)} opacity-75`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{apt.doctor}</h3>
                      <p className="text-sm text-muted-foreground">{apt.specialty}</p>
                      <div className="flex items-center gap-2 mt-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>{apt.date}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="border-border rounded-lg text-sm bg-transparent">
                      View Notes
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>

        {/* Schedule New */}
        <Card className="border border-border bg-card rounded-2xl p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">Need to Schedule?</h3>
              <p className="text-sm text-muted-foreground">Book an appointment with your healthcare provider</p>
            </div>
            <Button
              onClick={() => setScheduleOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg"
            >
              Schedule Now
            </Button>
          </div>
        </Card>
      </div>

      <ScheduleModal isOpen={rescheduleOpen} onClose={() => setRescheduleOpen(false)} isReschedule={true} />
      <ScheduleModal isOpen={scheduleOpen} onClose={() => setScheduleOpen(false)} isReschedule={false} />
    </div>
  )
}
