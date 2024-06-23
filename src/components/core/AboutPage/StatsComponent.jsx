import React from 'react';

const stats = [
    {count: '5K', label: "Active Students"},
    {count: '10+', label: "Mentors"},
    {count: '200+', label: "Courses"},
    {count: '50+', label: "Awards"},
]

const StatsComponent = () => {
  return (
    <section className='bg-[#161D29] h-[254px] flex items-center justify-center mb-[100px]'>
        <div className='w-11/12 mx-auto max-w-maxContent '>
            <div className='flex gap-x-5 justify-between'>
                {
                    stats.map((data, i) => {
                        return(
                            <div kry={i} className='flex flex-col gap-[12px] font-inter p-12'>
                                <h1 className='font-[700] text-[30px] leading-[38px] text-center text-[#F1F2FF]'>
                                    {data.count}
                                </h1>
                                <p className='font-[600] text-[16px] leading-[24px] text-center text-[#585D69] '>
                                    {data.label}
                                </p>
                            </div>
                        )
                    })
                }    
            </div>    
        </div>      
    </section>
  )
}

export default StatsComponent
