"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const fetchProductData = async (slug: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product data');
  }
  const product = await res.json();
  return product;
};

const ProductPage = () => {
  const router = useRouter();  // Properly importing and using useRouter here
  const { product } = router.query;
  const [productData, setProductData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!product) return;

    const fetchProduct = async () => {
      try {
        const data = await fetchProductData(product as string);
        setProductData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        router.push('/error');  // Redirect to an error page if fetch fails
      }
    };

    fetchProduct();
  }, [product, router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!productData) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            className="max-w-full rounded-lg shadow-lg"
            src={productData.image}
            alt={productData.title}
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{productData.title}</h1>
          <p className="mt-4 text-lg text-gray-700">{productData.description}</p>
          <p className="mt-4 text-xl font-semibold text-gray-900">${productData.price}</p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
