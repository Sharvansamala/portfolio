import React from 'react'

import GO from '../assets/go.png'
import git from '../assets/github.png'
import aws from '../assets/aws.png'
import docker from '../assets/doc.png'
import k8 from '../assets/kube.png'
import actions from '../assets/github-actions.png'
import terraform from '../assets/terraform.png'
import ansible from '../assets/ans.png'


const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#15434e] '>Skills</p>
                    <p className='py-4'>These are the technologies I've Worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto text-center' src={GO} alt="GoLang icon" />
                        <p>Golang</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto text-center' src={git} alt="git icon" />
                        <p>git</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto text-center' src={aws} alt="aws icon" />
                        <p>aws</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto text-center' src={docker} alt="docker icon" />
                        <p>Docker</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto text-center' src={k8} alt="Kubernetes icon" />
                        <p>Kubernetes</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto text-center' src={actions} alt="GitHub Actions icon" />
                        <p>GitHub Actions</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto text-center' src={terraform} alt="Terraform icon" />
                        <p>Terraform</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto text-center' src={ansible} alt="Ansible icon" />
                        <p>Ansible</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills