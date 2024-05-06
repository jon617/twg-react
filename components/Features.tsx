import { ComponentProps } from './types';

const FeatureButton = (
  { id, label, isActive }:
  { id: string, label: string, isActive: boolean }
) => {
  const buttonClasses = "border border-white text-white rounded-full p-2";
  const activeClasses = "border border-white text-black bg-white rounded-full p-2";
  return (
    <button
      className={ isActive ? activeClasses : buttonClasses }
    >
      <span>
        { id }
      </span>
      &nbsp;&nbsp;
      <span>
        { label }
      </span>
    </button>
  )
}

export default function FSeries({ debug }: ComponentProps) {
  const debugBorder = debug ? "border border-red-500" : "";
  const featureButtons = [
    { id: '01', label: 'High Resolution Chirp Sounder' },
    { id: '02', label: '120° side to side coverage' },
    { id: '03', label: 'Realtime CDX Mapping' },
    { id: '04', label: 'Realtime 3D View CDX' },
    { id: '05', label: 'Backscatter license' },
    { id: '06', label: 'High Resolution Side Scan' },
    { id: '07', label: 'Third-Party Software Integration' },
    { id: '08', label: 'Multiple WASSP Transducers' },
  ];
  const activeFeatureId = featureButtons[7].id; // Assuming the last feature is active
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col lg:flex-row p-8">
        <div className="flex-none lg:w-1/4 mb-6 lg:mb-0">
          <h2 className="text-xl font-norwester font-bold uppercase tracking-wider">
            Features
          </h2>
        </div>
        <div className="flex-1">
          {/* features buttons */}
          <div className={`
            flex flex-wrap gap-4 justify-start
            ${debugBorder}
          `}>
            { 
              featureButtons.map( (featureButton) => {
                const { id, label } = featureButton;
                return (
                  <FeatureButton
                    key={ id }
                    id={ id }
                    label={ label }
                    isActive={ id === activeFeatureId }
                  />
                )
              } )
            }
          </div>
          <div className="font-neue pt-8">
            08
          </div>
          <div className="font-neue text-4xl pt-8">
            Multiple WASSP Transducers
          </div>
          <div className="font-neue pt-2">
            Lorem ipsum dolor sit amet consectetur. Arcu commodo nibh elementum facilisis tellus. Sit malesuada volutpat ut eget. Quis purus commodo enim auctor libero malesuada. Ornare facilisis pharetra tortor mi ac elementum leo sed mi. Quis dui proin mi ipsum enim. 
          </div>
        </div>
      </div>
   </div>
  );
}