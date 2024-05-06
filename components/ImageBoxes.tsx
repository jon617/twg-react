"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ComponentProps } from './types';

const imageSizeAtFullScale = 150;

const arrayNumbers: string[] = Array.from({ length: 12 }, (_, i) => {
  const num = i + 3;
  return num < 10 ? `0${num}` : num.toString();
});  // Outputs: ["03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"]

const formulaForScale: number = imageSizeAtFullScale * (arrayNumbers.length + 2) + (5 * (arrayNumbers.length + 1));

const ImageDisplay = (
  { imgId, index }:
  { imgId: string, index: number }
) => {
  const isFirstImage = index === 0;
  const isLastImage = index === arrayNumbers.length - 1;
  return (
    <div className={`
      h=[${imageSizeAtFullScale}px] w-[${imageSizeAtFullScale}px] relative
      ${ isFirstImage ? "fade-left" : isLastImage ? "fade-right" : "" }
    `}>
      <Image
        alt=""
        src={`/img/${ imgId }.jpg`}
        width={imageSizeAtFullScale }
        height={imageSizeAtFullScale }
      />
    </div>
  )
}

export default function ImageBoxes({ debug }: ComponentProps) {
  const debugBorder = debug ? "border border-red-500" : "";
  
  const [ scale, setScale ] = useState(0.1);

  // useEffect to run on initial load
  useEffect( () => {
    if (typeof window !== "undefined") {
      setScale(window.innerWidth / formulaForScale);
    }
  }, [ ] );

  // useEffect to run each time the browser is resized
  useEffect( () => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setScale(window.innerWidth / formulaForScale);
      }
    };
    window.addEventListener('resize', handleResize);  // on load
    return () => {
      window.removeEventListener('resize', handleResize);  // on unload
    }
  }, [ setScale ] );

  return (
    <div
      className={`
        w-full flex justify-center bg-black gap-4
        origin-center
      `}
      style={{
        transform: `scale( ${scale} )`,
      }}
    >
      {
        arrayNumbers.map( (imgId, index) => {
          return (
            <div key={imgId} className={`w-[${imageSizeAtFullScale}px] h-[${imageSizeAtFullScale}px]`}>
              <ImageDisplay
                imgId={ imgId }
                index={ index }
              />
            </div>
          )
        })
      }
    </div>
  );
}