export interface IState {
  character:         ICharacter[];
  location:          ILocation[];
  episode:           IEpisode[];
  filteredCharacter: ICharacter[];
}
export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Object;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}
export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}
export interface IRickState {
  character: ICharacter[],
  location: ILocation[],
  episode: IEpisode[],
  filteredCharacter: ICharacter[],
  ADD_CHARACTERS:(characterList : ICharacter[])=>void,
  ADD_LOCATIONS:(characterList : ILocation[])=>void,
  ADD_EPISODE:(characterList : IEpisode[])=>void,
  FILTER_CHARACTERS:(search:string)=>void,
}
export interface IStateComponentProps {
  characterdata: ICharacter[];
  locationdata: ILocation[];
  episodedata: IEpisode[];
}
export interface IQueryComponentProps {
  characterdata: ICharacter[];
}
export interface ICharacterCartProps {
  filteredCharacter:ICharacter;
}
export enum Species {
  Alien = "Alien",
  Human = "Human",
}
export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
export interface Observer {
  close(): void;
}
export interface IPwaModal {
  showInstallModal:boolean,
  closeHandler(): void ,
  installHandler(): void
}