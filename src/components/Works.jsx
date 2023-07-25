import React, { useState } from 'react'
import Web from './Web'
import Python from './Python'
import Ui from './Ui'
import ProjectManagement from './ProjectManagement'


const data = [
    "网页开发",
    "UI/UX 设计",
    "Python",
    "项目管理"
]


const Works = () => {
    const [work,setWork] = useState("网页开发")
  return (
    <div className='h-screen snap-center flex justify-center relative text-black text-lg font-bold'>
        <div className='w-full h-full flex flex-col justify-between md:flex-row md:w-[1400px]'>

            <div className='flex-1 flex items-center justify-center p-4'>
                <div className='list-none flex flex-col gap-10'>
                    {
                        data.map((item)=>(
                            <div key={item} text={item} onClick={()=>setWork(item)}
                                    className="md:text-7xl text-3xl font-bold text-transparent cursor-pointer
                                    bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-rose-500
                                    hover:animate-ping
                            ">
                            
                                {item}
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className='flex-1'>
                    {
                        work === "网页开发" ? (
                            <Web />
                        ): work === "UI/UX 设计"?(
                            <Ui />
                        ):work === "Python"?(
                            <Python/>
                        ):(
                            <ProjectManagement/>
                        )
                    }
            </div>

        </div>
    </div>
  )
}

export default Works