import Image from 'next/image';

const WinterPromotionCard: React.FC = () => {
  return (
    <div className="border border-gray-300 mt-0 rounded-lg overflow-hidden sm:flex sm:flex-col sm:text-sm">
      <Image 
        src="/winter.jpeg"
        alt="Winter Season Excitement"
        width={500}
        height={300}
        className="object-cover w-auto sm:mx-auto" // Full width on mobile and centered
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-center">Exciting Winter Sales 2025</h3>
        <p className="text-gray-900 font-medium text-center">
          Discover amazing discounts and promotions on your favorite winter products. Don’t miss out on the season’s best deals!
        </p>
      </div>
    </div>
  );
};

export default WinterPromotionCard;
