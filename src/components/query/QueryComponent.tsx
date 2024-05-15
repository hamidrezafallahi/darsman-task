"use client";
import React, { useEffect, useState } from "react";
import { ICharacter, IQueryComponentProps } from "@/types";
import CharacterCart from "../zustand/CharacterCart";
import Image from "next/image";
import notFound from "../../../public/notfound.gif";
import searchImage from "../../../public/searching.gif";

const QueryComponent: React.FC<IQueryComponentProps> = ({ characterdata }) => {
  // initialize necessery state
  const [search, setSearch] = useState("");
  const [pending, setPending] = useState(false);
  const [debouncing, setDebouncing] = useState(false);
  const [first, setFirst] = useState(false);
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [speciesFilter, setSpeciestFilter] = useState("");
  const [fetchResult, setFetchResult] = useState(characterdata);
  const Genders = ["female", "male", "unknown"];
  const Status = ["alive", "dead", "unknown"];
  const Species = ["Human", "Alien"];
  // fetch filtered and characters data from API
  const filterChars = async (search: string) => {
    // make url from filters to params
    let url = "https://rickandmortyapi.com/api/character/?";
    if (search) {
      url += `name=${search}`;
    }
    if (genderFilter) {
      url += `&gender=${genderFilter}`;
    }
    if (statusFilter) {
      url += `&status=${statusFilter}`;
    }
    if (speciesFilter) {
      url += `&species=${speciesFilter}`;
    }
    // fetch data from API
    setPending(true);
    const res = await fetch(url, {
      next: {
        revalidate: 3600,
        tags: [genderFilter, statusFilter, speciesFilter],
      },
    });
    if (res.status === 404) {
      setFetchResult([]);
      setPending(false);
      return;
    }
    const resultCompelete = await res.json();
    setFetchResult(resultCompelete.results);
    setPending(false);
  };
  //  debounce fetching by 2000ms delay
  useEffect(() => {
    if (first) {
      setDebouncing(true);
      const timer = setTimeout(() => {
        const trimedSearch = search.trim();
        filterChars(trimedSearch);
        setDebouncing(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
        setDebouncing(false);
      };
    }
    setFirst(true);
  }, [search, genderFilter, statusFilter, speciesFilter]);
  return (
    <>
      {/* NAVBAR */}
      <nav className="container mx-auto w-full  border mb-10 rounded-xl bg-green-800 pt-3 ">
        <div className="flex justify-center items-center relative">
          <input
            dir="rtl"
            type="text "
            placeholder="جستجو..."
            className="w-2/3 p-2 rounded-md"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          {debouncing && (
            <span className="absolute left-10">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-6 h-6 text-gray-200 animate-spin fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </span>
          )}
        </div>
        <div className="text-center m-2  w-2/3 mx-auto flex justify-evenly items-center">
          <div className="max-w-sm mx-auto">
            <select
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={(e) => {
                setGenderFilter(e.target.value);
              }}
            >
              <option value="">gender</option>
              {Genders &&
                Genders.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
          <div className="max-w-sm mx-auto">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={(e) => {
                setStatusFilter(e.target.value);
              }}
            >
              <option value="">status</option>
              {Status &&
                Status.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
          <div className="max-w-sm mx-auto">
            <select
              onChange={(e) => {
                setSpeciestFilter(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option value="">species</option>
              {Species &&
                Species.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </nav>
      {/* MAIN  OR BODY */}
      <div className="flex justify-evenly items-center flex-wrap gap-4">
        {pending ? (
          <div className="w-full h-full  flex flex-col justify-start items-center">
            <Image src={searchImage} alt="not found" width={300} height={300} />
            <p>در حال جستجو</p>
          </div>
        ) : fetchResult && fetchResult.length > 0 ? (
          fetchResult.map((item: ICharacter) => {
            return <CharacterCart key={item.id} filteredCharacter={item} />;
          })
        ) : (
          <div className="w-full h-full  flex flex-col justify-start items-center">
            <Image src={notFound} alt="not found" width={300} height={300} />
            <p>موردی پیدا نشد</p>
          </div>
        )}
      </div>
    </>
  );
};
export default QueryComponent;
