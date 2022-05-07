export interface ISpaceships {
    id: number,
    model: string,
    lightspeed: boolean,
    fuel: 'nuclear' | 'corn' |'water',
    crew: TCrew
}

export type TCrew = {
    captain: string
    mecha: string
    stowaway?: string
}