'use client'
import { Observer } from '@/types';
import React from 'react'
export default function NotifButton() {
    const notif = () => {
        Notification.requestPermission().then((perm) => {
          if (perm === "granted") {
            const notification = new Notification("حمیدرضا فلاحی", {
              body: "این یک نمونه تست است ",
              data: { datatest: "test data" },
              icon: "/vercel.svg",
              tag:"welcome message"
            });
            notification.addEventListener("click", (e) => console.log(e.target));
          }
        });
      };
      // let backnotification :Observer
      // document.addEventListener("visibilitychange",()=>{
        // if(document.visibilityState === 'hidden'){
        //   const leaveDate:Date = new Date()
        //   var interval = setInterval(()=>{
        //     backnotification = new Notification("لطفا به نمونه کار برگردید ",{
        //       body: `شما صفحه نمونه کار را برای ${((new Date - leaveDate)/1000).toFixed()} ثانیه ترک کردید `,
        //       icon: "/vercel.svg",
        //       tag:"come back"
        //     })
    
        //   },1000)
        // }else{
          // if(interval) clearInterval(interval)
          // if(backnotification) backnotification.close()
        // }
      // })
  return (
    <button
    onClick={notif}
    className="px-4 py-2 bg-blue-500 hover:text-white hover:bg-blue-600 rounded-xl"
  >
    push notification{" "}
  </button>
  )
}
