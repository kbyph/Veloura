'use client';

import CountUp from 'react-countup';

const statsData = [
    {
        value: 1.2,
        type: 'Hotels',
        unit: 'k',
    },
    {
        value: 4.8,
        type: 'Rooms',
        unit: 'k',
    },
    {
        value: 186,
        type: 'Countries',
        unit: '',
    },
];

const Stats = () => {
  return (
    <div classNAme='flex flex-col xl:flex-row gap-x-8 gap-y-4 my-10'>
        {statsData.map((item, index) => {
            return (
                <div key={index} className='flex'>
                    <div className='flex items-baseline gap-x-2'>
                        <h3 className='h3 text-soft_green'>
                            {/*Checks if item.value is a decimal number*/}
                            <CountUp 
                                start={0} 
                                end={item.value} 
                                decimals={item.value % 1 !== 0 ? 1 : 0}
                                duration={6} 
                            />
                            <span>{item.unit}</span>
                        </h3>
                        <div className='text-black font-semibold'>{item.type}</div>
                    </div>
                </div>
            );    
        })}
    </div>
  );
};

export default Stats;