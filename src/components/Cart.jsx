import React from 'react'

const Cart = () => {
  return (
    <div className='p-20 flex gap-4'>
        <a className='bg-slate-100 border-2 hover:border-blue-400 rounded-xl p-10 text-left'>
            <img src="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1019/LogoECSPublishingGroup1-removebg-preview-1-e1721125158123.png" alt="ESC logo" className='w-16 h-10 grayscale' />
            <p className='ig:text-[24px] text-[14px] font-bold'><span className='text-blue-400'>10% list growth</span> & <br className='text-black'/>sales spike in tough <br/>niche </p>
            <p className='font-medium py-10'>it's nice that with GetResponse, while
                <br />have the tools and integration while 
                <br />need within our budget.</p>
                <button className='py-2 px-6 bg-blue-400 hover:bg-yellow-300 hover:text-black rounded-xl text-white font-bold'>Read case study &rarr;</button>
         </a>   

         <a className='bg-slate-100 border-2 hover:border-blue-400 rounded-xl p-10 text-left'>
            <img src="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1022/living_vision-removebg-preview-e1721125329100.png" alt="vision Logo" className='w-16 h-10 grayscale' />
            <p className='ig:text-[24px] text-[14px] font-bold p-md-5'><span className='text-blue-400'>75% of all public <br />sales</span> from email<br/>autoresponders</p>
            <p className='font-medium py-10'>Together with Getresponse, we've 
                <br />been able to convince customers of
                <br />need, culminating in compelling sales.</p>
                <button className='py-2 px-6 bg-blue-400 hover:bg-yellow-300 hover:text-black rounded-xl text-white font-bold'>Read case study &rarr;</button>
         </a>

         <a className='bg-slate-100 border-2 hover:border-blue-400 rounded-xl p-10 text-left'>
            <img src="https://us-wd.gr-cdn.com/customers/sites/16/2024/07/1025/red-hot-logo1_-removebg-preview-e1721125532901.png" alt="RedHot Logo" className='w-16 h-10 grayscale' />
            <p className='lg:text-[24px] text-[14px] font-bold'><span className='text-blue-400'>Up to $1,000</span> for <br />every 1,000 emails <br/>sent </p>
            <p className='font-medium py-10'>Regarding revenue contribution, the
                <br />email marketing channel is like free 
                <br />money for us.</p>
                <button className='py-2 px-6 bg-blue-400 hover:bg-yellow-300 hover:text-black rounded-xl text-white font-bold'>Read case study &rarr;</button>
         </a>
      
    </div>
  )
}

export default Cart
