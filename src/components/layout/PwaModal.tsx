
import { IPwaModal } from '@/types'
import React from 'react'
export default function PwaModal({showInstallModal,closeHandler,installHandler}:IPwaModal) {


  return (<>
    {showInstallModal && <div className='fixed inset-0 backdrop-blur-lg flex justify-center items-center '>
        <div className='bg-white border w-1/4 min-w-[300px] min-h-[200px] rounded-xl flex flex-col gap-5 p-3 '>
            <h2 className='text-lg'>نصب برنامه</h2> 
            <p className='text-xs'>با کلیک روی دکمه برنامه را بر روی دستگاه خود نصب کنید</p>
            <div className=' flex justify-around'>
                <button onClick={installHandler} className='px-4 py-2 border rounded-lg bg-blue-400 hover:bg-blue-500 shadow-lg text-white'>نصب pwa</button>
                <button onClick={closeHandler} className='px-4 py-2 border rounded-lg bg-gray-400 hover:bg-gray-500 shadow-lg text-dark'>بستن</button>
            </div>
        </div>
        
    </div>}
     </>
  )
}
