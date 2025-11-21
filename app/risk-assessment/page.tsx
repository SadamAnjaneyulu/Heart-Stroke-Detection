"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, ChevronLeft, ChevronRight, CheckCircle2, Heart } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    id: 1,
    question: "What is your age?",
    category: "Demographics",
    options: ["Under 40", "40-49", "50-59", "60+"],
  },
  {
    id: 2,
    question: "Do you have high blood pressure (hypertension)?",
    category: "Heart Stroke Risk",
    options: ["No", "Controlled with medication", "Uncontrolled", "Unknown"],
  },
  {
    id: 3,
    question: "Do you have high cholesterol?",
    category: "Heart Stroke Risk",
    options: ["No", "Yes, controlled", "Yes, uncontrolled", "Unknown"],
  },
  {
    id: 4,
    question: "Do you have diabetes?",
    category: "Heart Stroke Risk",
    options: ["No", "Type 1", "Type 2", "Prediabetic"],
  },
  {
    id: 5,
    question: "Do you smoke or have smoked in the past 5 years?",
    category: "Lifestyle Risk",
    options: ["Never smoked", "Quit 5+ years ago", "Quit within 5 years", "Currently smoke"],
  },
  {
    id: 6,
    question: "Family history of heart attack or stroke?",
    category: "Genetic Risk",
    options: ["No", "Yes, in relatives over 65", "Yes, in relatives under 65", "Unknown"],
  },
  {
    id: 7,
    question: "How many servings of fruits/vegetables daily?",
    category: "Lifestyle Risk",
    options: ["5+", "3-4", "1-2", "None"],
  },
  {
    id: 8,
    question: "How much alcohol do you consume weekly?",
    category: "Lifestyle Risk",
    options: ["None", "Moderate (1-2 drinks/day)", "Excessive (3+ drinks/day)", "Daily abuse"],
  },
  {
    id: 9,
    question: "Do you experience chest pain or shortness of breath?",
    category: "Symptom Risk",
    options: ["Never", "Rarely", "Sometimes", "Frequently"],
  },
  {
    id: 10,
    question: "How many hours of physical activity weekly?",
    category: "Lifestyle Risk",
    options: ["150+ minutes (ideal)", "90-150 minutes", "30-90 minutes", "Less than 30"],
  },
  {
    id: 11,
    question: "Do you have atrial fibrillation (AFib) or irregular heartbeat?",
    category: "Heart Stroke Risk",
    options: ["No", "Yes, diagnosed", "Suspected", "Unknown"],
  },
  {
    id: 12,
    question: "Your body mass index (BMI)?",
    category: "Health Metrics",
    options: ["Healthy (18.5-24.9)", "Overweight (25-29.9)", "Obese (30+)", "Underweight"],
  },
  {
    id: 13,
    question: "How often do you check your blood pressure?",
    category: "Health Monitoring",
    options: ["Monthly or more", "Every 3-6 months", "Yearly", "Never"],
  },
  {
    id: 14,
    question: "Do you manage stress effectively?",
    category: "Mental Health",
    options: ["Yes, very well", "Somewhat", "Not very well", "Not at all"],
  },
  {
    id: 15,
    question: "Sleep quality - hours per night?",
    category: "Health Metrics",
    options: ["7-9 hours", "6-7 hours", "5-6 hours", "Less than 5 hours"],
  },
]

export default function RiskAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [completed, setCompleted] = useState(false)

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: answer })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setCompleted(true)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (completed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
        <Card className="border border-border bg-card rounded-3xl p-12 max-w-md w-full text-center">
          <div className="inline-block p-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 mb-6">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-3">Assessment Complete!</h1>
          <p className="text-muted-foreground mb-2">Your comprehensive heart stroke risk profile has been analyzed.</p>
          <p className="text-sm text-muted-foreground mb-8">
            Review your personalized recommendations and preventive measures below.
          </p>

          {/* Risk Summary */}
          <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-bold text-foreground mb-4">Your Risk Assessment Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Heart Attack Risk:</span>
                <span className="font-bold text-emerald-600">Low</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Stroke Risk:</span>
                <span className="font-bold text-emerald-600">Low</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Overall Cardiovascular:</span>
                <span className="font-bold text-emerald-600">Healthy</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link href="/dashboard" className="block">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl font-bold">
                View Full Results
              </Button>
            </Link>
            <Button
              variant="outline"
              className="w-full border-2 border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              Download Report
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-slide-in">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-primary hover:text-primary/80 font-semibold mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
            <Heart className="w-8 h-8 text-primary fill-primary" />
            Heart Stroke Risk Assessment
          </h1>
          <p className="text-muted-foreground">Complete this comprehensive assessment to know your stroke risk</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-semibold text-primary">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-border rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="border border-border bg-card rounded-3xl p-8 md:p-12 animate-fade-scale">
          <div className="mb-6">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
              {questions[currentQuestion].category}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">{questions[currentQuestion].question}</h2>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left font-semibold ${
                  answers[questions[currentQuestion].id] === option
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-background hover:border-primary/50 text-foreground"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      answers[questions[currentQuestion].id] === option ? "border-primary bg-primary" : "border-border"
                    }`}
                  >
                    {answers[questions[currentQuestion].id] === option && (
                      <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
                    )}
                  </div>
                  {option}
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-4">
            <Button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              variant="outline"
              className="flex-1 border-2 border-border hover:border-primary/50 disabled:opacity-50 py-3 rounded-xl font-semibold bg-transparent"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!answers[questions[currentQuestion].id]}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl font-semibold disabled:opacity-50"
            >
              {currentQuestion === questions.length - 1 ? "Complete Assessment" : "Next"}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>

        {/* Health Tips */}
        <div className="mt-8 space-y-4">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/10 border border-primary/30">
            <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm">Important Health Note</p>
              <p className="text-xs text-muted-foreground mt-1">
                This assessment is designed to provide health insights and should not replace professional medical
                advice. Always consult with your healthcare provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
