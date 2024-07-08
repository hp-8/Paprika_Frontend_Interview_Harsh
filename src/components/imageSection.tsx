import Image from "next/image";
import BackArrow from '../assets/left_arrow.png';
import Share from '../assets/share.png';
import Heart from '../assets/heart.png';
import Gallery from '../assets/gallert.png';

const ImageSection = () => {
  return (
    <div className="image-display h-64 bg-[url('../assets/bg_image.png')] relative bg-center bg-cover">
      <Image
        src={BackArrow}
        alt="Go Back"
        className="bg-white p-1 rounded-full absolute top-4 left-4 md:top-10 md:left-16 w-6 h-6 md:w-8 md:h-8 object-contain"
      />
      <Image
        src={Heart}
        alt="Heart"
        className="bg-white p-1 rounded-full absolute top-4 right-24 md:top-10 md:right-36 w-6 h-6 md:w-8 md:h-8 object-contain"
      />
      <Image
        src={Share}
        alt="Share"
        className="bg-white p-1 rounded-full absolute top-4 right-12 md:top-10 md:right-48 w-6 h-6 md:w-8 md:h-8 object-contain"
      />
      <button className="absolute bottom-4 right-4 md:bottom-10 md:right-36 w-28 h-8 md:w-36 md:h-10 bg-white rounded-md p-2 flex flex-row text-xs md:text-sm text-pinkHero font-medium text-center items-center justify-center">
        <Image src={Gallery} alt="Gallery" className="mr-1 w-4 h-4 md:w-5 md:h-5"/>
        All (45) photos
      </button>
    </div>
  );
}

export default ImageSection;
