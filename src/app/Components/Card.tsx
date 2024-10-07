import React from 'react'
import HIW from './HIW'
import Button from './Button'
import Button2 from './Button2'
import Button3 from './Button3'

const card = () => {
  return (
    <section id='Pricing' className=' items-center justify-center max-w-[1640px] mx-auto p-4 py-12'>
        <HIW title="Pricing" />
        <div className=' text-center mx-auto '>
          <h2 className=' font-semibold text-blue-700 text-4xl mt-5'>Choose a Plan That Fits</h2>
          <div className='container mx-auto md:grid grid-cols-3 gap-10 object-cover rounded-xl mt-14 mb-10'>
            <div className=' container mx-auto bg-blue-100 text-gray-700  shadow-md mb-5'>
              <div className='mt-2 mb-3'>Basic Plan</div>
                <h2>
                  <div className='mb-2'><span className='text-orange-600 text-4xl font-bold'>$5</span> monthly</div>
                  <ul className='justify-center items-center'>
                    <li className='mb-1'>10 team members</li>
                    <li className='mb-1'>PR tracking and notifications</li>
                    <li className='mb-1'>Standard customization</li>
                    <li className='mb-16'>Email support</li>
                  </ul>
                </h2>
                <div className='text-white'>
                   <Button link="#" text="Read More" />
                </div>
            </div>
            <div className='container mx-auto text-gray-700 bg-blue-200 shadow-md mb-5'>
              <div className='mt-2 mb-3'>Pro Plan</div>
              <h2>
                <div className='mb-2'><span className='text-blue-600 text-4xl font-bold'>$10</span> monthly</div>
                  <ul className='justify-center items-center'>
                    <li className='mb-1'>Unlimited team members</li>
                    <li className='mb-1'>Advanced PR lifetime tracking</li>
                    <li className='mb-1'>Real-time notifications for multiple channels</li>
                    <li className='mb-10'>Basic analytics and reporting</li>
                  </ul>
              </h2>
              <div className='mb-2 text-white'>
                   <Button2 link="#" text="Read More" />
              </div>
            </div>
            <div className='container mx-auto text-gray-700 bg-blue-300 shadow-md mb-5'>
            <div className='mt-2 mb-3'>Business Plan</div>
                <h2>
                  <div className='mb-2'><span className='text-black-600 text-4xl font-bold'>$25</span> monthly</div>
                  <ul className='justify-center items-center'>
                    <li className='mb-1'>All Pro features</li>
                    <li className='mb-1'>Advanced analytics and custom reports</li>
                    <li className='mb-1'>Strict prioritization features</li>
                    <li className='mb-4'>Priority email and chat support</li>
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