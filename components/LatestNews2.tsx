import { ComponentProps } from './types';

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
          <div className="text-lg font-bold">
            Latest News
          </div>
        </div>
        <div className={`
          lg:ml-200 xl:ml-200 md:mt-4 sm:mt-4 xs:mt-4
          flex flex-nowrap flex-shrink-0
          whitespace-nowrap scrollbar-thin
          ${debugBorder}
        `}>
          <div className="w-[200px] h-[200px] border border-green-500">
            box
          </div>
          <div className="w-[200px] h-[200px] border border-green-500">
            box
          </div>
        </div>
      </div>
    </div>
  );
}