import { Header } from "../components/Header/Header";
import { Banner } from "../components/Banner/banner";
import { Categories } from "../components/Categories/Categories";
import { Footer } from "../components/Footer/Footer";
import { ListProduct } from "../components/List-product/List-product";

export function Home() {
 
  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-6">
        <Banner />
        <Categories />

        <section className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Produtos em destaque
            </h2>
          </div>
        </section>
      <ListProduct />
         
      </main>

      <Footer />
    </>
  );
}