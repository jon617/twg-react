import { CtaButton } from './common';
import { ComponentProps } from './types';

const buttonBaseClasses = "bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded shadow";

const ContactButton = () => (
  <CtaButton>
    Contact
    <span>
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.0035 19.3163H11.0485C10.9656 19.3163 10.8861 19.2833 10.8274 19.2247C10.7688 19.166 10.7359 19.0865 10.7359 19.0036C10.7359 18.9207 10.7688 18.8411 10.8274 18.7825C10.8861 18.7239 10.9656 18.6909 11.0485 18.6909L18.2489 18.6909L9.05979 9.50184C9.00119 9.44323 8.96826 9.36375 8.96826 9.28087C8.96826 9.19799 9.00119 9.1185 9.05979 9.0599C9.1184 9.00129 9.19788 8.96837 9.28076 8.96837C9.36364 8.96837 9.44313 9.00129 9.50173 9.0599L18.6908 18.249L18.6908 11.0486C18.6908 10.9657 18.7237 10.8862 18.7824 10.8275C18.841 10.7689 18.9206 10.736 19.0035 10.736C19.0864 10.736 19.1659 10.7689 19.2246 10.8275C19.2832 10.8862 19.3162 10.9657 19.3162 11.0486L19.3162 19.0036C19.3162 19.0447 19.3081 19.0853 19.2924 19.1233C19.2767 19.1612 19.2537 19.1957 19.2246 19.2247C19.1956 19.2538 19.1611 19.2768 19.1232 19.2925C19.0852 19.3082 19.0445 19.3163 19.0035 19.3163Z" fill="white" />
      </svg>
    </span>
  </CtaButton>
);

const NavigationList = () => {
  const items = ["Home", "Products", "About ENL", "Multibeam Technology", "News", "Resources", "Contact", "Facebook", "Instagram", "Youtube"];
  return (
    <ul className="space-y-2">
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};

export default function Footer({ debug }: ComponentProps) {
  const debugBorder = debug ? "border border-red-500" : "";

  return (
    <div className={`
      w-full h-screen pt-20 bg-black px-10
    `}>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <p className="mb-4 text-2xl">
            Dui duis facilisis id et ullamcorper<br />diam est. Vulputate ac magna in id.
          </p>
          <p className="my-20">
            <ContactButton />
          </p>
          <p className="mt-4 underline">Subscribe to our newsletter</p>
        </div>
        <div>
          <NavigationList />
        </div>
      </div>
      <div className={`
        mt-96 bg-black md:hidden
      `}>
        &nbsp;
      </div>

    </div>
 );
}