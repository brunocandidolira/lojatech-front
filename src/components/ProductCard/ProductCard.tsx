import type { Product } from "../../types/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-contain"
      />

      <h3 className="mt-4 font-semibold">
        {product.name}
      </h3>

      <p className="mt-2 text-xl font-bold">
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <button className="mt-4 w-full rounded-lg bg-purple-600 py-3 font-semibold text-white hover:bg-purple-700">
        Adicionar ao carrinho
      </button>

    </article>
  );
}