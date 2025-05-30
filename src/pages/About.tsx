import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-alphadark flex flex-col">
      <Header />

      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Sobre Nós
              </h1>

              <div className="rounded-2xl overflow-hidden mb-10">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                  alt="Alpha Tech BR escritório"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-gradient text-3xl font-bold">
                  Our History
                </h2>
                <p className="text-gray-300 mb-6">
                  Alpha Tech BR was born from a passion for technology and the
                  desire to offer premium products with differentiated service
                  in the Brazilian market. Founded in 2018, our company has
                  established itself as a reference in high-quality Apple
                  products and accessories.
                </p>

                <h2 className="text-gradient text-3xl font-bold mt-10">
                  Our Mission
                </h2>
                <p className="text-gray-300 mb-6">
                  Provide the best experience in technological products, with a
                  focus on quality, personalized service and ongoing support to
                  our customers. We want each customer to have access to the
                  best in technology, with the security and trust they deserve.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                  <div className="bg-alphadarkblue/70 rounded-xl p-6">
                    <div className="w-12 h-12 bg-gradient-tech rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      Innovation
                    </h3>
                    <p className="text-gray-400">
                      We are always up to date with the latest trends and
                      releases in the world of technology.
                    </p>
                  </div>

                  <div className="bg-alphadarkblue/70 rounded-xl p-6">
                    <div className="w-12 h-12 bg-gradient-tech rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      Trust
                    </h3>
                    <p className="text-gray-400">
                      We build lasting relationships based on transparency and
                      quality products.
                    </p>
                  </div>

                  <div className="bg-alphadarkblue/70 rounded-xl p-6">
                    <div className="w-12 h-12 bg-gradient-tech rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      Service
                    </h3>
                    <p className="text-gray-400">
                      We offer personalized support before, during and after
                      your purchase for complete satisfaction.
                    </p>
                  </div>
                </div>

                <h2 className="text-gradient text-3xl font-bold mt-10">
                  Why choose Alpha Tech BR?
                </h2>
                <ul className="text-gray-300 space-y-3 ml-6 mb-6">
                  <li className="flex items-start">
                    <span className="text-alphagreen mr-2">✓</span>
                    <span>Original products with extended warranty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-alphagreen mr-2">✓</span>
                    <span>Fast delivery throughout Brazil</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-alphagreen mr-2">✓</span>
                    <span>Personalized service via WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-alphagreen mr-2">✓</span>
                    <span>Specialized technical support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-alphagreen mr-2">✓</span>
                    <span>Installments in up to 12x interest-free</span>
                  </li>
                </ul>

                <div className="mt-10 bg-gradient-to-br from-alphadarkblue to-alphadark p-8 rounded-2xl border border-white/5">
                  <h3 className="text-white text-2xl font-bold mb-4">
                    Contact Us
                  </h3>
                  <p className="text-gray-300 mb-6">
                    We are available to answer your questions and help with any
                    questions related to our products and services.
                  </p>
                  <a
                    href="https://wa.me/5513996114479"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gradient-tech inline-flex items-center text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <svg
                      className="w-5 h-5 mr-2 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
