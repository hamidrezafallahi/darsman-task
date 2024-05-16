import Link from "next/link";
import NotifButton from "./NotifButton";
export default function Header() {
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
      </div>

    </>
  );
}
