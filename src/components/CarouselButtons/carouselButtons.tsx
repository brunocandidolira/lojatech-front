import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselButtonsProps {
  onNext: () => void;
  onPrevious: () => void;
}

export function CarouselButtons({
  onNext,
  onPrevious,
}: CarouselButtonsProps) {

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">

      <button
        type="button"
        aria-label="Anterior"
        onClick={onPrevious}
        className="pointer-events-auto rounded-full bg-white p-3 shadow-md transition hover:bg-purple-600 hover:text-white"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        aria-label="Próximo"
        onClick={onNext}
        className="pointer-events-auto rounded-full bg-white p-3 shadow-md transition hover:bg-purple-600 hover:text-white"
      >
        <ChevronRight size={24} />
      </button>

    </div>
  );
}