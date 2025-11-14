"use client";

import { useState } from "react";
import useProducts from "./hooks/useProducts.js";
import ProductCard from "./components/ProductCard";
import ProductModal from "./components/ProductModal";

export default function ProductsPage() {
  const { items, loading, search, setSearch, sortType, setSortType } =
    useProducts();

  const [selected, setSelected] = useState(null);

  return (
    <main className=" px-4 sm:px-6 md:px-12 py-6 max-w-7xl mx-auto ">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="flex-1 p-3 border rounded-lg focus:outline-blue-500"
        />

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="p-3 border rounded-lg focus:outline-blue-500"
          
        >
          <option value="" className=" text-black">Sort</option>
          <option value="low-high" className=" text-black">Price: Low → High</option>
          <option value="high-low" className=" text-black">Price: High → Low</option>
        </select>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-gray-500 animate-pulse">Loading products...</div>
      )}

      {/* Product Grid */}
      {!loading && (
        <section
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-6"
        >
          {items.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onClick={() => setSelected(p)}
            />
          ))}
        </section>
      )}

      {/* Modal */}
      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}
