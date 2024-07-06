"use client";

import Image from "next/image";
import Verified from "../assets/verified.png";
import HumanIcon from "../assets/human.png";
import ForwardArrow from "../assets/navigate-next.svg";
import Card from "@/util/BMcard";
import BMimg from '../assets/BMimg.svg'

function Content() {

  const cardData = [
    {
      imageSrc: BMimg,
      title: 'Avocado Green Toast',
      matchPercentage: '100% Preference Match',
      price: '$8.99',
    },
    {
      imageSrc: BMimg,
      title: 'Avocado Green Toast',
      matchPercentage: '100% Preference Match',
      price: '$8.99',
    },
    {
      imageSrc: BMimg,
      title: 'Avocado Green Toast',
      matchPercentage: '100% Preference Match',
      price: '$8.99',
    },
    {
      imageSrc: BMimg,
      title: 'Avocado Green Toast',
      matchPercentage: '100% Preference Match',
      price: '$8.99',
    },
    {
      imageSrc: BMimg,
      title: 'Avocado Green Toast',
      matchPercentage: '100% Preference Match',
      price: '$8.99',
    }
  ]


  return (
    <div className="content ml-52 bg-white h-screen p-8 px-9 relative">

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
        <div className="flex flex-col p-2 mb-8 bg-fuchsia-300">
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

          <div className="appetizer-container bg-green-600 mt-4">
            Hello
          </div>
    
    </div>


    

  );
}

export default Content;
