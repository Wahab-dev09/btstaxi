'use client'
import { memo} from 'react';
import type { Stat } from './WhyUsData';


const WhyUsStat = memo(({ stat }: { stat: Stat }) => {

  return (
    <div className="flex w-32 sm:32.5 flex-col justify-center items-center">
      <p className="text-3xl sm:text-4xl tracking-tighter font-semibold">{stat.value}</p>
      <p className="text-neutral-700 text-center text-base tracking-tight mt-2">{stat.label} </p>
    </div>
  );
});

WhyUsStat.displayName = 'WhyUsStat';
export default WhyUsStat;
