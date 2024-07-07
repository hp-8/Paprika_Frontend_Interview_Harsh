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
    <div className="bg-white border border-gray-300 rounded-xl shadow-md p-4 ">
      <div className="flex items-start space-x-4">
       
          <div className="bg-white rounded-full p-2">
            <Image src={iconSrc} alt={title} width={280} height={280} />
       
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <h2 className="text-lg font-medium">{title}</h2>
            <span className="text-lg mt-2 mb-2 font-medium">${price.toFixed(2)}</span>
          </div>
          <p className="text-greyBody mt-1 text-justify">
            {truncateDescription(description, maxDescriptionLength)}
          </p>
          <div className="mt-2">
            <span className="text-blueMatch px-3 py-1 rounded-full text-sm font-semibold">
              {dietaryMatch}% Dietary Match
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
