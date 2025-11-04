import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SymptomChecker } from "@/components/symptom-checker"

export default function SymptomCheckerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Symptom Checker</h1>
            <p className="text-muted-foreground">
              Describe your symptoms and get recommendations for appropriate specialists
            </p>
          </div>

          <SymptomChecker />
        </div>
      </main>
      <Footer />
    </>
  )
}
