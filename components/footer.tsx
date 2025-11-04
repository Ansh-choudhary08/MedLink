export function Footer() {
  return (
    <footer className="border-t border-border bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-lg text-foreground">MedLink</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted platform for finding and booking healthcare professionals.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-accent smooth-transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/doctors" className="hover:text-accent smooth-transition">
                  Find Doctors
                </a>
              </li>
              <li>
                <a href="/symptoms" className="hover:text-accent smooth-transition">
                  Symptoms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent smooth-transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 MedLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
