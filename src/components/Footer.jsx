export default function Footer() {
  return (
    <footer className="bg-[#3e2f1c] text-[#f2e8df] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-pacifico text-[#fdd9a0] mb-2">Delish Bites</h3>
          <p className="text-sm font-cabin text-[#e8dccd]">
            &copy; {new Date().getFullYear()} Delish Bites. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-6">
          <a href="#about" className="hover:underline text-[#fdd9a0] font-cabin">About</a>
          <a href="#menu" className="hover:underline text-[#fdd9a0] font-cabin">Menu</a>
          <a href="#contact" className="hover:underline text-[#fdd9a0] font-cabin">Contact</a>
          <a href="#gallery" className="hover:underline text-[#fdd9a0] font-cabin">Gallery</a>
        </div>
      </div>
    </footer>
  );
}
