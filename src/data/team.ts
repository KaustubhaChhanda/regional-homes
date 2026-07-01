export interface TeamMember {
  id: number
  name: string
  role: string
  email: string
  image: string
  phone?: string
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Cindy Claybrook",
    role: "Sales",
    email: "cclaybrook@regionalhomes.net",
    image: "/images/team/cindy-claybrook.jpg",
    phone: "9368996256"
  },
  {
    id: 2,
    name: "Ashley Delgado",
    role: "Sales",
    email: "adelgado@regionalhomes.net",
    image: "/images/team/ashley-delgado.jpg",
    phone: "9368996256"
  },
  {
    id: 3,
    name: "Rustin Guarnere",
    role: "General Manager",
    email: "rguarnere@regionalhomes.net",
    image: "/images/team/rustin-guarnere.jpg",
    phone: "9368996256"
  },
  {
    id: 4,
    name: "Anthony Palos",
    role: "Sales",
    email: "apalos@regionalhomes.net",
    image: "/images/team/anthony-palos.jpg",
    phone: "9368996256"
  },
  {
    id: 5,
    name: "Colby Payne",
    role: "Administration",
    email: "cpayne@regionalhomes.net",
    image: "/images/team/colby-payne.jpg",
    phone: "9368996256"
  },
  {
    id: 6,
    name: "Julian Ramirez",
    role: "Sales",
    email: "jramirez@regionalhomes.net",
    image: "/images/team/julian-ramirez.jpg",
    phone: "9368996256"
  },
  {
    id: 7,
    name: "Jonatan Rangel",
    role: "Administration",
    email: "jrangel@regionalhomes.net",
    image: "/images/team/jonatan-rangel.jpg",
    phone: "9368996256"
  },
  {
    id: 8,
    name: "Jake L. Smith",
    role: "Sales",
    email: "jsmith@regionalhomes.net",
    image: "/images/team/jake-smith.jpg",
    phone: "9368996256"
  },
  {
    id: 9,
    name: "Tristan Tidwell",
    role: "Sales",
    email: "ttidwell@regionalhomes.net",
    image: "/images/team/tristan-tidwell.jpg",
    phone: "9368996256"
  }
]
