import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Welcome to a new dimension of home
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Crafted for comfort, designed for life
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Tibeb Furniture blends intricate craftsmanship with timeless design. Each piece is thoughtfully created to
              transform your home into a sanctuary of elegance and comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-mono text-sm">
                EXPLORE COLLECTION
              </Button>
              <Button size="lg" variant="outline" className="font-mono text-sm bg-transparent">
                LEARN MORE
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src="/elegant-modern-living-room-with-minimal-furniture-.jpg"
              alt="Featured furniture collection"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
