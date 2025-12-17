import { Button } from "@/components/ui/button"

export function FeaturedSection() {
  return (
    <section id="explore" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted order-2 lg:order-1">
            <img
              src="/modern-interior-design-living-room-with-elegant-fu.jpg"
              alt="Elegant interior design"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-background/90 backdrop-blur p-6 rounded">
                <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-2">Philosophy</p>
                <h3 className="text-2xl font-bold mb-2">Designing with intention</h3>
                <p className="text-muted-foreground">Every curve, every joint tells a story of dedication</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Craftsmanship</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
                Where tradition meets innovation
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                At Tibeb, we believe furniture should be more than functional. Each piece is a testament to the artisans
                who craft them, combining centuries-old techniques with contemporary design sensibilities.
              </p>
              <p className="leading-relaxed">
                From sustainably sourced materials to meticulous hand-finishing, we ensure every detail reflects our
                commitment to quality and elegance.
              </p>
            </div>

            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-muted rounded-full p-2 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Sustainable Materials</h4>
                  <p className="text-sm text-muted-foreground">
                    Responsibly sourced hardwoods and eco-friendly finishes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-muted rounded-full p-2 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Handcrafted Excellence</h4>
                  <p className="text-sm text-muted-foreground">Each piece individually crafted by skilled artisans</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-muted rounded-full p-2 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Lifetime Quality</h4>
                  <p className="text-sm text-muted-foreground">Built to last generations with proper care</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" variant="outline" className="font-mono text-sm bg-transparent">
                DISCOVER OUR PROCESS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
