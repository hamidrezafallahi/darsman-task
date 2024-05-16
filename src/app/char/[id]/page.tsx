"use client";
import { config } from '@/Constants';
import { useStore } from "@/store";
import { ICharacter, IEpisode } from "@/types";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
 function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const URL = config.url;
  const [episode, setEpisode] = useState("");
  const [episodeData, setEpisodeData] = useState({});
  const [episodeDataUrls, setEpisodeDataUrls] = useState([]);
  const [episodeDataCharacterUrls, setEpisodeDataCharacterUrls] = useState([]);
  const [char, setChar] = useState<ICharacter>();
  const allEpisodes = useStore.getState().episode;

  const fetchTarget = async (id: number) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const resdata = await res.json();
    setChar(resdata);
  };
  const fetchEpisode = async () => {
    const res = await fetch(episode);
    const resultdata = await res.json();
    setEpisodeData(resultdata);
    setEpisodeDataUrls(resultdata.characters);
  };
  async function fetchEpisodeCharacters() {
    const fetches = episodeDataUrls.map((url) => fetch(url));
    const responses = await Promise.all(fetches);
    const data = await Promise.all(
      responses.map((response) => response.json())
    );
    let chars: any = [];
    data.map((item) => chars.push(item.image));
    setEpisodeDataCharacterUrls(chars);
  }
  useEffect(() => {
    fetchEpisodeCharacters();
  }, [episodeData]);
  useEffect(() => {
    if(!episode){return setEpisodeDataCharacterUrls([])}
    fetchEpisode();
  }, [episode]);
  useEffect(() => {
    fetchTarget(Number(id));
  }, []);
  useEffect(()=>{},[episodeDataCharacterUrls])
  return (
    <>
      {char && (
        <div className="container  mx-auto my-10 rounded-2xl border overflow-hidden max-w-[300px] sm:max-w-none flex flex-col sm:flex-row justify-between ">
          <div className="w-full flex justify-center items-center sm:justify-start">
          <Suspense fallback={<div>loading...</div>}>
            <Image src={char.image} alt={char.name} width={300} height={300} />
            </Suspense>
          </div>
          <div className="w-full text-center">
            <h2 className="text-xl">name:{char.name}</h2>
            <h3 className="text-lg">gender:{char.gender}</h3>
            <h4 className="text-md">species: {char.species}</h4>
            <h5 className="text-sm">status: {char.status}</h5>
            <p>location : {char.location.name}</p>
            <p>type : {char.type}</p>
            <select
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5"
              onChange={(e) => {
                setEpisode(e.target.value);
              }}
            >
              <option value="">قسمتها</option>
              {char.episode &&
                char.episode.map((item, index) => (
                  <option key={index} value={item}>
                    {item.slice(40, 43)}
                  </option>
                ))}
            </select>
          </div>
        </div>
      )}
      <div className="flex  p-2">
        <div className=" w-1/2 text-center">
          <h3 dir="rtl">۲۰ قسمت اول واکشی شده</h3>
          <div className="flex gap-1 flex-wrap justify-evenly">
            {allEpisodes &&
              allEpisodes.map((item:IEpisode, index:number) => (
                <div key={index} className=" w-40   border rounded-lg text-center bg-slate-200 p-2">
                  <h3 className="text-sm">name:{item.name}</h3>
                  <p className="text-sm">episode:{item.episode}</p>
                  <p className="text-sm">id: {item.id}</p>
                  <p className="text-sm">date:{item.air_date}</p>
                </div>
              ))}
          </div>
        </div>
        <div className=" w-1/2 text-center">
          <h3>کاراکترهای هر قسمت </h3>
          <div className="flex flex-wrap justify-evenly gap-2 ">
            {episodeDataCharacterUrls && episodeDataCharacterUrls.length > 0 ? (
              episodeDataCharacterUrls.map((item, index) => {
                let id: string | undefined = (item as string).match(/\d+/)?.[0]
                return(
                  <Link href={`${URL}/char/${id}`} key={index}>
                    <Image
                      src={item}
                      alt={item}
                      width={100}
                      height={100}
                      className="rounded-md"
                    />
                  </Link>
                )
              })
            ) :
            <p className=" pt-10">قسمتی انتخاب نشده </p>}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link
          className="px-4 py-2 bg-blue-600 border rounded-xl text-white "
          href="../"
        >
          back to home
        </Link>
      </div>
    </>
  );

}

export default PhotoPage