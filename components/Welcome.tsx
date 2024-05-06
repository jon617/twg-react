import { ComponentProps } from './types';

export default function Welcome({ debug }: ComponentProps) {
  const debugBorder = debug ? "border border-red-500" : "";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      {/* Container to align content according to specified margins */}
      <div className="flex flex-col max-w-4xl ml-[30%] mr-[10%]">
        <div className="font-norwester lg:text-6xl md:text-2xl text-lg font-bold mb-4 text-justify">
          {/* section 2a */}
          Welcome to the World of WASSP
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          {/* Blocks 2 and 3 with dynamic width */}
          <div className="md:w-1/4 w-1/2">
            {/* section 2b */}
            01
          </div>
          <div className="md:w-1/4 w-1/2 px-2">
            {/* section 2c */}
            about wassp
          </div>
          <div className="md:w-1/2 w-full">
            {/* section 2d */}
            WASSP, a powerful multi-beam sounder with 120-degree coverage and models for deep exploration, offers unparalleled accuracy, detail, and versatility. Target fish with steerable sounders, generate real-time 3D charts, map fish in water, and make better decisions with the user-friendly advanced mode.
          </div>
        </div>
      </div>
    </div>
  );
}