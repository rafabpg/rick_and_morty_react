import { Status } from "@/models/character";


export function returnColorTag(status: Status) {
    switch (status) {
        case Status.alive:
            return 'bg-green-500'
        case Status.dead:
            return 'bg-red-500'
        case Status.unknown:
            return 'bg-gray-500'
    }
}