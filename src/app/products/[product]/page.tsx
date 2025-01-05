import Image from 'next/image';

// Define the props for dynamic route parameters
interface ProductPageProps {
  params: {
    product: string; // Dynamic route parameter (product ID)
  };
}

// Fetch product data for a specific product
async function getProductData(productId: string) {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product data');
  }
  return response.json();
}

// Define dynamic paths to be statically generated
export async function generateStaticParams() {
  const response = await fetch('https://fakestoreapi.com/products/');
  const products = await response.json();

  return products.map((product: { id: number }) => ({
    product: product.id.toString(),
  }));
}

// Product page component
export default async function ProductPage({ params }: ProductPageProps) {
  try {
    const response = await getProductData(params.product);

    return (
      <div>
        <section className="text-gray-900 body-font overflow-hidden">
          <div className="container px-5 py-10 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              {/* Product Image */}
              <div className="lg:w-1/2 w-full lg:h-auto h-60 object-cover object-center rounded">
                <Image
                  alt={response.title}
                  src={response.image}
                  width={400}
                  height={400}
                  className="rounded"
                  priority
                  unoptimized
                />
              </div>

              {/* Product Details */}
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="title-font text-gray-800 font-semibold text-2xl tracking-widest">
                  {response.title}
                </h2>
                <h1 className="text-gray-700 text-xl title-font font-bold mt-1">
                  {response.category}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    {/* Add SVGs for ratings here if needed */}
                  </span>
                  <span className="text-blue-800 ml-0">4 Reviews</span>
                </div>
                <p className="leading-relaxed font-semibold">{response.description}</p>

                {/* Color and Size Options */}
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                    <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none" />
                    <button className="border-2 border-gray-300 ml-1 bg-indigo-700 rounded-full w-6 h-6 focus:outline-none" />
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price and Buttons */}
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${response.price}
                  </span>
                  <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded">
                    Add to Cart
                  </button>
                  <button className="rounded-full w-10 h-10 bg-gray-300 p-0 border-0 inline-flex items-center justify-center text-pink-500 ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error fetching product:', error);
    return (
      <div>
        <p className="text-center text-red-500 mt-4">Error loading product details</p>
      </div>
    );
  }
}
