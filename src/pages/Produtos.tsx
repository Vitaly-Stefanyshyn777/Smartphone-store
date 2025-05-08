import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import products from "../data/products";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Produtos = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  // Scroll to top on page load and check for search query
  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.state?.searchQuery) {
      setSearchQuery(location.state.searchQuery);
    } else {
      setSearchQuery("");
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-alphadark flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          {searchQuery ? (
            <>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Search results: {searchQuery}
              </h1>
              <p className="text-gray-300 mb-8">
                {location.state?.searchResults?.length || 0} products found
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
                All Products
              </h1>
              <p className="text-gray-300 mb-8 max-w-3xl">
                Discover our complete collection of premium Apple products and
                accessories, selected to ensure quality and authenticity. All
                products come with a warranty and exclusive Alpha Tech support.
              </p>
            </>
          )}

          <ProductGrid products={products} title="Catálogo Completo" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Produtos;
