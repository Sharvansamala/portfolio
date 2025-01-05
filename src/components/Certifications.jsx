import React from 'react'
import solutions from "../assets/solutions.png"


const Certifications = () => {
    return (
        <div name="Certifications" className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#1434e]' >Certifications</p>
                </div>
                {/* container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                    {/* grid item */}
                    <div style={{ backgroundImage: `url(${solutions})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* hover effects */}
                    {/* <div className=' opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider sm:text-center'>
                            
                        </span>
                    </div> */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Certifications
