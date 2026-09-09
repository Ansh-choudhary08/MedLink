import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HealthChatbotRedesigned } from "@/components/health-chatbot-redesigned"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

export default function ChatbotPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                <MessageCircle size={28} className="text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Health Assistant</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Chat with our AI-powered health assistant to get instant answers to your health questions and guidance on
              symptoms.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Chatbot */}
            <div className="h-96 md:h-[600px] mb-8 animate-fade-in">
              <HealthChatbotRedesigned />
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl border border-border bg-timberwolf/5 hover-shadow smooth-transition">
                <h3 className="font-bold text-lg mb-3 text-foreground">Quick Access</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Need more detailed analysis? Check our dedicated symptom checker for comprehensive health assessments.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-border hover:bg-muted w-full justify-between bg-transparent"
                >
                  <Link href="/symptoms">
                    Go to Symptom Checker
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-accent/10 hover-shadow smooth-transition">
                <h3 className="font-bold text-lg mb-3 text-foreground">Book Appointment</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Ready to see a doctor? Browse our network of qualified healthcare professionals and book your
                  appointment.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 w-full justify-between">
                  <Link href="/doctors">
                    Find a Doctor
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
