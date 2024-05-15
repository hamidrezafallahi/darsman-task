"use client";
import React from "react";
import { ICharacterCartProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const CharacterCart: React.FC<ICharacterCartProps> = ({ filteredCharacter }) => {
  return (
    <Link   key={filteredCharacter.id} href={`/char/${filteredCharacter.id}`} passHref
    className="border-2 border-slate-950 rounded-xl overflow-hidden">
      <div className="container overflow-hidden">
        <Image
        className="hover:scale-125 transition-all duration-300"
          src={filteredCharacter.image}
          alt={filteredCharacter.name}
          width={200}
          height={200}
        />
      </div>
      <div className="p-2 text-center  ">
        <h3>{filteredCharacter.name}</h3>
        <p>gender:{filteredCharacter.gender}</p>
        <p>status:{filteredCharacter.status}</p>
        <h5>species:{filteredCharacter.species}</h5>
      </div>
    </Link>
  );
};
export default CharacterCart;
