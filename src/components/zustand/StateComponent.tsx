"use client";
import React, { useEffect, useState } from "react";
import {ICharacter, IStateComponentProps } from "@/types";
import { useStore } from "@/store";
import CharacterCart from "./CharacterCart";

const StateComponent: React.FC<IStateComponentProps> = ({
  characterdata,
  locationdata,
  episodedata,
}) => {
// add serverside data into zustand store
  useStore.getState().ADD_CHARACTERS(characterdata);
  useStore.getState().ADD_LOCATIONS(locationdata);
  useStore.getState().ADD_EPISODE(episodedata);
// fetch filtered and characters data from state
  const filteredCharacter = useStore.getState().filteredCharacter;
  const characters = useStore.getState().character;
  // initialize necessery state  
  const [search, setSearch] = useState("");
  const [debounce, setDebounce] = useState(false);
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [speciesFilter, setSpeciestFilter] = useState("");
  // initialize filter action from state
  const FILTER_CHARACTERS = useStore.getState().FILTER_CHARACTERS;
  // action call function
  const filterChars = async (search: any) => {
    FILTER_CHARACTERS(search);
  };
  // make unique genders & status & species
  const uniqueGenders = [...new Set(characters.map((item:ICharacter) => item.gender))];
  const uniqueStatus = [...new Set(characters.map((item:ICharacter) => item.status))];
  const uniqueSpecies = [...new Set(characters.map((item:ICharacter) => item.species))];
//  debounce fetching by 2000ms delay
  useEffect(() => {
    setDebounce(true);
    const timer = setTimeout(() => {
      const trimedSearch = search.trim()
      filterChars(trimedSearch);
      setDebounce(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
      setDebounce(false);
    };
  }, [search]);
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
          {debounce && (
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
              {uniqueGenders &&
                uniqueGenders.map((item, index) => (
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
              {uniqueStatus &&
                uniqueStatus.map((item, index) => (
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
              {uniqueSpecies &&
                uniqueSpecies.map((item, index) => (
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
        {filteredCharacter &&
          filteredCharacter.map((item:ICharacter) => {
            let template = item;
            if (genderFilter && item.gender !== genderFilter) {
              return;
            }
            if (statusFilter && item.status !== statusFilter) {
              return;
            }
            if (speciesFilter && item.species !== speciesFilter) {
              return;
            }
            return <CharacterCart key={item.id} filteredCharacter={template} />;
          })}
      </div>
    </>
  );
};
export default StateComponent;
