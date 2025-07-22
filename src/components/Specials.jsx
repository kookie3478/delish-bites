export default function Specials() {
  return (
    <section id="specials" className="py-20 bg-[#fdf6ec] text-[#3e2f1c] px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-pacifico text-[#d77a61] mb-4">
          Today’s Specials
        </h2>
        <p className="text-lg font-cabin mb-12 max-w-2xl mx-auto">
          Discover our handpicked dishes made fresh with seasonal ingredients.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#b04a5a] mb-2">Truffle Mushroom Risotto</h3>
            <p className="text-[#5a4636] font-cabin">
              Creamy arborio rice with wild mushrooms, truffle oil, and parmesan.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#b04a5a] mb-2">Stuffed Bell Peppers</h3>
            <p className="text-[#5a4636] font-cabin">
              Roasted peppers filled with quinoa, seasonal veggies, and goat cheese.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-[#b04a5a] mb-2">Lemon Thyme Chicken</h3>
            <p className="text-[#5a4636] font-cabin">
              Chicken breast glazed with lemon-thyme, served with roasted potatoes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
