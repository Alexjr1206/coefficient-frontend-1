import React from 'react'
import HIW from './HIW'
import Button from './Button'
import Button2 from './Button2'
import Button3 from './Button3'

const card = () => {
  return (
    <section id='Pricing' className=' items-center justify-center max-w-[1000px] mx-auto p-4 py-12'>
        <HIW title="Pricing" />
        <div className=' text-center mx-auto '>
          <div className='container mx-auto md:grid grid-cols-3 gap-5  mt-14 mb-10'>
            <div className=' container mx-auto bg-white text-gray-700 shadow-md rounded-xl'>
              <div className='text-xl mt-4 mb-10 font-extrabold'>Basic Plan</div>
                <h2>
                  <div className='mb-2 font-semibold'><span className='text-orange-600 text-4xl font-bold'>$5</span> monthly</div>
                  <ol className='justify-center items-center'>
                    <li className='mb-1 font-semibold'>10 team members</li>
                    <li className='mb-1 font-semibold'>PR tracking and notifications</li>
                    <li className='mb-1 font-semibold'>Standard customization</li>
                    <li className='mb-8 font-semibold'>Email support</li>
                  </ol>
                </h2>
                <div className='text-white'>
                   <Button link="#" text="Read More" />
                </div>
            </div>
            <div className='container mx-auto text-gray-700 bg-white shadow-md rounded-xl '>
              <div className='text-xl mt-4 mb-3 font-extrabold'>Pro Plan</div>
              <h2>
                <div className='mb-2 font-semibold'><span className='text-blue-600 text-4xl font-bold'>$10</span> monthly</div>
                  <ul className='justify-center items-center'>
                    <li className='mb-1 font-semibold'>Unlimited team members</li>
                    <li className='mb-1 font-semibold'>Advanced PR lifetime tracking</li>
                    <li className='mb-1 font-semibold'>Real-time notifications for multiple channels</li>
                    <li className='mb-10 font-semibold'>Basic analytics and reporting</li>
                  </ul>
              </h2>
              <div className='mb-4 text-white'>
                   <Button2 link="#" text="Read More" />
              </div>
            </div>
            <div className='container mx-auto text-gray-700 bg-white shadow-md rounded-xl'>
            <div className='text-xl mt-2 mb-3 font-extrabold'>Business Plan</div>
                <h2>
                  <div className='mb-2 font-semibold'><span className='text-black-600 text-4xl font-bold'>$25</span> monthly</div>
                  <ul className='justify-center items-center'>
                    <li className='mb-1 font-semibold'>All Pro features</li>
                    <li className='mb-1 font-semibold'>Advanced analytics and custom reports</li>
                    <li className='mb-1 font-semibold'>Strict prioritization features</li>
                    <li className='mb-12 font-semibold'>Priority email and chat support</li>
                  </ul>
                </h2>
                <div className='text-white'>
                   <Button3 link="#" text="Read More" />
                </div>
            </div>
          </div>
        </div>
    </section>
  )      
}

export default card