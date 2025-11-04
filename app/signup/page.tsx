import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SignupForm } from "@/components/auth-forms"

export default function SignupPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <SignupForm />
          <p className="text-center mt-6 text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline font-semibold">
              Login
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
