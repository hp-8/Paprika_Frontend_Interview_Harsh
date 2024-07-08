import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  matchPercentage: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, matchPercentage, price }) => {
  return (
    <div className="p-2 w-full sm:w-48 md:w-56">
      <Image src={imageSrc} alt={title} className="w-full h-32 sm:h-40 md:h-48 object-cover rounded-lg"/>
      <div className="py-4">
        <div className="text-sm sm:text-base md:text-lg font-medium my-2">{title}</div>
        <div className="text-greenMatch font-semibold text-xs sm:text-sm my-2">{matchPercentage}</div>
        <div className="text-greyBody text-xs sm:text-sm my-2">{price}</div>
      </div> 
    </div>
  );
};

export default Card;
