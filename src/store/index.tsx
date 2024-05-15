import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ICharacter, ILocation,IEpisode, IRickState } from "@/types";

export const useStore = create<IRickState>()(
  persist(
    (set, get) => ({
      character:[],
      location:[],
      episode: [],
      filteredCharacter:[],
      ADD_CHARACTERS: (characterList : ICharacter[]) => {
        set((state:IRickState) => ({
          ...state,
          character: characterList,
        }));
      },
      ADD_LOCATIONS: (locationList : ILocation[]) => {
        set((state:IRickState) => ({
          ...state,
          location: locationList,
        }));
      },
      ADD_EPISODE: (episodeList : IEpisode[]) => {
        set((state:IRickState) => ({
          ...state,
          episode: episodeList,
        }));
      },
      FILTER_CHARACTERS:(search:string) => {
        set((state:IRickState) => ({
          ...state,
          filteredCharacter: state.character.filter((item:ICharacter)=> item.name.toLowerCase().includes(search)),
        }));
      },
    }),
    {
      name: "ricky data",
    }
  )
);
//////////////////////////////////////////////////////////////////////////////////
