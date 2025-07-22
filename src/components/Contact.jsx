export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#fffaf3] px-4 text-[#3e2f1c]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-pacifico text-[#d77a61] mb-4">Get in Touch</h2>
        <p className="text-lg text-[#5e4b3c] font-cabin mb-8">
          We'd love to hear from you. Whether it's a reservation, question, or just to say hello!
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left bg-white p-8 rounded-lg shadow-lg border border-[#f2e8df] font-cabin">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="font-semibold text-[#3e2f1c]">Name</label>
            <input
              type="text"
              id="name"
              className="border border-[#e3d7c6] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d77a61] bg-[#fdfaf7]"
              placeholder="Your full name"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-semibold text-[#3e2f1c]">Email</label>
            <input
              type="email"
              id="email"
              className="border border-[#e3d7c6] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d77a61] bg-[#fdfaf7]"
              placeholder="you@example.com"
            />
          </div>
          <div className="md:col-span-2 flex flex-col space-y-2">
            <label htmlFor="message" className="font-semibold text-[#3e2f1c]">Message</label>
            <textarea
              id="message"
              rows="5"
              className="border border-[#e3d7c6] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d77a61] bg-[#fdfaf7]"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-[#d77a61] text-white px-8 py-3 rounded-full hover:bg-[#c46751] transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
