import Image from 'next/image';
import { ComponentProps } from './types';


export default function Testimonials({ debug }: ComponentProps) {
  const debugBorder = debug ? "border border-red-500" : "";
  return (
    <div className="w-full h-screen">
      <div className={`
        flex lg:flex-nowrap flex-wrap
        justify-between w-full
        shrink-0 relative
      `}>
        <div className={`
          lg:w-1/3
          w-full
          ${debugBorder}
        `}>
          <div className="text-lg font-bold font-norwester">
            Testimonials
          </div>
        </div>
        <div className={`
          lg:ml-200 xl:ml-200 md:mt-4 sm:mt-4 xs:mt-4
          font-norwester md:w-1/2 text-5xl
          ${debugBorder}
        `}>
          “WASSP LETS ME GO TO WHERE I WOULD NEVER HAVE FISHED BEFORE, GIVING ME A HIGHER CATCH WITH REDUCED FUEL CONSUMPTION.”
        </div>
      </div>
    </div>
  );
}