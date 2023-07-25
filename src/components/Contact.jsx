import React from 'react'
import Map from './Map'
const Contact = () => {
  return (
    <div className=' h-screen snap-center'>
        <div className="w-full h-full flex justify-between gap-10 flex-row">

            <div className='flex-1 flex items-center justify-center'>
               
                <form className='flex flex-col gap-5 md:w-[500px] w-5/6'>
                    <p className=' text-3xl'>
                        联系我
                    </p>
                    <input  className='p-5 bg-neutral-200 border-none rounded-md'
                            placeholder='姓名' name='name'/>
                    <input className='p-5 bg-neutral-200 border-none rounded-md' 
                            placeholder='邮箱'/>
                    <textarea className=' p-5 border-none rounded-md bg-neutral-200 h-[250px]' placeholder="留言" />
                    <button className="w-[120px] p-3 bg-pink-500 text-white text-sm border-none rounded-md cursor-pointer">
                        发送
                    </button>
                </form>
               
            </div>

            <div className='hidden flex-1 md:flex items-center justify-center '>
                <Map />
            </div>
        </div>
    </div>
  )
}

export default Contact