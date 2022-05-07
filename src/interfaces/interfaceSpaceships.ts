export interface ISpaceships {
    id: number,
    model:'classic' | 'super' | 'special' | 'integral'
    name: string,
    lightspeed: boolean,
    fuel: 'nuclear' | 'corn' |'water',
    crew: TCrew
}

export type TCrew = {
    captain: string
    mecha: string
    stowaway?: string
}