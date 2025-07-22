import { useState } from 'react';
import { useCart } from '../context/CartContext';

const menuCategories = [
  {
    category: "Starters",
    items: [
      { name: "Spicy Chicken Wings", price: "₹220", description: "Crispy wings tossed in spicy house sauce" },
      { name: "Bruschetta", price: "₹180", description: "Toasted bread with tomatoes, garlic, and basil" },
      { name: "Stuffed Mushroom Caps", price: "₹190", description: "Mushrooms filled with creamy cheese and herbs" },
      { name: "Veg Cutlets", price: "₹160", description: "Golden-fried patties with mixed vegetables and spices" },
      { name: "Cheese Garlic Bread", price: "₹150", description: "Toasted baguette with cheesy garlic topping" },
      { name: "Paneer Tikka", price: "₹210", description: "Marinated cottage cheese cubes grilled to perfection" },
      { name: "Thai Spring Rolls", price: "₹180", description: "Crispy rolls with a veggie filling and sweet chili dip" },
      { name: "Chicken Satay", price: "₹240", description: "Grilled chicken skewers served with peanut sauce" },
      { name: "Deviled Eggs", price: "₹140", description: "Classic creamy deviled eggs with paprika" },
      { name: "Corn Cheese Balls", price: "₹170", description: "Fried corn balls with a cheesy center" },
      { name: "Fish Fingers", price: "₹230", description: "Crumb-coated fish strips served with tartar sauce" },
      { name: "Potato Skins", price: "₹160", description: "Loaded potato skins with sour cream and bacon bits" },
      { name: "Hummus Platter", price: "₹200", description: "Creamy hummus with pita, olives & veggies" },
      { name: "Tandoori Broccoli", price: "₹180", description: "Broccoli florets marinated and grilled in tandoor" },
      { name: "Nachos Supreme", price: "₹200", description: "Nachos topped with salsa, cheese, jalapeños & guac" },
    ],
  },
  {
    category: "Main-Courses",
    items: [
      { name: "Grilled Lemon Herb Chicken", price: "₹360", description: "Grilled chicken breast in a lemon herb marinade" },
      { name: "Creamy Alfredo Pasta", price: "₹320", description: "Fettuccine tossed in a rich Alfredo sauce" },
      { name: "Classic Lamb Roast", price: "₹450", description: "Slow-roasted lamb with garlic and rosemary" },
      { name: "Baked Mac & Cheese", price: "₹290", description: "Macaroni baked with a creamy cheese sauce" },
      { name: "Paneer Lababdar", price: "₹310", description: "North Indian cottage cheese curry in rich tomato gravy" },
      { name: "Chicken Stroganoff", price: "₹370", description: "Russian-style creamy chicken served with rice" },
      { name: "Thai Green Curry", price: "₹330", description: "Veggies in coconut green curry with jasmine rice" },
      { name: "Mushroom Risotto", price: "₹320", description: "Creamy risotto with sautéed mushrooms and herbs" },
      { name: "Stuffed Bell Peppers", price: "₹300", description: "Baked bell peppers filled with spiced rice & veggies" },
      { name: "Pesto Pasta", price: "₹290", description: "Pasta tossed in basil pesto and sun-dried tomatoes" },
      { name: "BBQ Baby Back Ribs", price: "₹440", description: "Juicy ribs glazed in smoky BBQ sauce" },
      { name: "Grilled Salmon", price: "₹420", description: "Salmon fillet with dill sauce and sautéed veggies" },
      { name: "Mutton Rogan Josh", price: "₹370", description: "Kashmiri spiced mutton curry with saffron" },
      { name: "Lasagna al Forno", price: "₹340", description: "Layered baked lasagna with meat and cheese" },
      { name: "Spinach Ricotta Cannelloni", price: "₹310", description: "Cannelloni tubes stuffed with spinach and ricotta" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Lava Cake", price: "₹160", description: "Warm chocolate cake with molten center" },
      { name: "Classic Tiramisu", price: "₹180", description: "Coffee-soaked ladyfingers with mascarpone" },
      { name: "Apple Pie", price: "₹150", description: "Classic apple pie served with vanilla ice cream" },
      { name: "Gulab Jamun Cheesecake", price: "₹200", description: "Fusion cheesecake with gulab jamun topping" },
      { name: "Crème Brûlée", price: "₹180", description: "Rich custard topped with caramelized sugar" },
      { name: "Rasmalai Tart", price: "₹200", description: "Tart filled with creamy rasmalai fusion" },
      { name: "Red Velvet Cupcake", price: "₹130", description: "Soft red velvet cake with cream cheese frosting" },
      { name: "Banoffee Pie", price: "₹160", description: "Banana, toffee & cream on a biscuit base" },
      { name: "Mango Mousse", price: "₹140", description: "Light and airy mango-flavored mousse" },
      { name: "Berry Baked Yogurt", price: "₹160", description: "Silky baked yogurt with berry compote" },
      { name: "Panna Cotta", price: "₹160", description: "Creamy Italian dessert with fruit topping" },
      { name: "Belgian Waffles", price: "₹180", description: "Crispy waffles with maple syrup" },
      { name: "Carrot Walnut Cake", price: "₹150", description: "Moist carrot cake with crushed walnuts" },
      { name: "Kesar Pista Kulfi", price: "₹140", description: "Traditional Indian frozen dessert with saffron & pistachios" },
      { name: "Mocha Brownie", price: "₹160", description: "Rich chocolate brownie with mocha glaze" },
    ],
  },
  {
    category: "Chinese",
    items: [
      { name: "Veg Hakka Noodles", price: "₹220", description: "Stir-fried noodles with mixed vegetables" },
      { name: "Chicken Manchurian", price: "₹260", description: "Fried chicken balls in spicy Manchurian sauce" },
      { name: "Schezwan Fried Rice", price: "₹230", description: "Spicy rice with vegetables and Schezwan sauce" },
      { name: "Chilli Paneer", price: "₹240", description: "Paneer tossed in chili garlic sauce" },
      { name: "Veg Spring Rolls", price: "₹210", description: "Crispy rolls with mixed vegetable filling" },
      { name: "Kung Pao Chicken", price: "₹260", description: "Chicken with peanuts and dried chilies in sauce" },
      { name: "Hot & Sour Soup", price: "₹170", description: "Spicy and tangy soup with vegetables" },
      { name: "American Chopsuey", price: "₹240", description: "Crispy noodles topped with sweet-sour sauce" },
      { name: "Honey Chilli Potatoes", price: "₹200", description: "Crispy fried potatoes glazed in honey chili sauce" },
      { name: "Chicken Lollipop", price: "₹230", description: "Frenched chicken wings with spicy dip" },
      { name: "Stir-fried Tofu", price: "₹200", description: "Tofu with seasonal vegetables in soy sauce" },
      { name: "Dragon Chicken", price: "₹260", description: "Spicy Indo-Chinese style chicken strips" },
      { name: "Veg Momos", price: "₹190", description: "Steamed dumplings filled with vegetables" },
      { name: "Garlic Butter Noodles", price: "₹200", description: "Noodles sautéed in garlic butter sauce" },
      { name: "Sweet Corn Soup", price: "₹170", description: "Classic creamy corn soup with veggies/chicken" },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Cold Coffee", price: "₹120", description: "Chilled coffee with milk and ice cream" },
      { name: "Masala Lemonade", price: "₹100", description: "Lemonade with a spicy Indian twist" },
      { name: "Iced Hibiscus Tea", price: "₹110", description: "Floral tea served cold with a citrusy zing" },
      { name: "Fresh Lime Soda", price: "₹80", description: "Sweet or salty soda with fresh lime" },
      { name: "Mango Lassi", price: "₹100", description: "Sweet mango and yogurt smoothie" },
      { name: "Watermelon Mint Cooler", price: "₹100", description: "Refreshing blend of watermelon & mint" },
      { name: "Filter Coffee", price: "₹70", description: "South Indian strong brewed coffee" },
      { name: "Rose Milk", price: "₹80", description: "Chilled milk with rose syrup" },
      { name: "Virgin Mojito", price: "₹110", description: "Minty lime soda with crushed ice" },
      { name: "Strawberry Smoothie", price: "₹120", description: "Fresh strawberries blended with yogurt" },
      { name: "Blue Lagoon", price: "₹110", description: "Blue curacao-flavored fizzy mocktail" },
      { name: "Classic Iced Tea", price: "₹80", description: "Black tea served chilled with lemon" },
      { name: "Jaljeera", price: "₹70", description: "Spiced Indian digestive drink" },
      { name: "Cold Brew Vanilla", price: "₹100", description: "Cold brew topped with vanilla foam" },
      { name: "Hot Chocolate", price: "₹100", description: "Rich cocoa drink with marshmallow topping" },
    ],
  },
  {
    category: "Indian",
    items: [
      { name: "Paneer Butter Masala", price: "₹240", description: "Creamy tomato-based paneer curry" },
      { name: "Chicken Biryani", price: "₹280", description: "Layered rice with chicken and spices" },
      { name: "Dal Makhani", price: "₹200", description: "Slow-cooked black lentils in butter" },
      { name: "Butter Naan", price: "₹40", description: "Soft flatbread brushed with butter" },
      { name: "Laal Maas", price: "₹310", description: "Spicy Rajasthani mutton curry" },
      { name: "Palak Paneer", price: "₹220", description: "Paneer in spinach gravy" },
      { name: "Chole Bhature", price: "₹180", description: "Spicy chickpeas with fried bread" },
      { name: "Hyderabadi Biryani", price: "₹300", description: "Dum-style aromatic biryani" },
      { name: "Baingan Bharta", price: "₹190", description: "Smoked eggplant mashed with spices" },
      { name: "Keema Pav", price: "₹220", description: "Minced mutton served with toasted pav" },
      { name: "Goan Fish Curry", price: "₹260", description: "Tangy coconut fish curry" },
      { name: "Kadhai Chicken", price: "₹250", description: "Chicken in spicy kadhai masala" },
      { name: "Veg Pulao & Raita", price: "₹180", description: "Fragrant rice with mixed vegetables" },
      { name: "Masala Dosa", price: "₹140", description: "Crisp dosa stuffed with spiced potato" },
      { name: "Aloo Paratha", price: "₹130", description: "Stuffed flatbread served with curd & pickle" },
    ],
  }
];

function generateImagePath(category, itemName) {
  return `/images/${category.toLowerCase()}/${itemName}.jpg`;
}

function OrderModal({ item, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-[#1a120b] rounded-xl p-6 w-[90%] max-w-md text-[#3e2f1c] dark:text-[#fefaf3]">
        <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
        <img
          src={generateImagePath(item.category, item.name)}
          alt={item.name}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <p className="mb-2">{item.description}</p>
        <div className="flex items-center gap-4 mb-4">
          <label className="font-medium">Quantity:</label>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 bg-[#d77a61] text-white rounded"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 bg-[#d77a61] text-white rounded"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onAddToCart(item, quantity);
              onClose();
            }}
            className="px-4 py-2 bg-[#d77a61] text-white rounded hover:bg-[#c6634e]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FullMenu() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((i) => i.name === item.name);
      if (found) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
    setShowCart(true);
    setShowSummary(false);
  };

  const updateQuantity = (name, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  const totalAmount = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="bg-[#fffaf3] text-[#3e2f1c] py-20 px-6 relative">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-5xl font-serif text-center text-[#d77a61] mb-12">
          Full Menu
        </h1>

        {menuCategories.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-3xl font-semibold text-[#8a4b36] mb-6">
              {section.category}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
                >
                  <img
                    src={generateImagePath(section.category, item.name)}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-[#d77a61]">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#3e2f1c] mt-1">
                      {item.description}
                    </p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-base font-semibold">
                        {item.price}
                      </span>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-[#d77a61] text-white px-4 py-1 rounded hover:bg-[#c6634e] transition"
                      >
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cart Sidebar */}
      {showCart && (
        <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl border-l p-4 z-50 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-[#d77a61]">Your Cart</h3>
            <button
              className="text-gray-500 hover:text-red-500 text-xl"
              onClick={() => setShowCart(false)}
            >
              ×
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="flex-1 overflow-y-auto pr-1">
              <div className="space-y-4">
                {cart.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-start border-b pb-2"
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => updateQuantity(item.name, -1)}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.name, 1)}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold block">
                        {item.price}
                      </span>
                      <button
                        onClick={() => handleRemove(item.name)}
                        className="text-sm text-red-500 hover:underline mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {cart.length > 0 && (
            <button
              className="mt-4 w-full bg-[#d77a61] text-white py-2 rounded hover:bg-[#c6634e] transition"
              onClick={() => {
                setShowSummary(true);
              }}
            >
              Proceed to Pay
            </button>
          )}
        </div>
      )}

      {/* Summary Panel */}
      {showSummary && (
        <div className="fixed top-0 right-0 h-full w-80 bg-[#fffaf3] border-l shadow-xl p-4 z-100">
          <h3 className="text-xl font-bold text-[#8a4b36] mb-2">
            Payment Summary
          </h3>
          <ul className="space-y-2 text-sm">
            {cart.map((item, idx) => (
              <li key={idx} className="flex justify-between">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>
                  ₹
                  {(
                    parseFloat(item.price.replace(/[^0-9.]/g, "")) *
                    item.quantity
                  ).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-2 text-lg font-semibold">
            Total: ₹{totalAmount.toFixed(2)}
          </div>
          
          <button
            className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            onClick={() => {
              alert("Payment successful! Thank you for your order.");
              setCart([]);
              setShowCart(false);
              setShowSummary(false);
            }}
          >
            Confirm Payment
          </button>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          onClick={()=>{
            setShowSummary(false);
          }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}