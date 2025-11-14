import Image from "next/image";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-50 rounded-lg p-6 w-full max-w-lg relative max-h-[90vh]  boverflow-y-auto ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Image */}
        <div className="relative w-full h-56 rounded-md overflow-hidden ">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Title */}
        <h2 className=" text-black text-2xl font-semibold mt-4">{product.title}</h2>

        {/* Price */}
        <p className="text-black font-bold text-xl mt-2">
          ₹ {product.price}
        </p>

        {/* Description */}
        <p className="text-gray-700 mt-4">{product.description}</p>

        {/* Extra Details */}
        <div className="mt-4 text-sm text-gray-600 flex flex-wrap gap-3">
          <span>Brand: {product.brand}</span>
          <span>Category: {product.category}</span>
          <span>Rating: ⭐ {product.rating}</span>
        </div>
      </div>
    </div>
  );
}
