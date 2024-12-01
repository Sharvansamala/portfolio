import React from 'react'

import GO from '../assets/go.png'
import git from '../assets/github.png'
import aws from '../assets/aws.png'
import docker from '../assets/doc.png'
import k8 from '../assets/kube.png'
import actions from '../assets/github-actions.png'
import terraform from '../assets/terraform.png'
import ansible from '../assets/ans.png'
import Java from "../assets/java.png"
import spring from "../assets/spring-boot.png"
import sql from "../assets/sql.png"
import javascript from "../assets/javascript.png"


const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#15434e] '>Skills</p>
                    <p className='py-4'>These are the technologies I've Worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-10'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='h-20 w-15 mx-auto text-center' src={Java } alt="java icon" />
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='h-20 w-15 mx-auto text-center' src={spring} alt="spring icon" />
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='h-20 w-15 mx-auto text-center' src={javascript} alt="javascript icon" />
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto text-center' src={git} alt="git icon" />
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto text-center' src={aws} alt="aws icon" />
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto text-center' src={docker} alt="docker icon" />
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto text-center' src={GO} alt="go icon" />
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto text-center' src={sql}  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills