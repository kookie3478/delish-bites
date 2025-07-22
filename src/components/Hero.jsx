import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center text-center text-white">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <div
          className="bg-fade1"
          style={{ backgroundImage: "url('/hero1.jpg')" }}
        ></div>
        <div
          className="bg-fade2"
          style={{ backgroundImage: "url('/hero2.jpg')" }}
        ></div>
        <div
          className="bg-fade3"
          style={{ backgroundImage: "url('/hero3.jpg')" }}
        ></div>
        <div
          className="bg-fade4"
          style={{ backgroundImage: "url('/hero4.jpg')" }}
        ></div>
        <div
          className="bg-fade5"
          style={{ backgroundImage: "url('/hero5.jpg')" }}
        ></div>
      </div>

      {/* Overlay to slightly darken background */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Text Content */}
      <div className="z-20 px-6 md:px-10">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-5xl md:text-6xl font-[Pacifico] mb-6"
        >
          Welcome to Delish Bites
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="text-lg md:text-xl font-[Cabin] max-w-2xl mx-auto"
        >
          Savor the taste of tradition with our handcrafted dishes and cozy ambiance.
        </p>
      </div>
    </section>
  );
}
