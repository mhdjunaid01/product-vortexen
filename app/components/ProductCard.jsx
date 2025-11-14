import Image from "next/image";

export default function ProductCard({ product, onClick }) {
  return (
    <div
      className="border p-4 rounded-lg cursor-pointer hover:shadow-md transition bg-white"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative w-full h-48 rounded-md overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 25vw"
        />
      </div>

      {/* Title */}
      <h3 className=" text-black mt-3 font-semibold text-lg line-clamp-1">
        {product.title}
      </h3>

      {/* Price */}
      <p className="text-black font-bold text-xl">₹ {product.price}</p>
    </div>
  );
}
