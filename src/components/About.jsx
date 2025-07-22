export default function About() {
  return (
    <section id="about" className="py-20 bg-[#fffaf3] text-center px-4 text-[#3e2f1c]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#d77a61]">Our Story</h2>

        <div className="flex flex-col md:flex-row gap-12 items-start animate-fadeIn">
          {/* Left Text Section */}
          <div className="md:w-1/2 text-left space-y-4 font-cabin text-lg leading-relaxed">
            <p>
              In the heart of the city, <strong>Delish Bites</strong> was born in 2010—rooted in the vision of Chef Marco to revive the charm of old-world kitchens.
            </p>
            <p>
              What started as a humble eatery has evolved into a vintage culinary escape, where every dish tells a story of passion, patience, and family heritage.
            </p>
            <p>
              We stay true to our roots by crafting meals from locally sourced ingredients, using time-honored recipes passed down through generations.
            </p>

            {/* Quote Block */}
            <blockquote className="italic text-[#8a4b36] border-l-4 border-[#d77a61] pl-4 mt-6 text-base">
              “Cooking is an art, but the real magic is in the memories it makes.” — Chef Marco
            </blockquote>

            {/* CTA Button */}
            <div className="pt-6">
              <a 
                href="#contact" 
                className="inline-block px-6 py-2 border-2 border-[#d77a61] text-[#d77a61] hover:bg-[#d77a61] hover:text-white rounded-full transition-colors duration-300 font-cabin"
              >
                Meet Our Team
              </a>
            </div>
          </div>

          {/* Right Section: Timeline + Note */}
          <div className="md:w-1/2 text-left space-y-6">
            {/* Timeline */}
            <div>
              <h3 className="text-xl font-serif text-[#d77a61] mb-2">Milestones</h3>
              <div className="space-y-4 border-l-2 border-[#d77a61] pl-6">
                <div>
                  <p className="font-bold text-[#d77a61]">2010</p>
                  <p className="text-sm">Opened our first small eatery in Old Town.</p>
                </div>
                <div>
                  <p className="font-bold text-[#d77a61]">2015</p>
                  <p className="text-sm">Awarded Best Local Cuisine by City Food Mag.</p>
                </div>
                <div>
                  <p className="font-bold text-[#d77a61]">2023</p>
                  <p className="text-sm">Expanded with seasonal outdoor dining experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
