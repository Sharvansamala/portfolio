import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-white text-2xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-8xl font-bold text-[#ccd6f6]'>Sharvan Samala</h1>
                <h2 className='text-4xl sm:text-8xl font-bold text-[#8892b0]'>I'm a Software Engineer.</h2>
                <p className='text-[#8992b0] py-5 max-w-700px text-2xl'>I am a Full Stack Web Developer with expertise in AWS, Java, Python and Microservices, 
                    currently pursuing a Master’s in Information Systems and Technology.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#15434e] hover:border-[#15434e]' >
                    <Link className='group' to="work" smooth={true} duration={500} >
                         View Work
                    </Link>
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home
