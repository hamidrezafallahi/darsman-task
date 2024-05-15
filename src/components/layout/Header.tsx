"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NotifButton from "./NotifButton";
import PwaModal from "./PwaModal";

export default function Header() {
  const [showInstallModal,setShowInstallModal]=useState(false)
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
        setShowInstallModal(false)
      })
    }
  }
  const closeHandler = ()=>{
    setShowInstallModal(false)
  }
  useEffect(()=>{
    console.log("header rendering")
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
  },[])
  return (
    <>
      <div
        dir="rtl"
        className="container mx-auto bg-slate-100 flex justify-between items-center rounded-xl"
      >
        <Link href="https://nextjs-v14-vscommit.vercel.app">
          نمونه کار حمیدرضا فلاحی{" "}
        </Link>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 hover:text-white hover:bg-blue-600 rounded-xl"
        >
          بازگشت به خانه
        </Link>
        <NotifButton/>
        <PwaModal showInstallModal={showInstallModal} closeHandler={closeHandler} installHandler={installHandler}/>
      </div>
    </>
  );
}
