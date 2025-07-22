import { useRef, useEffect } from 'react';
import pasta from '../assets/images/pasta.jpg';
import truffle from '../assets/images/truffle.jpg';
import avocado from '../assets/images/avocado.jpg';
import pizza from '../assets/images/pizza.jpg';
import strawberry from '../assets/images/strawberry.jpg';
import salad from '../assets/images/salad.jpg';
import tiramisu from '../assets/images/tiramisu.jpg';
import pancake from '../assets/images/pancake.jpg';

const galleryItems = [
  {
    src: pasta,
    alt: "Signature Dish",
    category: "Main Course",
    title: "Chef's Special Pasta"
  },
  {
    src: truffle,
    alt: "Appetizer",
    category: "Starter",
    title: "Truffle Arancini"
  },
  {
    src: avocado,
    alt: "Breakfast",
    category: "Brunch",
    title: "Avocado Toast"
  },
  {
    src: pizza,
    alt: "Main Course",
    category: "Dinner",
    title: "Gourmet Pizza"
  },
  {
    src: strawberry,
    alt: "Dessert",
    category: "Sweet",
    title: "Strawberry Cheesecake"
  },
  {
    src: salad,
    alt: "Salad",
    category: "Healthy",
    title: "Superfood Salad"
  },
  {
    src: tiramisu,
    alt: "Dessert",
    category: "Main Course",
    title: "Tiramisu Burst"
  },
  {
    src: pancake,
    alt: "Breakfast",
    category: "Morning",
    title: "Pancake Stack"
  }
];

export default function Gallery() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationFrame;
    let position = 0;
    let paused = false;

    const scroll = () => {
      if (!paused) {
        position -= 0.5;
        marquee.style.transform = `translateX(${position}px)`;
        if (Math.abs(position) >= marquee.scrollWidth / 2) {
          position = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    const pause = () => (paused = true);
    const resume = () => (paused = false);

    marquee.addEventListener("mouseenter", pause);
    marquee.addEventListener("mouseleave", resume);

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      marquee.removeEventListener("mouseenter", pause);
      marquee.removeEventListener("mouseleave", resume);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section id="gallery" className="py-20 bg-[#fefaf6] px-4 text-[#3e2f1c] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-pacifico text-center text-[#d77a61] mb-4">
          Our Gallery
        </h2>
        <p className="max-w-2xl mx-auto text-center font-cabin text-lg text-[#5e4b3c] mb-12">
          A visual feast of our culinary creations
        </p>

        <div className="relative overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex w-max gap-6 will-change-transform"
          >
            {[...galleryItems, ...galleryItems].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl w-64 h-64 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3e2f1c]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[#f4d1a6] text-xs uppercase tracking-wide font-semibold">{item.category}</span>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
