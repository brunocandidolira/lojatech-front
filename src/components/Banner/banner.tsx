import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarouselButtons } from "../CarouselButtons/carouselButtons";

interface BannerItem {
  id: number;
  productId: number;
  image: string;
  alt: string;
}

const banners: BannerItem[] = [
  {
    id: 1,
    productId: 1,
    image: "/images/banner-notebook.png",
    alt: "Promoção de notebooks",
  },
  {
    id: 2,
    productId: 2,
    image: "/images/banner-smartphone.png",
    alt: "Promoção de smartphones",
  },
  {
    id: 3,
    productId: 3,
    image: "/images/banner-acessorios.png",
    alt: "Promoção de acessórios gamer",
  },
];

export function Banner() {
  const [currentBanner, setCurrentBanner] = useState<number>(0);

  const navigate = useNavigate();

  function nextBanner() {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  }

  function previousBanner() {
    setCurrentBanner(
      (prev) => (prev - 1 + banners.length) % banners.length
    );
  }

  function goToBanner(index: number) {
    setCurrentBanner(index);
  }

  function handleOffer(productId: number) {
    navigate(`/products/${productId}`);
  }

  const banner = banners[currentBanner];

  return (
    <section
      aria-label="Ofertas em destaque"
      className="
        relative
        mx-auto
        mt-6
        w-full
        max-w-7xl
        overflow-hidden
        rounded-xl
        bg-purple-800
        shadow-lg
      "
    >
      {/* Banner clicável */}
      <button
        type="button"
        onClick={() => handleOffer(banner.productId)}
        aria-label={`Ver detalhes: ${banner.alt}`}
        className="block w-full cursor-pointer"
      >
        <img
          src={banner.image}
          alt={banner.alt}
          className="h-50 w-full object-cover md:h-75 lg:h-100"
        />
      </button>

      {/* Setas */}
      <CarouselButtons
        onNext={nextBanner}
        onPrevious={previousBanner}
      />

      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {banners.map((item, index) => (
          <button
            key={item.id}
            type="button"
            aria-label={`Ir para o banner ${index + 1}`}
            aria-current={
              currentBanner === index ? "true" : undefined
            }
            onClick={() => goToBanner(index)}
            className={`
              h-3
              w-3
              rounded-full
              transition-all
              duration-300
              ${
                currentBanner === index
                  ? "scale-125 bg-white"
                  : "bg-white/50 hover:bg-white/80"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}