import Image from "next/image"
import BackArrow from '../assets/left_arrow.png'
import Share from '../assets/share.png'
import Heart from '../assets/heart.png'
import Gallery from '../assets/gallert.png'

const ImageSection = () => {
  return (
    <div className="image-display h-64 bg-[url('../assets/bg_image.png')] relative bg-center bg-cover">
      <Image src={BackArrow} alt="Go Back" className="bg-white p-1 rounded-full absolute top-10 left-16 w-8 h-8 object-contain"/> 
      <Image src={Heart} alt="Heart" className="bg-white p-1 rounded-full absolute top-10 right-36 w-8 h-8 object-contain"/> 
      <Image src={Share} alt="Share" className="bg-white p-1 rounded-full absolute top-10 right-48 w-8 h-8 object-contain"/> 
      <button className="absolute bottom-10 right-36 w-36 h-10 bg-white rounded-md p-2 flex flex-row text-xs text-pinkHero font-medium text-center items-center justify-center">
        <Image src={Gallery} alt="Gallery" className="mr-1"/>
        All (45) photos
      </button>
    </div>
  )
}

export default ImageSection