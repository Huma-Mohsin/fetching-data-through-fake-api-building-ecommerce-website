import Image from "next/image";

export async function getServerSideProps({ params }: { params: { product: string } }) {
  let res;
  try {
    const data = await fetch(`https://fakestoreapi.com/products/${params.product}`);
    if (!data.ok) {
      throw new Error("Product not found");
    }
    res = await data.json();
  } catch (error) {
    console.error("Error fetching product data:", error);
    res = {
      title: "Error",
      description: "Unable to fetch product data.",
      image: "/fallback-image.jpg",  // Use a fallback image
      price: "N/A",
      category: "N/A",
      rating: { rate: 0 },
    };
  }

  return {
    props: { product: res },
  };
}

export default function Products({ product }: { product: any }) {
  return (
    <section className="text-gray-800 body-font overflow-hidden bg-pink-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap bg-pink-100 rounded-lg shadow-lg">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded-t-lg lg:rounded-l-lg"
            src={product.image}
            width={300}
            height={300}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-6">
            <h2 className="text-3xl font-bold text-indigo-600 tracking-widest mb-4">{product.title}</h2>
            <h1 className="text-gray-600 text-xl title-font font-semibold mb-4">{product.category}</h1>
            <div className="flex mb-4 items-center">
              <div className="flex items-center space-x-2 text-yellow-500">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5 text-gray-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <span className="text-gray-600 ml-3">{product.rating.rate} Reviews</span>
            </div>
            <p className="leading-relaxed text-gray-900 text-lg">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex items-center space-x-3">
                <span className="mr-3 text-lg text-gray-700">Color:</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none bg-lime-700" />
                <button className="border-2 border-gray-300 ml-1 bg-rose-700 rounded-full w-6 h-6 focus:outline-none" />
                <button className="border-2 border-gray-300 ml-1 bg-emerald-500 rounded-full w-6 h-6 focus:outline-none" />
              </div>
              <div className="flex ml-6 items-center space-x-6">
                <span className="mr-3 text-lg text-gray-900">Size:</span>
                <select className="rounded-lg border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="title-font font-semibold text-2xl text-gray-900">${product.price}</span>
              <button className="flex ml-auto text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded-lg transition duration-300 ease-in-out">
                Add to Cart
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-300 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4 hover:bg-gray-200 transition duration-300">
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
  );
}
