import { Detail } from "../App";
import { pokemon, PokemonDetail } from "../globalInterface";
import PokemonList from "./PokemonList";

interface Props{
    pokemons: PokemonDetail[];
    viewDetail: Detail
    setViewDetail: React.Dispatch<React.SetStateAction<Detail>>
}
const PokemonCollection:React.FC<Props> = (props) => {
    const {pokemons, viewDetail, setViewDetail } = props
    const selectPoke = (id:number) =>{
        if (!viewDetail.isOpened) {
            setViewDetail({
              id: id,
              isOpened: true,
            });
          }
    }
    return (
        <section className="pokemon-container">
            {
                pokemons.map((pokemon) => (
                    <div className="" onClick={ () => selectPoke(pokemon.id)}>

                        <PokemonList name={pokemon.name} viewDetail={viewDetail} setViewDetail={setViewDetail} abilities={pokemon.abilities} id={pokemon.id} key={pokemon.id} image={pokemon.sprites.front_default}></PokemonList>
                    </div>
                ))
            }
        </section>
    )
}
export default PokemonCollection;