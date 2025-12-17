export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Contact Us
        </h1>

        <p className="text-muted-foreground mb-10">
          We’d love to hear from you. Reach out to us using the details below.
        </p>

        <div className="space-y-6 text-left bg-background border border-border rounded-xl p-6 shadow-sm">
          <div>
            <h2 className="text-sm font-mono text-muted-foreground mb-1">
              Email
            </h2>
            <p className="text-lg font-medium">
              <a
                href="mailto:info@tibeb.com"
                className="hover:underline"
              >
                info@tibeb.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-sm font-mono text-muted-foreground mb-1">
              Phone
            </h2>
            <p className="text-lg font-medium">
              <a
                href="tel:+251900000000"
                className="hover:underline"
              >
                +251 900 000 000
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-sm font-mono text-muted-foreground mb-1">
              Address
            </h2>
            <p className="text-lg font-medium">
              Addis Ababa, Ethiopia
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
