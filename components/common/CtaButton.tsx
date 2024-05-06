import { ReactNode } from 'react';

export default function CtaButton(
 { children, additionalClasses }:
 { children: ReactNode, additionalClasses?: string }
) {
  return (
    <button className={`
      bg-transparent border-white border border-0.5
      rounded-full gap-2 px-6 py-3
      mt-4 sm:mt-0 sm:ml-4
      bg-blue-500 text-white
      flex items-center
      ${additionalClasses}
    `}>
      { children }
    </button>
  )
}