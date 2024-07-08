"use client";

import Image from "next/image";
import Verified from "../assets/verified.png";
import HumanIcon from "../assets/human.png";
import ForwardArrow from "../assets/navigate-next.svg";
import Card from "@/util/BMcard";
import BMimg from "../assets/BMimg.svg";
import AppCard from "@/util/appCard";
import iconSrc from "../assets/appImg.svg";

function Content() {
  const cardData = [
    {
      imageSrc: BMimg,
      title: "Avocado Green Toast",
      matchPercentage: "100% Preference Match",
      price: "$8.99",
    },
    {
      imageSrc: BMimg,
      title: "Avocado Green Toast",
      matchPercentage: "100% Preference Match",
      price: "$8.99",
    },
    {
      imageSrc: BMimg,
      title: "Avocado Green Toast",
      matchPercentage: "100% Preference Match",
      price: "$8.99",
    },
    {
      imageSrc: BMimg,
      title: "Avocado Green Toast",
      matchPercentage: "100% Preference Match",
      price: "$8.99",
    },
    {
      imageSrc: BMimg,
      title: "Avocado Green Toast",
      matchPercentage: "100% Preference Match",
      price: "$8.99",
    },
  ];

  const AppCardData = [
    {
      title: "English Breakfast",
      price: 8.99,
      description:
        "Fluffy pancakes, with their golden-brown exteriors and soft, airy interiors, are a quintessential breakfast delight. Their delightful texture is achieved through careful mixing of ingredients and precise cooking techniques, resulting in a stack of pancakes that practically melt in your mouth. Topped with a drizzle of maple syrup or a dollop of whipped cream, fluffy pancakes are an irresistible treat for any morning indulgence.A delicious and healthy salad with fresh greens, cherry tomatoes, and a tangy vinaigrette dressing. Perfect for a light lunch or dinner.",
      dietaryMatch: 75,
      iconSrc: iconSrc,
    },
    {
      title: "English Breakfast",
      price: 8.99,
      description:
        "Fluffy pancakes, with their golden-brown exteriors and soft, airy interiors, are a quintessential breakfast delight. Their delightful texture is achieved through careful mixing of ingredients and precise cooking techniques, resulting in a stack of pancakes that practically melt in your mouth. Topped with a drizzle of maple syrup or a dollop of whipped cream, fluffy pancakes are an irresistible treat for any morning indulgence.A delicious and healthy salad with fresh greens, cherry tomatoes, and a tangy vinaigrette dressing. Perfect for a light lunch or dinner.",
      dietaryMatch: 75,
      iconSrc: iconSrc,
    },
    {
      title: "English Breakfast",
      price: 8.99,
      description:
        "Fluffy pancakes, with their golden-brown exteriors and soft, airy interiors, are a quintessential breakfast delight. Their delightful texture is achieved through careful mixing of ingredients and precise cooking techniques, resulting in a stack of pancakes that practically melt in your mouth. Topped with a drizzle of maple syrup or a dollop of whipped cream, fluffy pancakes are an irresistible treat for any morning indulgence.A delicious and healthy salad with fresh greens, cherry tomatoes, and a tangy vinaigrette dressing. Perfect for a light lunch or dinner.",
      dietaryMatch: 75,
      iconSrc: iconSrc,
    },
    {
      title: "English Breakfast",
      price: 8.99,
      description:
        "Fluffy pancakes, with their golden-brown exteriors and soft, airy interiors, are a quintessential breakfast delight. Their delightful texture is achieved through careful mixing of ingredients and precise cooking techniques, resulting in a stack of pancakes that practically melt in your mouth. Topped with a drizzle of maple syrup or a dollop of whipped cream, fluffy pancakes are an irresistible treat for any morning indulgence.A delicious and healthy salad with fresh greens, cherry tomatoes, and a tangy vinaigrette dressing. Perfect for a light lunch or dinner.",
      dietaryMatch: 75,
      iconSrc: iconSrc,
    },
  ];

  return (
    <div className="content bg-white min-h-screen p-4 sm:p-8 md:p-9 relative">
      {/* Title, Distance and Status */}
      <div className="content-header-container mb-4 sm:mb-5 md:mb-6 p-2 gap-2 sm:gap-3 flex flex-col md:flex-row border-b-2 border-gray-300">
        <div className="left-container bg-white w-full lg:w-9/12">
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3 md:mb-5 flex items-center gap-2 sm:gap-3 md:gap-5">
            The Daily Grind
            <Image
              src={Verified}
              alt="verification logo"
              className="w-5 sm:w-6 md:w-8"
            />
          </div>
          <div className="subtext text-xs sm:text-sm md:text-base">
            1.2 miles Away |{" "}
            <span className="text-greenOpen font-semibold">Open</span>
          </div>
        </div>
        <div className="right-container justify-center flex lg:flex-row md:flex-col items-center w-full md:w-1/4 gap-2 sm:gap-3 md:gap-6 p-2 sm:p-2 md:p-3 border-2 rounded-lg border-gray-200  mt-2 sm:mt-0">
          
          <div className="icon flex-shrink-0 w-8 sm:w-8 md:w-8">
            <Image
              src={HumanIcon} 
              alt="Human Icon"
              className="h-auto max-w-full"
            />
          </div>

          <div className="flex flex-row">
            <div className="add-menu-container ml-2 sm:ml-3 md:ml-0">
              <div className="add-menu-section font-semibold text-xs sm:text-sm md:text-base">
                Add Item
              </div>
              <div className="subtext text-xs md:text-sm font-light text-gray-500">
                Add new item to menu
              </div>
            </div>
            <div className="arrow-icon w-5 ml-4 sm:w-6 md:w-8 flex-shrink-0 content-center">
              <Image src={ForwardArrow} alt="Arrow" />
            </div>
          </div>

        </div>
      </div>
      {/* Best Match */}
      <div className="flex flex-col p-2 mb-8">
        <span className="font-semibold text-lg sm:text-xl px-2 sm:px-4 mx-2">
          Best Matches
        </span>
        <div className="flex flex-wrap items-center p-2 sm:p-4 justify-between">
          {cardData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              matchPercentage={card.matchPercentage}
              price={card.price}
            />
          ))}
        </div>
      </div>

      {/* Appetizers */}
      <div className="flex flex-col p-4 sm:p-8 mb-8">
        <span className="font-semibold text-xl sm:text-2xl mb-4">
          Appetizers
        </span>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-4 sm:gap-x-14 gap-y-4 sm:gap-y-8">
          {AppCardData.map((card, index) => (
            <AppCard
              key={index}
              title={card.title}
              price={card.price}
              description={card.description}
              dietaryMatch={card.dietaryMatch}
              iconSrc={card.iconSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
