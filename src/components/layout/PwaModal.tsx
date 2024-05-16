'use client'
import React, { useCallback, useEffect, useMemo, useState } from "react";



export const closeHandler = (setShowInstallModal:any)=>{
  setShowInstallModal(false)
}
export const sum =(a:number,b:number)=>{
  console.log(a+b)
  return a+b
}





function PwaModal() {
  const [showInstallModal,setShowInstallModal]=useState<boolean>(false)
  const[prompt,setPrompt]=useState<any>(null)




  const installHandler = ()=>{
    if(prompt){
      prompt.prompt()
      prompt.userChoice.then((ChoiceResult:any)=>{
        if(ChoiceResult.outcome === 'accepted'){
          console.log("accepted")
        }else{
          console.log("denied")

        }
        setPrompt(null)
      })
    }
  }

  useEffect(()=>{
    sum(2,3)
    console.log("first")
    const handleBeforeInstallPrompt=(event:any)=>{
      event.preventDefault();
      setPrompt(event)
      if(!window.matchMedia("(display-mode:standalone)").matches)
        {
          setShowInstallModal(true)
        }
    }
    window.addEventListener("beforeinstallprompt",handleBeforeInstallPrompt)
    return ()=>{
      window.removeEventListener("beforeinstallprompt",handleBeforeInstallPrompt)
    }
  },[showInstallModal])

  return (<>
{showInstallModal &&  <div className=' fixed bottom-0 right-0 bg-slate-300 border w-1/4 min-w-[300px] min-h-[150px] rounded-xl flex flex-col gap-5 p-3 '>
            <h2 className='text-lg'>نصب برنامه</h2> 
            <p className='text-xs'>با کلیک روی دکمه برنامه را بر روی دستگاه خود نصب کنید</p>
            <div className=' flex justify-around'>
                <button onClick={installHandler} className='px-4 py-2 border rounded-lg bg-blue-400 hover:bg-blue-500 shadow-lg text-white'>نصب pwa</button>
                <button onClick={()=>{closeHandler(setShowInstallModal)}} className='px-4 py-2 border rounded-lg bg-gray-400 hover:bg-gray-500 shadow-lg text-dark'>بستن</button>
            </div>
        </div>}
     </>
  )
}
export default React.memo(PwaModal)