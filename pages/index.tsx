import type { NextPage } from "next";
import Image from "next/image";
import warehouseImg from "../public/images/warehouse.jpg";

const offers = [
  {
    name: "Save even more",
    description: "Our customers who order more receive special pricing.",
    href: "#",
  },
  {
    name: "Return when you're ready",
    description: "60 days of free returns",
    href: "#",
  },
  {
    name: "Sign up for our newsletter",
    description: "15% off your first order",
    href: "#",
  },
];
const trendingProducts = [
  {
    id: 1,
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg",
    imageAlt:
      "Black machined steel pen with hexagonal grip and small white logo at top.",
    availableColors: [
      { name: "Black", colorBg: "#111827" },
      { name: "Brass", colorBg: "#FDE68A" },
      { name: "Chrome", colorBg: "#E5E7EB" },
    ],
  },
  // More products...
];

const Home: NextPage = () => {
  return (
    <>
      <div className="mx-auto w-3/4 bg-white">
        <main>
          {/* Hero */}
          <div className="flex flex-col border-b border-safety-red lg:border-0">
            <nav
              aria-label="Offers"
              className=" order-last border-b-4 border-safety-red lg:order-first"
            >
              <div className="mx-auto max-w-7xl lg:px-8">
                <ul
                  role="list"
                  className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x"
                >
                  {offers.map((offer) => (
                    <li key={offer.name} className="flex flex-col">
                      <a
                        href={offer.href}
                        className="relative flex flex-1 flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
                      >
                        <p className="text-sm text-gray-500">{offer.name}</p>
                        <p className="font-semibold text-gray-900">
                          {offer.description}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <div className="relative mt-10 grid grid-cols-3 rounded-2xl bg-space-caddet-light p-5">
              <div
                aria-hidden="true"
                className="absolute hidden h-full w-1/2 lg:block"
              />
              <div className="flex flex-col items-center justify-evenly">
                <h1 className="text-center text-6xl font-bold tracking-tight">
                  What you need!
                  <br />
                  When you need it!
                </h1>
                <p className="mx-5 text-center text-xl">
                  Looking for materials? Our vast catalog contains just about
                  anything you will every need!
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-safety-red py-3 px-10 font-medium text-white hover:bg-indigo-700"
                  >
                    Shop Our Catalog
                  </a>
                </div>
              </div>
              <div className="relative col-span-2 m-5 aspect-video">
                <Image
                  src={warehouseImg}
                  fill={true}
                  className={"rounded-xl object-cover"}
                  alt={""}
                />
              </div>
            </div>
          </div>

          {/* Trending products */}
          <section aria-labelledby="trending-heading" className="bg-white">
            <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:py-32 lg:px-8">
              <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
                <h2
                  id="trending-heading"
                  className="text-2xl font-bold tracking-tight text-gray-900"
                >
                  Trending products
                </h2>
                <a
                  href="#"
                  className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
                >
                  See everything<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>

              <div className="relative mt-8">
                <div className="relative w-full overflow-x-auto">
                  <ul
                    role="list"
                    className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                  >
                    {trendingProducts.map((product) => (
                      <li
                        key={product.id}
                        className="inline-flex w-64 flex-col text-center lg:w-auto"
                      >
                        <div className="group relative">
                          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200">
                            <Image
                              src={product.imageSrc}
                              height={"400"}
                              width={"400"}
                              alt={product.imageAlt}
                              className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                          </div>
                          <div className="mt-6">
                            <p className="text-sm text-gray-500">
                              {product.color}
                            </p>
                            <h3 className="mt-1 font-semibold text-gray-900">
                              <a href={product.href}>
                                <span className="absolute inset-0" />
                                {product.name}
                              </a>
                            </h3>
                            <p className="mt-1 text-gray-900">
                              {product.price}
                            </p>
                          </div>
                        </div>

                        <h4 className="sr-only">Available colors</h4>
                        <ul
                          role="list"
                          className="mt-auto flex items-center justify-center space-x-3 pt-6"
                        >
                          {product.availableColors.map((color) => (
                            <li
                              key={color.name}
                              className="h-4 w-4 rounded-full border border-black border-opacity-10"
                              style={{ backgroundColor: color.colorBg }}
                            >
                              <span className="sr-only">{color.name}</span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 px-4 sm:hidden">
                <a
                  href="#"
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  See everything<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
