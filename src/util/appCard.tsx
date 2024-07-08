import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ACardProps {
  title: string;
  price: number;
  description: string;
  dietaryMatch: number;
  iconSrc: StaticImageData;
}

const AppCard: React.FC<ACardProps> = ({ title, price, description, dietaryMatch, iconSrc }) => {
  const maxDescriptionLength = 130;

  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className="bg-white border border-gray-300 rounded-xl shadow-md p-4 sm:p-6 md:p-8">
      <div className="flex flex-col md:flex-wrap justify-center lg:flex-nowrap p-2  items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
        <div className=" rounded-xl p-2  w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 md:mb-4 lg:mb-0 flex-shrink-0 mb-4 sm:mb-0 content-center">
          <Image src={iconSrc} alt={title} width={160} height={160} className="object-cover rounded-xl" />
        </div>
        <div className="flex flex-col justify-center sm:flex-grow xs:text-center sm:text-left  ">
          <h2 className="text-base sm:text-lg md:text-xl font-medium text-center sm:text-left">{title}</h2>
          <span className="text-base sm:text-lg md:text-xl mt-2 font-medium ">${price.toFixed(2)}</span>
          <p className="text-gray-600 mt-1 text-center sm:text-left text-xs sm:text-sm md:text-base">
            {truncateDescription(description, 120)}
          </p>
          <div className="mt-2 flex justify-center sm:justify-start">
            <span className="text-blueMatch px-3 py-1 rounded-full text-xs sm:text-sm md:text-base font-semibold">
              {dietaryMatch}% Dietary Match
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
