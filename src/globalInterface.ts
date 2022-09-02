export interface pokemon {
    id:number,
    name:string, 
    url:string,
    sprites: {
      front_default:string
    }
  }

  export interface PokemonDetail extends pokemon {
    abilities?: {
      ability:string;
      name:string;
    }[];
  }  