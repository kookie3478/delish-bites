import { Link } from "react-router-dom";

function generateImagePath(category, itemName) {
  return `/images/${category.toLowerCase()}/${itemName}.jpg`;
}


const previewCategories = [
  { category: "Starters", itemIndex: 0 },
  { category: "Main-Courses", itemIndex: 0 },
  { category: "Desserts", itemIndex: 0 },
  { category: "Indian", itemIndex: 0 },
  { category: "Chinese", itemIndex: 0 },
  { category: "Beverages", itemIndex: 0 },
];

const fullMenu = [
  {
    category: "Starters",
    items: [
      { name: "Spicy Chicken Wings", price: "₹220", description: "Crispy wings tossed in our signature spicy sauce" },
      { name: "Bruschetta", price: "$9", description: "Toasted bread with tomatoes, garlic, basil" },
      { name: "Calamari", price: "$14", description: "Fried squid with lemon aioli" },
    ],
  },
  {
    category: "Main-Courses",
    items: [
      { name: "Grilled Lemon Herb Chicken", price: "₹360", description: "Wood-fired pizza with seasonal vegetables" },
      { name: "Classic Burger", price: "$16", description: "Angus beef patty with cheddar and lettuce" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Classic Tiramisu", price: "₹180", description: "Classic Italian dessert with espresso-soaked ladyfingers" },
      { name: "Lava Cake", price: "$9", description: "Molten chocolate cake with ice cream" },
    ],
  },
  {
    category: "Indian",
    items: [
      { name: "Paneer Butter Masala", price: "₹240", description: "Cottage cheese in creamy tomato gravy" },
    ],
  },
  {
    category: "Chinese",
    items: [
      { name: "Veg Hakka Noodles", price: "₹220", description: "Stir-fried noodles with vegetables" },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Mango Lassi", price: "₹100", description: "Sweet mango yogurt smoothie" },
    ],
  },
];

export default function Menu() {
  return (
    <section className="py-20 bg-[#fffaf3] text-[#3e2f1c] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-pacifico mb-14 text-center text-[#d77a61]">
          Our Menu
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewCategories.map(({ category, itemIndex }, i) => {
            const section = fullMenu.find((s) => s.category === category);
            const item = section?.items[itemIndex];

            if (!item) return null;

            return (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
              >
                <img
                  src={generateImagePath(category, item.name)}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#d77a61]">{item.name}</h3>
                  <p className="text-sm mt-1">{item.description}</p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-base font-semibold">{item.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link to="/full-menu">
            <button className="bg-[#d77a61] hover:bg-[#c96552] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300">
              View Full Menu
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
