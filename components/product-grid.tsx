import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "Oslo Lounge Chair",
    category: "Seating",
    description: "Ergonomic design meets Scandinavian elegance. Crafted from solid oak with premium upholstery.",
    price: "$1,299",
    image: "/modern-scandinavian-lounge-chair-in-oak-wood.jpg",
  },
  {
    id: 2,
    name: "Heritage Dining Table",
    category: "Tables",
    description: "A statement piece for gathering. Solid walnut construction with hand-finished details.",
    price: "$2,499",
    image: "/elegant-walnut-wood-dining-table-minimal-design.jpg",
  },
  {
    id: 3,
    name: "Minimalist Sofa",
    category: "Seating",
    description: "Clean lines and exceptional comfort. Modular design with sustainable materials.",
    price: "$3,199",
    image: "/minimal-modern-sofa-beige-fabric-clean-lines.jpg",
  },
  {
    id: 4,
    name: "Studio Bookshelf",
    category: "Storage",
    description: "Form meets function in this architectural piece. Adjustable shelving in natural ash.",
    price: "$899",
    image: "/modern-minimal-bookshelf-natural-wood-architectura.jpg",
  },
  {
    id: 5,
    name: "Copenhagen Bed Frame",
    category: "Bedroom",
    description: "Elevated simplicity for restful nights. Solid construction with integrated headboard.",
    price: "$1,899",
    image: "/minimal-modern-bed-frame-natural-wood-headboard.jpg",
  },
  {
    id: 6,
    name: "Artisan Coffee Table",
    category: "Tables",
    description: "Handcrafted centerpiece with organic edges. Each piece uniquely marked by nature.",
    price: "$799",
    image: "/organic-edge-coffee-table-natural-wood-artisan.jpg",
  },
]

export function ProductGrid() {
  return (
    <section id="shop" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover pieces that define spaces and inspire moments
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-border hover:shadow-lg transition-shadow">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <div className="space-y-1">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{product.category}</p>
                  <h3 className="text-xl font-semibold tracking-tight">{product.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                <div className="pt-2">
                  <p className="text-lg font-semibold">{product.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
