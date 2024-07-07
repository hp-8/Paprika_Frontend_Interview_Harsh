"use client";

import Image from "next/image";
import Verified from "../assets/verified.png";
import HumanIcon from "../assets/human.png";
import ForwardArrow from "../assets/navigate-next.svg";
import Card from "@/util/BMcard";
import BMimg from "../assets/BMimg.svg";
import appCard from "@/util/appCard";
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
    <div className="content bg-white h-screen p-8 px-9 relative">
      

      {/* Title, Distance and Status */}
      <div className="content-header-container  mb-6 p-2 gap-3 flex flex-row border-b-2 border-gray-300">
        <div className="right-container bg-white w-9/12">
          <div className="text-3xl font-semibold mb-5 flex gap-5">
            The Daily Grind
            <Image
              src={Verified}
              alt="verification logo"
              className="size-8"
            ></Image>
          </div>

          <div className="subtext">
            1.2 miles Away |{" "}
            <span className="text-greenOpen font-semibold"> Open </span>
          </div>
        </div>

        <div className="leftcontainer flex flex-row  w-1/4 gap-6 p-3 border-2 rounded-lg border-gray-200 justify-around">
          <div className="icon">
            <Image src={HumanIcon} alt="Human Icon" />
          </div>

          <div className="add-menu-container">
            <div className="add-menu-section font-semibold text-base ">
              Add Item
            </div>
            <div className="subtext font-sm font-extralight text-opacity-30">
              Add new item to menu
            </div>
          </div>

          <div className="arrow-icon content-center justify-end">
            <Image
              src={ForwardArrow}
              alt="Arrow"
              className="size-8 flex flex-wrap"
            />
          </div>
        </div>
      </div>

      {/* Best Match */}
      <div className="flex flex-col p-2 mb-8">
        <span className="font-semibold text-xl px-4 mx-2">Best Matches</span>
        <div className="flex flex-wrap flex-row items-center p-4 justify-between">
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
      <div className="flex flex-col p-8 mb-8">
        <span className="font-semibold text-2xl mb-4">Appetizers</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-8">
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
