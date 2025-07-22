export default function Testimonials() {
  const testimonials = [
    {
      name: "Soumyabrata S.",
      comment: "Absolutely divine! The atmosphere was warm and welcoming. The pasta was perfection!",
    },
    {
      name: "James K.",
      comment: "A hidden gem! The vintage charm and exquisite flavors made it unforgettable.",
    },
    {
      name: "Ayesha M.",
      comment: "Every bite was a delight. From starters to dessert, it was a beautiful experience.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#fffaf3] px-4 text-[#3e2f1c]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-pacifico text-[#d77a61] mb-4">What Our Guests Say</h2>
        <p className="font-cabin text-lg text-[#5e4b3c] mb-12">
          We cherish every smile we serve
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-[#f1e6d6] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
            >
              <p className="text-[#5e4b3c] font-cabin italic mb-4">
                “{testimonial.comment}”
              </p>
              <h4 className="font-bold text-[#d77a61] font-cabin">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
