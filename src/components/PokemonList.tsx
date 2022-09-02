import * as React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Detail } from '../App';

interface Props {
    viewDetail:Detail,
    setViewDetail: React.Dispatch<React.SetStateAction<Detail>>,
    key:number,
    name:string, 
    id:number, 
    image:string,
    abilities:
    | {
        name: string;
        ability: string;
      }[]
    | undefined;
}
const PokemonList:React.FC<Props> = (props) => {
    const { id, image, name, viewDetail, setViewDetail} = props
    const [isSelected, setSelected] = useState<boolean>(false)
    useEffect(()=>{
        setSelected(id === viewDetail?.id)
    },[viewDetail])
    {isSelected && console.log(name)}
    return (
        <div className="detail-container" key={id}>
            <p>{name}</p>
            <img src={image} alt="" />
        </div>
    )
}
export default PokemonList