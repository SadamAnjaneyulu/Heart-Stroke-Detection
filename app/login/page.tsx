"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedHeart } from "@/components/animated-heart"
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate API call (replace with your real login logic)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      router.push("/dashboard")
    } catch (error) {
      console.error("Login error:", error)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden relative">
      {/* Animated background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-secondary/10 to-primary/10 blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Animated Heart */}
          <div className="hidden lg:flex justify-center animate-fade-scale">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl" />
              <AnimatedHeart />
            </div>
          </div>

          {/* Right - Login Form */}
          <div className="w-full max-w-md mx-auto animate-slide-in">
            <div className="bg-card border border-border rounded-3xl p-8 md:p-10 backdrop-blur-sm shadow-2xl">
              
              {/* Header */}
              <div className="mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Welcome Back
                </h1>
                <p className="text-muted-foreground">
                  Log in to your HeartVault account
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-foreground">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 py-3 bg-input border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-semibold text-foreground">
                      Password
                    </label>
                    <Link
                      href="#"
                      className="text-xs text-primary hover:text-primary/80 font-medium"
                    >
                      Forgot?
                    </Link>
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-12 py-3 bg-input border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-300 text-foreground placeholder-muted-foreground"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
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
                      Signing in...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Sign In
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center gap-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground font-medium">
                  OR
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="border-2 border-border hover:border-primary hover:bg-primary/5 rounded-xl font-semibold transition-all duration-300 bg-transparent"
                >
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-border hover:border-primary hover:bg-primary/5 rounded-xl font-semibold transition-all duration-300 bg-transparent"
                >
                  Apple
                </Button>
              </div>

              {/* Sign Up Link */}
              <p className="text-center text-sm text-muted-foreground mt-6">
                Don’t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-primary hover:text-primary/80 font-bold"
                >
                  Sign up
                </Link>
              </p>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 text-center">
              <p className="text-xs text-muted-foreground mb-3">
                Trusted by healthcare professionals
              </p>
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
  )
}
