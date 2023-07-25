import React from 'react'
import Logo from '/img/logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-center w-full'>
        <div className='flex justify-between items-center w-full p-10 py-4 md:w-[1400px] '>
            <div className='flex items-center gap-[50px]'>
                <img src={Logo} alt='logo' className='w-[80px]'/>
                <div className='hidden md:flex md:gap-[20px] md:list-none'>
                    <div className='cursor-pointer'>
                        主页
                    </div>
                    <div className='cursor-pointer'>
                        作品
                    </div>
                    <div className='cursor-pointer'>
                        联系方式
                    </div>
                </div>
            </div>

            <div>
                <button className='w-[120px] p-3 bg-pink-500 text-white text-sm
                                    border-none rounded-md cursor-pointer'>
                    给我一份工作
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar