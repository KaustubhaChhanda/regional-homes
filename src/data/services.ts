export interface Service {
  id: number
  title: string
  icon: string
  description: string
  details?: string[]
}

export const services: Service[] = [
  {
    id: 1,
    title: "Home Purchase",
    icon: "Home",
    description: "We specialize in providing various types of high-quality pre-fabricated homes tailored to your needs. Our team guides you through every step, from selecting the perfect floor plan and design to customizing features that match your preferences. Looking for a pre-owned home? No problem – many of our home centers maintain an active inventory of homes at the retail center."
  },
  {
    id: 2,
    title: "Finding Land",
    icon: "MapPin",
    description: "Your ideal home deserves the perfect location. Our home consultants are dedicated to assisting you find the right piece of land that aligns with your vision and budget. We leverage our extensive network and local knowledge to locate land parcels that meet your specific requirements and are properly zoned for your housing needs."
  },
  {
    id: 3,
    title: "Site Preparation",
    icon: "HardHat",
    description: "Complete foundation solutions including pad building with options like piers, footings, and stem walls, ensuring your home stands on solid ground and adheres to local requirements.",
    details: [
      "Foundation Services: Comprehensive foundation solutions, including pad building with options like piers, footings, and stem walls.",
      "Land Clearing: Our team expertly handles land clearing, removing obstacles and preparing your site for construction.",
      "Permitting: We assist with obtaining all necessary permits, ensuring compliance with local regulations and building codes."
    ]
  },
  {
    id: 4,
    title: "Delivery",
    icon: "Truck",
    description: "We ensure your home arrives safely and efficiently. Our home delivery service is designed to transport your manufactured home to its destination with the utmost care. We coordinate logistics, route planning, and transportation, ensuring a smooth delivery from our facility to your new home site."
  },
  {
    id: 5,
    title: "Installation",
    icon: "Wrench",
    description: "After delivery, we ensure your home is perfectly placed and set with care.",
    details: [
      "Home Placement and Trim-out: Our skilled team carefully positions and secures your home, followed by final assembly for a flawless finish.",
      "Underpinning/Skirting: We provide robust underpinning and attractive skirting options to enhance your home's stability and aesthetic appeal."
    ]
  },
  {
    id: 6,
    title: "Utility Connection",
    icon: "Zap",
    description: "We make your home fully functional and comfortable.",
    details: [
      "A/C Installation: Our experts install efficient and reliable air conditioning systems for optimal indoor comfort.",
      "Plumbing and Electrical: We ensure safe and efficient plumbing and electrical connections, adhering to the highest standards."
    ]
  },
  {
    id: 7,
    title: "Extended Warranty Services",
    icon: "Shield",
    description: "Enjoy peace of mind with our comprehensive warranty services. We now offer a 7-Year/10-Year Structural Warranty available for any new home. Additionally, each home comes standard with a 1-year manufacturer's warranty. We stand behind the quality of our homes and offer prompt, reliable support to address any issues under warranty."
  },
  {
    id: 8,
    title: "Home Furnishing",
    icon: "Sofa",
    description: "To complete your home experience, we offer a range of home furnishing services. From selecting the perfect furniture to interior decoration, we help you create a space that's uniquely yours."
  }
]
