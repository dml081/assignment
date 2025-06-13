import Aos from 'aos'
import React, { useEffect } from 'react'
import "aos/dist/aos.css";

const stats = [
    {
        number: "100%",
        title: "list growth",
        description: "for all paid plans in the first 30 days",
    },
    {
        number: "99%",
        title: "deliverability rate",
        description: "for 160+ countries",
    },
    {
        number: "350k+",
        title: "customers worldwide",
        description: "trust us with their email marketing",
    },
    {
        number: "24/7",
        title: "5-star rated",
        description: "support from a customer Success Team",
    },
]

const Percentage = () => {

    useEffect(() => {
        Aos.init()
    },[])

  return (
    <div data-aos="flip-left" data-aos-duration="3000" className='bg-gray-50 py-12 text-center'>
        <h2 className='text-3xl font-bold mb-10'>Why GetResponse</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto'>
            {stats.map((sam, index) => (
                <div key={index}>
                    <div className='text-4xl font-bold mb-2'>{sam.number}</div>
                    <div className='text-lg font-semibold capitalize'>{sam.title}</div>
                    <div className='text-sm text-gray-600'>{sam.description}</div>
                </div>
            ))}

           

        </div>
      
    </div>
  )
}

export default Percentage
