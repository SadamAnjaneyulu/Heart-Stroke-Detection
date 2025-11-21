import Link from "next/link"
import { AnimatedHeart } from "@/components/animated-heart"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              HealthVault
            </span>
          </div>
          <Link href="/login">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50">
              Sign In
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Your Health,
              </span>
              <br />
              <span className="text-foreground">Elevated</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-md">
               Premium healthcare management built for precision, privacy, and peace of mind.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/login">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-300 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right - Animated Heart */}
          <div className="relative flex justify-center items-center animate-fade-scale">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl animate-pulse" />
            <AnimatedHeart />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card via-background to-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Luxury Healthcare
            </span>
            <br />
            <span className="text-foreground">Reimagined</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Military-grade encryption and HIPAA compliance for your peace of mind.",
              },
              {
                icon: Zap,
                title: "Real-time Insights",
                description: "AI-powered risk assessment with instant personalized recommendations.",
              },
              {
                icon: Heart,
                title: "Holistic Care",
                description: "Complete patient journey from assessment to medication management.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden animate-slide-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="inline-block mb-4 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Expert Specialists
              </span>
              <br />
              <span className="text-foreground">At Your Service</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our team of highly qualified healthcare professionals ready to provide premium care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Generated%20Image%20November%2009%2C%202025%20-%203_07AM-bGU9jfBD61XYE652PMhOojby0bVWd5.png",
                name: "Dr. KOSARAJU SASHANK",
                specialty: "Neurologist",
                qualification: "MD, Neurology | 15+ years experience",
              },
              {
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AnjaneyuluSadam-pIbgsi2KC3a3cHL9NNi8rLq2CJL6mc.png",
                name: "Dr. Anjaneyulu Sadam",
                specialty: "Cardiologist",
                qualification: "MD, Cardiology | 12+ years experience",
              },
              {
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-m7ccPjieJtnHBsX5jqYmVuUjEh3Cum.png",
                name: "Dr. POLAVARAPU GOPI CHAND",
                specialty: "Gynecologist",
                qualification: "MD, Obstetrics & Gynecology | 14+ years experience",
              },
              {
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_8jxpp78jxpp78jxp%5B1%5D-Xf8H0dqmpPwfj1EsV5CnrNG9D8D8fL.png",
                name: "Dr. ANGOTHU LOKESH NAIK",
                specialty: "General Practitioner",
                qualification: "MD, General Medicine | 10+ years experience",
              },
            ].map((doctor, idx) => (
              <div
                key={idx}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 animate-slide-in hover:shadow-xl hover:shadow-primary/20"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 overflow-hidden">
                  {/* Doctor Image */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <img
                      src={doctor.image || "/placeholder.svg"}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  {/* Doctor Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{doctor.name}</h3>
                    <p className="text-primary font-semibold mb-3">{doctor.specialty}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{doctor.qualification}</p>
                    <button className="w-full px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 border border-primary/30 rounded-3xl p-12 text-center backdrop-blur-sm">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to transform your <span className="text-primary">healthcare</span> experience?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of patients using HealthVault for smarter, safer health management.
          </p>
          <Link href="/login">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            >
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 HealthVault. Premium Healthcare Management.</p>
        </div>
      </footer>
    </div>
  )
}
