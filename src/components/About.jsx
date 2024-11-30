import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#15434e]'>About</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-5xl font-bold '>
                        <p>Hi. I'm Sharvan ,nice to meet you. Please take a look around.</p>
                    </div>
                    <div className='sm:text-left text-1xl'>
                        <p>I am a Full Stack Web Developer with a strong foundation in object-oriented programming, 
                            currently pursuing a Master’s in Information Systems and Technology at the University of 
                            North Texas. With expertise in AWS, Java, Spring Boot, MySQL and Go Lang. I focus 
                            on creating scalable and efficient software solutions. My experience spans full-stack 
                            development, microservices, and system design and I have successfully deployed multiple 
                            projects on AWS. I am passionate about software design and continuously seek opportunities 
                            to grow and contribute to innovative technologies.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
