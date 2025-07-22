import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);

  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate('/full-menu');
  };

  const handleSubmit = () => {
    const selectedDate = new Date(date);
    const selectedTime = time;
    const currentDate = new Date();
    const selectedHour = parseInt(selectedTime.split(':')[0]);

    if (selectedDate < new Date(currentDate.toDateString())) {
      alert('Please select a valid date (today or later)');
      return;
    }

    if (selectedHour < 9 || selectedHour > 22) {
      alert('Please choose a time between 9:00 AM and 10:00 PM');
      return;
    }

    alert(`Table booked for ${people} people on ${date} at ${time}`);
    setShowModal(false);
  };

  const minDate = new Date().toISOString().split('T')[0]; // today in YYYY-MM-DD

  return (
    <>
      <header className="bg-[#3e2f1c] shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-[Pacifico] text-[#f2e8df] tracking-wider">
            Delish Bites
          </h1>
          <nav className="space-x-6 text-md font-medium text-[#f2e8df] hidden md:flex">
            <a href="#about" className="hover:text-[#d77a61] transition-colors duration-300">About</a>
            <a href="#menu" className="hover:text-[#d77a61] transition-colors duration-300">Menu</a>
            <a href="#specials" className="hover:text-[#d77a61] transition-colors duration-300">Specials</a>
            <a href="#gallery" className="hover:text-[#d77a61] transition-colors duration-300">Gallery</a>
            <a href="#contact" className="hover:text-[#d77a61] transition-colors duration-300">Contact</a>
          </nav>
          <div className="flex gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#f2e8df] text-[#3e2f1c] px-4 py-2 rounded-full hover:bg-[#e0cfc0] transition-colors duration-300"
            >
              Book a Table
            </button>
            <button
              onClick={handleOrderClick}
              className="bg-[#d77a61] text-white px-4 py-2 rounded-full hover:bg-[#bb614a] transition-colors duration-300"
            >
              Order Online
            </button>
          </div>
        </div>
      </header>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-[#3e2f1c]">Book a Table</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[#3e2f1c] mb-1">Date:</label>
                <input
                  type="date"
                  min={minDate}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border px-3 py-2 rounded-md text-amber-950"
                />
              </div>
              <div>
                <label className="block text-sm text-[#3e2f1c] mb-1">Time:</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full border px-3 py-2 rounded-md text-amber-900"
                />
                <p className="text-xs text-gray-500 mt-1">Between 09:00 and 22:00</p>
              </div>
              <div>
                <label className="block text-sm text-[#3e2f1c] mb-1">No. of People:</label>
                <select
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="w-full border px-3 py-2 rounded-md text-amber-800"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-[#3e2f1c] text-white py-2 rounded-md hover:bg-[#5b3d28] transition"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
