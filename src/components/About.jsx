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
                        <p>Hi. I'm Sharvan ,nice to meet you;</p>
                    </div>
                    <div className='sm:text-left text-1xl'>
                        <p>I am a Software Developer with a strong foundation in object-oriented programming and expertise 
                            in Java, Spring Boot, Go, MySQL, and AWS. I specialize in building scalable, high-performance 
                            backend systems and microservices. With hands-on experience in designing robust architectures, 
                            developing RESTful APIs, and deploying cloud-native applications on AWS, I focus on creating 
                            efficient and reliable software solutions. Passionate about backend engineering and software 
                            design, I continually seek opportunities to grow and contribute to innovative technologies.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
