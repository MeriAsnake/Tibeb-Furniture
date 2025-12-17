const testimonials = [
  {
    id: 1,
    quote: "Exceptional craftsmanship and timeless beauty",
    author: "Sarah Mitchell",
    role: "Interior Designer",
  },
  {
    id: 2,
    quote: "Investment pieces that elevate every room",
    author: "James Chen",
    role: "Homeowner",
  },
  {
    id: 3,
    quote: "The attention to detail is simply remarkable",
    author: "Emma Rodriguez",
    role: "Architect",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What our clients say</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-lg p-8 space-y-4">
              <div className="text-4xl text-muted-foreground/30">"</div>
              <p className="text-lg font-medium leading-relaxed">{testimonial.quote}</p>
              <div className="pt-4">
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
