export interface Lender {
  id: number
  name: string
  logo: string
  url: string
}

export const lenders: Lender[] = [
  { id: 1, name: "Triad Financial Services", logo: "/images/lenders/triad.png", url: "https://www.triadfs.com/" },
  { id: 2, name: "21st Mortgage Corporation", logo: "/images/lenders/21st-mortgage.jpg", url: "https://www.21stmortgage.com/" },
  { id: 3, name: "Genesis Bank", logo: "/images/lenders/genesis.png", url: "https://www.genesisbankusa.com/" },
  { id: 4, name: "Cascade Loans", logo: "/images/lenders/cascade.png", url: "https://www.cascadeloans.com/" },
  { id: 5, name: "CSL Financial", logo: "/images/lenders/csl.png", url: "https://www.cslfinancial.com/" },
  { id: 6, name: "FirstBank", logo: "/images/lenders/firstbank.png", url: "https://www.firstbank.com/" },
  { id: 7, name: "CIS Home Loans", logo: "/images/lenders/cis.png", url: "https://www.cishomeloans.com/" },
  { id: 8, name: "Credit Human", logo: "/images/lenders/credithuman.jpeg", url: "https://www.credithuman.com/" },
  { id: 9, name: "Country Place Mortgage", logo: "/images/lenders/countryplace.jpg", url: "https://www.countryplacemortgage.com/" },
  { id: 10, name: "AutoMHatic Financial", logo: "/images/lenders/automhatic.png", url: "https://www.automhatic.com/" }
]
