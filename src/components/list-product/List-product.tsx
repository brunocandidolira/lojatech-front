import { useRef } from "react";

import { productsMooks, productsMooks_2 } from "../../mooks/Products";
import { CarouselButtons } from "../CarouselButtons/carouselButtons";
import { ProductCard } from "../ProductCard/ProductCard";

export function ListProduct() {
  const carouselRef1 = useRef<HTMLDivElement>(null);
  const carouselRef2 = useRef<HTMLDivElement>(null);

  function onNext() {
    carouselRef1.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  }

  function onPrevious() {
    carouselRef1.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  }

  function onNext2() {
    carouselRef2.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  }

  function onPrevious2() {
    carouselRef2.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  }

  return (
    <>
      {/* PRIMEIRO CARROSSEL */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">
          Produtos em destaque
        </h2>

        <div className="relative">
          <div
            ref={carouselRef1}
            className="flex gap-6 overflow-x-auto scroll-smooth"
          >
            {productsMooks.map((product) => (
              <div
                key={product.id}
                className="w-64 shrink-0"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <CarouselButtons
            onNext={onNext}
            onPrevious={onPrevious}
          />
        </div>
      </section>

      {/* SEGUNDO CARROSSEL */}
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">
          Mais produtos
        </h2>

        <div className="relative">
          <div
            ref={carouselRef2}
            className="flex gap-6 overflow-x-auto scroll-smooth"
          >
            {productsMooks_2.map((product) => (
              <div
                key={product.id}
                className="w-64 shrink-0"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <CarouselButtons
            onNext={onNext2}
            onPrevious={onPrevious2}
          />
        </div>
      </section>
    </>
  );
}