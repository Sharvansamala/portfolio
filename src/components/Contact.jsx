import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className=' w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form action="https://getform.io/f/f2d142b6-a189-496e-b593-e394103cda4d" method='POST' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#15434e] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an email -sharvann9999@gmail.com</p>
                </div>
                <input type="text" placeholder='Name' name='name' className='bg-[#ccd6f6] p-2' required/>
                <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]' required/>
                <textarea name="message" className='bg-[#ccd6f6] p-2' placeholder='Message' rows="10" required></textarea>
                <button className='text-white border-2 hover:bg-[#15434e] hover:border-[#15434e] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact