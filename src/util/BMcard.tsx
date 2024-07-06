import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  matchPercentage: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, matchPercentage, price }) => {
  return (
    <div className="p-2  w-48">
      <Image src={imageSrc} alt={title} className="w-full
       object-cover rounded-lg"/>
      <div className="py-4">
        <div className="text-base font-medium my-2">{title}</div>
        <div className="text-greenMatch font-semibold text-sm my-2">{matchPercentage}</div>
        <div className="text-greyBody text-sm my-2 ">{price}</div>
      </div> 
    </div>
  );
};

export default Card;
