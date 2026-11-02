import {
  Laptop,
  Smartphone,
  Headphones,
  Gamepad2,
  Monitor,
  House,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Notebooks",
    slug: "notebooks",
    icon: Laptop,
  },
  {
    id: 2,
    name: "Smartphones",
    slug: "smartphones",
    icon: Smartphone,
  },
  {
    id: 3,
    name: "Acessórios",
    slug: "accessories",
    icon: Headphones,
  },
  {
    id: 4,
    name: "Games",
    slug: "games",
    icon: Gamepad2,
  },
  {
    id: 5,
    name: "Informática",
    slug: "computers",
    icon: Monitor,
  },
  {
    id: 6,
    name: "Casa Inteligente",
    slug: "smart-home",
    icon: House,
  },
];

export function Categories() {
  const navigate = useNavigate();

  function handleCategory(slug: string) {
    navigate(`/products?category=${slug}`);
  }

  return (
    <section className="mt-10">
      <div className="grid grid-cols-3 gap-6 md:grid-cols-6">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => handleCategory(category.slug)}
              className="group flex flex-col items-center gap-3"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-700 transition hover:bg-purple-600 group-hover:bg-purple-600 group-hover:text-white">
                <Icon size={28} />
              </div>

              <span className="text-center text-sm font-medium">
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}