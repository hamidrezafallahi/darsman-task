import StateComponent from '@/components/zustand/StateComponent'
import React from 'react'
import { ICharacter, ILocation, IEpisode } from "@/types";
export default async function page() {
    const RICKY_URL="https://rickandmortyapi.com/api/"
    const character = await fetch(`${RICKY_URL}character`, {
          next: { revalidate: 3600 },
        });
        const characterCompelete = await character.json();
        const characters = characterCompelete.results;
        const characterdata:ICharacter[] = characters;
    const location = await fetch(`${RICKY_URL}location`, {
          next: { revalidate: 3600 },
        });
        const locationCompelete =  await location.json();
        const locations = locationCompelete.results;
        const locationdata:ILocation[] =locations;
    const episode = await fetch(`${RICKY_URL}episode`, {
          next: { revalidate: 3600 },
        });
        const episodeCompelete = await episode.json();
        const episodes = episodeCompelete.results;
        const episodedata:IEpisode[] = episodes;
  return (
    <StateComponent  characterdata={characterdata} locationdata={locationdata} episodedata={episodedata}/>

  )
}
