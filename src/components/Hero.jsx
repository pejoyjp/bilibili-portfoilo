import React, { Suspense } from 'react'
import Navbar from './Navbar'
import {Canvas} from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import {AiOutlineSearch,AiOutlineLine} from 'react-icons/ai'



const Hero = () => {
  return (
    <div className="snap-center flex flex-col items-center justify-between h-[200vh] md:h-screen">
      <Navbar/>
      <div className="h-full w-full flex snap-center justify-center flex-col p-3 items-center md:w-[1400px] md:justify-between md:flex-row">
        <div className="md:w-2/5 md:items-center md:h-full justify-center flex flex-col gap-4 h-screen">
          <p className="text-7xl font-bold leading-tight">
            一个很酷的前端开发人员
          </p>
          <div className="flex gap-2 w-full">
            <AiOutlineLine size={30}/>
            <p className="text-pink-500 text-2xl">
              What I do?
            </p>
          </div>
          <p className="text-neutral-200">
            主要用HTML/CSS/JavaScript/Flash等各种Web技术进行产品的界面开发和制作标准优化的代码，并增加交互动态功能；
          </p>
          <button className="w-[120px] p-3 bg-pink-500 text-white text-sm border-none rounded-md cursor-pointer">
            了解更多
          </button>
        </div>
        <div className="md:w-3/5 relative w-full md:h-full h-screen">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <img src="./img/goku.png" alt="goku" className="w-[800px] h-[600px] object-contain absolute inset-0 m-auto" />
        </div>
      </div>
    </div>
  
  )
}

export default Hero