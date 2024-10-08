import React from 'react';
import HIW from './HIW';
import Cards from './Cards';
import Button from './Button2';
import Button3 from './Button3';


const Navbar = () => {
  return (
    <section id='How-it-works' className='bg-blue-50'>
          <section className='items-center justify-center max-w-[1000px]  mx-auto p-4 py-12 bg-blue-50'>
        <HIW title="How-It-Works" />
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-20 px-20 py-12'>
          <Cards image="/assets/hourglass.jpg"/>
          <h1>
            <span className='text-3xl md:text-xl lg:text-4xl font-extrabold text-red-500'>
              Pull Request Lifetime Tracking
            </span>
            <div className='text-xl md:text-xl lg:text-xl  text-gray-400 mt-10 md:mt-3 mb-5'>
              Monitor the entire lifecycle of your pull requests, from creation to merging the requests.
            </div>
            <div className='lg:mt-2'>
              <div className='text-white'>
                <Button link="#" text="Read More" />
              </div>
            </div>
          </h1>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-20 px-20 py-12'>
          <h1>
            <span className='text-3xl md:text-xl lg:text-4xl font-extrabold text-blue-950'>
              Real-time Slack Notifications
            </span>
            <div className='text-xl md:text-xl lg:text-xl  text-gray-400  mt-10 md:mt-3 mb-5'>
              Stay informed with instant Slack notifications for all PR activities.
            </div>
            <div className='flex mt-5 md:mt-2 lg:mt-10'>
              <div className='text-white'>
                <Button3 link="#" text="Read More" />
              </div>
            </div>
          </h1>
          <Cards image="/assets/clock.jpg" />
        </div>
          </section>
    </section>
    
  );
};

export default Navbar;
