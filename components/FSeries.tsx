import { ComponentProps } from './types';
import Image from 'next/image';

export default function FSeries({ debug }: ComponentProps) {
  const debugBorder = debug ? "border border-red-500" : "";
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/img/02.jpg"
        layout="fill"
        objectFit="cover"
        className="h-screen max-h-[1536px] object-cover"
      />
      <div className={`
        absolute inset-x-0 bottom-0 p-8 flex items-end
        md:flex-row flex-col justify-between md:space-x-10
      `}>
        <div className={`
          bg-opacity-50 p-4
          w-full md:w-1/3
          font-norwester
          ${debugBorder}
        `}>
          <p className="text-xl">(FISHING SERIES)</p>
          <p className="text-6xl">F - Series</p>
        </div>
        <div className={`
          bg-opacity-50 p-4
          w-full md:w-1/3 mt-4 md:mt-0
          ${debugBorder}
        `}>
          F - SERIES<br />
          WASSP Multibeam finds fish and habitat over a wider area than single-beam systems.<br />
          Explore Now
        </div>
      </div>
   </div>
  );
}