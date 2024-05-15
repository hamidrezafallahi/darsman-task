import Link from "next/link";
export default async function Home() {
  return (
    <main className="container text-center w-full h-72 border mx-auto my-24 flex flex-col justify-around">
      <h2>نمایش دیتا به دو صورت میباشد </h2>
      <div className="w-full flex justify-evenly items-center">
      <Link className="px-4 py-2 bg-blue-400 hover:text-white hover:bg-blue-600 rounded-xl" href='/zustand'>state managment</Link>
      <Link className="px-4 py-2 bg-blue-400 hover:text-white hover:bg-blue-600 rounded-xl" href='/query'>fetch by revalidating</Link>
      </div>
    </main>
  );
}
