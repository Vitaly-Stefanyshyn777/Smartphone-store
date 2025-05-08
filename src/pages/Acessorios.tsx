import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import products from "../data/products";
import { useEffect } from "react";

const Acessorios = () => {
  // Filter products to get only accessories
  const acessoriosProducts = products.filter(
    (product) => product.category === "Accessory"
  );

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-alphadark flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Accessories
          </h1>
          <p className="text-gray-300 mb-8 max-w-3xl">
            Complement your Apple device with our selection of genuine and
            compatible accessories. Chargers, cables, headphones and more to
            enhance your experience with Apple products.
          </p>

          <ProductGrid
            products={acessoriosProducts}
            title="Todos os Acessórios"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Acessorios;
