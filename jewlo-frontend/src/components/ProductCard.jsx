export default function ProductCard({ product }) {
  return (
    <div className="bg-white p-4 relative group">
      {/* Badge */}
      {product.stock && (
        <span className="absolute top-3 left-3 bg-white text-xs px-2 py-1 shadow">
          {product.stock}
        </span>
      )}

      {/* Image */}
      <div className="aspect-square flex items-center justify-center overflow-hidden">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-center text-sm tracking-wide uppercase">
        {product.title}
      </h3>
    </div>
  );
}
