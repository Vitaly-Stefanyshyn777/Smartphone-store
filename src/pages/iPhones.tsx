import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import products from "../data/products";
import { useEffect } from "react";

const IPhones = () => {
  // Filter products to get only iPhones
  const iPhoneProducts = products.filter(
    (product) => product.category === "iPhone"
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
            iPhones
          </h1>
          <p className="text-gray-300 mb-8 max-w-3xl">
            Discover our premium collection of iPhones, selected to ensure
            quality and authenticity. We have a variety of models to meet your
            needs, all with exclusive Alpha Tech BR warranty and support.
          </p>

          <ProductGrid products={iPhoneProducts} title="Todos os iPhones" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IPhones;
