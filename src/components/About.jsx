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
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi. I'm Sharvan ,nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>I am a recent graduate with a IST degree and a strong interest in DevOps engineering.
                            Skilled in automating software deployment and testing processes using Jenkins, Git, and Docker. Proficient in Linux.
                            I am seeking a DevOps Engineer position that allows me to utilize my problem-solving skills and learn more about this field.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
