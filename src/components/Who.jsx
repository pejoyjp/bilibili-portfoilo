import React,{Suspense} from 'react'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {AiOutlineLine} from 'react-icons/ai'

import Cube from './Cube';

const Who = () => {
  return (
    <div className='h-screen snap-center flex justify-center'>
        <div className='h-full snap-center w-[1400px] flex justify-between'>
            <div className='md:basis-1/2 hidden md:block'>
                <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                    <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[3, 2, 1]} />
                        <Cube />
                    <OrbitControls enableZoom={false} autoRotate />
                    </Suspense>
                </Canvas>
            </div>

            <div className='md:basis-1/2 flex  justify-center flex-col gap-5 
                            md:items-start    items-center w-full text-center md:text-start'>
                <p className='text-6xl text-white font-bold'>
                    我的一些基本信息
                </p>
                <div className="flex gap-2 w-full justify-center md:justify-start">
                    <AiOutlineLine size={30}/>
                    <p className="text-pink-500 ">
                        What am I?
                    </p>
                   
                </div>
                <p className='text-neutral-200 text-xl'>
                        一个幽默胖子
                </p>

                <button className='w-[140px] p-3 bg-pink-500 text-white text-sm 
                                    border-none rounded-md cursor-pointer'>
                    获取的我的简历
                </button>
                
            </div>
        </div>
    </div>
  )
}

export default Who