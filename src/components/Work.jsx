import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import movie from '../assets/movie.png'
import realEstate from "../assets/realestate.jpg"
import tier from "../assets/3-tier.png"
import ecommerece from "../assets/ecommerce.png"
import portfolio from "../assets/portfolio.png"

const Work = () => {
  return (
    <div name="work" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#1434e]' >Projects</p>
        </div>
        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
          {/* grid item */}
          <div style={{ backgroundImage: `url(${movie})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className=' opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider sm:text-center'>
                Movie Recommender System
              </span>
              <div className='pt-8 text-center'>
                <a href="https://movie-recommender-system-sharvan.streamlit.app/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                </a>
                <a href="https://github.com/Sharvansamala/Movie-recommender-system" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${ecommerece})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Ecommerece Application - SpringBoot
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                </a>
                <a href="https://github.com/Sharvansamala/SpringBoot-Ecommerce" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                </a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${portfolio})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Portfolio
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                </a>
                {/* <a href="https://github.com/Sharvansamala/portfolio" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                </a> */}
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${tier})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* hover effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                3-Tier Web App
              </span>
              {/* <div className='pt-8 text-center'>
                 <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                </a>
              </div> */}
            </div>
          </div>

          

          {/* <div style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React js application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                </a>
              </div>
            </div>
          </div> */}

          {/* <div style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React js application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>DEMO</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>CODE</button>
                </a>
              </div>
            </div>
          </div> */}


        </div>
      </div>
    </div>
  )
}

export default Work
