import Image from 'next/image';
import { ComponentProps, NewsItemProps } from './types';

const newsItems: NewsItemProps[] = [
  {
    id: "01",
    img: "/img/03.jpg",
    desc: "South Pacific reopens for superyachts, a top charter spot.",
  }, {
    id: "02",
    img: "/img/04.jpg",
    desc: "WASSP’s Bluebeam brings major feature advancements",
  }
];

const NewsBox = (
  { img, desc }:
  { img: string, desc: string }
) => {
  return (
    <div className="w-[300px] h-[350px] border border-white p-5 m-1 text-sm">
      <div>
        <Image
          src={img}
          alt=""
          width={369}
          height={227}
          className={`
            object-cover object-center
            w-[369px] h-[227px]
            overflow-hidden
          `}
        />
      </div>
      <div className={`
        w-[280px] text-wrap
      `}>
        { desc }
      </div>
      <div className={`
        pt-4
      `}>
        info
      </div>
    </div>
  );
}

export default function LatestNews({ debug }: ComponentProps) {
  const debugBorder = debug ? "border border-red-500" : "";
  return (
    <div className="w-full h-screen">
      <div className={`
        flex lg:flex-nowrap flex-wrap
        justify-between w-full
        shrink-0 overflow-x-auto relative
      `}>
        <div className={`
          lg:w-1/3
          w-full
          ${debugBorder}
        `}>
          <div className="text-lg font-bold font-norwester">
            Latest News
          </div>
        </div>
        <div className={`
          lg:ml-200 xl:ml-200 md:mt-4 sm:mt-4 xs:mt-4
          flex flex-nowrap flex-shrink-0
          whitespace-nowrap scrollbar-thin
          ${debugBorder}
        `}>
          <NewsBox
            img="/img/03.jpg"
            desc="South Pacific reopens for superyachts, a top charter spot."
          />
          <NewsBox
            img="/img/04.jpg"
            desc="WASSP’s Bluebeam brings major feature advancements"
          />
        </div>
      </div>
    </div>
  );
}