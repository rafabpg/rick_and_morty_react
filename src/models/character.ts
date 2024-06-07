export interface AllCharacters{
    info:{
        count:number;
        pages:number;
        next:string | null;
        prev:string | null;
    }
    results:Character[]
}


export interface Character{
    id:number;
    name:string;
    status:Status;
    species:Species;
    type:string;
    gender:Gender;
    origin:{
        name:string;
        url:string;
    }
    location:{
        name:string;
        url:string;
    }
    image:string;
    episode:string[];
}


export enum Status{
    alive = "Alive",
    dead = "Dead",
    unknown = "unknown"
}

export enum Species{
    human = "Human",
    alien = "Alien",
    humanoied = "Humanoid",
    poopybot = "Poopybutthole",
    mythological = "Mythological",
    unknown = "unknown",
    animal = "Animal",
    disease = "Disease",
    robot = "Robot",
    planet = "Planet",
    cronenberg = "Cronenberg"
}

export enum Gender{
    female = "Female",
    male = "Male",
    genderless = "Genderless",
    unknown = "unknown"
}