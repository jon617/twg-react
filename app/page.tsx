import {
  Features,
  Footer,
  FSeries,
  HeroText,
  ImageBoxes,
  LatestNews,
  Testimonials,
  TopNav,
  Welcome,
} from '@/components';

// import Image from "next/image";

const DEBUG = false;

export default function Home() {
  return (
    <main className={`
      bg-black text-white
      font-neue font-sans text-neue text-sans
    `}>
      <div className="w-full h-screen">
        <div className="bg-hero-image h-screen w-full flex flex-col bg-cover bg-center p-4 sm:p-5 lg:p-7">
          <TopNav debug={DEBUG} />
          <HeroText debug={DEBUG} />
        </div>
      </div>
      <div className="w-full">
        <Welcome debug={DEBUG} />
      </div>
      <div className="w-full">
        <FSeries debug={DEBUG} />
      </div>
      <div className="w-full">
        <Features debug={DEBUG} />
      </div>
      <div className="w-full">
        <Testimonials debug={DEBUG} />
      </div>
      <div className="w-full">
        <LatestNews debug={DEBUG} />
      </div>
      <div className="w-full">
        <ImageBoxes debug={DEBUG} />
      </div>
      <div className="w-full">
        <Footer debug={DEBUG} />
      </div>
    </main>
  );
}
