"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedHeart } from "@/components/animated-heart"
import { ArrowRight, Eye, EyeOff, Lock, Mail, User, CheckCircle2 } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSuccess(true)

      // Redirect to dashboard after success
      setTimeout(() => {
        router.push("/dashboard")
      }, 1500)
    } catch (err) {
      // No error handling, since removed
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary/10 to-primary/10 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Animated Heart */}
          <div className="hidden lg:flex justify-center animate-fade-scale">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl" />
              <AnimatedHeart />
            </div>
          </div>

          {/* Right Signup Form */}
          <div className="w-full max-w-md mx-auto animate-slide-in">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-2xl">
              
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {success ? "Welcome!" : "Create Account"}
                </h1>
                <p className="text-muted-foreground">
                  {success ? "Your account is ready. Redirecting..." : "Join HeartVault for premium healthcare"}
                </p>
              </div>

              {/* Success Message */}
              {success ? (
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <div className="relative w-24 h-24">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-xl animate-pulse" />
                      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-scale">
                        <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-foreground font-semibold">Account created successfully!</p>
                  <p className="text-center text-sm text-muted-foreground">Redirecting to dashboard...</p>
                </div>
              ) : (
                <>
                  {/* Form */}
                  <form onSubmit={handleSignup} className="space-y-5">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-foreground">Full Name</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                          type="text"
                          name="fullName"
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="pl-12 py-3 bg-input border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-foreground">Email Address</label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <Input
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-12 py-3 bg-input border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-foreground">Password</label>
                      <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full pl-12 pr-12 py-3 bg-input border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 text-foreground placeholder-muted-foreground"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-foreground">Confirm Password</label>
                      <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                        <input
                          type={showConfirm ? "text" : "password"}
                          name="confirmPassword"
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full pl-12 pr-12 py-3 bg-input border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 text-foreground placeholder-muted-foreground"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirm(!showConfirm)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 mt-8"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center">
                          <span className="animate-spin rounded-full h-5 w-5 border-2 border-primary-foreground/30 border-t-primary-foreground mr-2" />
                          Creating account...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Create Account
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </span>
                      )}
                    </Button>
                  </form>

                  {/* Login Link */}
                  <p className="text-center text-sm text-muted-foreground mt-6">
                    Already have an account?{" "}
                    <Link href="/login" className="text-primary hover:text-primary/80 font-bold">
                      Sign in
                    </Link>
                  </p>
                </>
              )}

              {/* Trust Badge */}
              <div className="mt-8 text-center">
                <p className="text-xs text-muted-foreground mb-3">Trusted by healthcare professionals</p>
                <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <span>🔒 HIPAA Compliant</span>
                  <span>•</span>
                  <span>🛡️ ISO 27001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
