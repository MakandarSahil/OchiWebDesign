import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full py-20 bg-[#004D43] rounded-t-4xl'>
      <div className="text font-['textStruct'] uppercase text-5xl md:text-8xl lg:text-9xl leading-[48px] md:leading-[95px] font-semibold flex whitespace-nowrap overflow-hidden border-t-2 border-b-2 boder-zinc-300">
        <h1 className='text-[120px] lg:text-[18vw] leading-none lg:-mb-8'>We are ochi</h1>
        <h1 className='text-[120px] lg:text-[18vw] leading-none lg:-mb-8'>We are ochi</h1>
      </div>
    </div>
  )
}

export default Marquee