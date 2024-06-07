import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Character } from "@/models/character"
import { returnColorTag } from "@/utils/colorTag";
import { Link } from "react-router-dom"

interface CharacterCardProps {
    character: Character;
}

export function CardElement({character}:CharacterCardProps){

    return(
        <Link to={`#`}>
            <Card className="shadow-lg  rounded hover:translate-y-2 transition-all ease-in-out">
                <CardHeader>
                    <img src={character.image} alt="" className="rounded"/>
                    <CardTitle className="py-2">{character.name}</CardTitle>
                    <CardDescription className="text-gray-500 text-base">{character.species}</CardDescription>
                </CardHeader>
                <CardContent>
                       <p className="text-xl">Last Location: <b>{character.location.name}</b></p>
                </CardContent>
                <CardFooter className="flex justify-center items-center">
                    <p 
                    className={`block py-2 px-6 text-white text-xl font-bold rounded ${returnColorTag(character.status)}`} >
                        {character.status}
                    </p>
                </CardFooter>
                </Card>
        </Link>
    )
}