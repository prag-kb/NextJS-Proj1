'use client';
import Image from "next/image";
import { CustomButton } from ".";
import hero from "../public/hero.png"

const Hero = () => {

  const handleScroll = () => {
    console.log("clicked from client")
  }

  return (
    <div className="Hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car --Quickly and easy!
        </h1>

        <p className="hero__subtitle">
          Server Component
        </p>

        <CustomButton title="Explore Cars" 
        handleClick={handleScroll}
        containerStyles= "bg-primary-blue text-white rounded-full mt-10" />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill
          className="object-contain"
          />

          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
