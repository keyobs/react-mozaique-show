import { ISpaceships } from "../interfaces/interfaceSpaceships";

export const spaceships: ISpaceships[] = [
    {
      id: 52789,
      model: 'classic',
      name: "Queen Revenge",
      lightspeed: true,
      fuel: "nuclear",
      crew: {
        captain: "RuPaul",
        mecha: "Detox",
        stowaway: "Latrice"
      },
    },
    {
      id: 12456,
      model: 'super',
      name: "La Dama Negra",
      lightspeed: true,
      fuel: "corn",
      crew: {
        captain: "Maroon",
        mecha: "Five"
      },
    },
    {
      id: 23654,
      model: 'integral',
      name: "Freelancer",
      lightspeed: true,
      fuel: "nuclear",
      crew: {
        captain: "Freech",
        mecha: "Freeda"
      }
    },
    {
      id: 78963,
      model: 'special',
      name: "El Impoluto",
      lightspeed: false,
      fuel: "nuclear",
      crew: {
        captain: "Obvious",
        mecha: "Normal",
        stowaway: "Out"
      }
    },
    {
        id: 41258,
        model: 'special',
        name: "Rewards",
        lightspeed: true,
        fuel: "water",
        crew: {
          captain: "Green",
          mecha: "Bean",
          stowaway: "Carpaccio"
        }
      }
  ];