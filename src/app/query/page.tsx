
import React from 'react'
import { revalidateTag } from 'next/cache';

import { ICharacter } from "@/types";
import QueryComponent from '@/components/query/QueryComponent';
export default async function page() {
    
    const RICKY_URL="https://rickandmortyapi.com/api/"
    const character = await fetch(`${RICKY_URL}character`, {
          next: { revalidate: 3600 },
        });
        revalidateTag('male');
        revalidateTag('Alive');
        revalidateTag('Human');
        const characterCompelete = await character.json();
        const characters = characterCompelete.results;
        const characterdata:ICharacter[] = characters;
    return (
    <>
    <QueryComponent characterdata={characterdata}/>
    </>
  )

}