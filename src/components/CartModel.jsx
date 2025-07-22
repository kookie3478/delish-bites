import { useCart } from "../context/CartContext";

export default function CartModal({ onClose }) {
  const { cartItems, updateQuantity, clearCart } = useCart();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items added.</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item, i) => (
              <li key={i} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm">{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.name, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.name, item.quantity + 1)}>+</button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 flex justify-between items-center">
          <button className="bg-gray-400 px-4 py-2 rounded" onClick={onClose}>Close</button>
          <button
            className="bg-[#d77a61] text-white px-4 py-2 rounded hover:bg-[#c6634e]"
            onClick={() => {
              alert("Proceeding to pay...");
              clearCart();
              onClose();
            }}
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}
