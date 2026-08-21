import type { Hotel } from "@/types";

export const hotelsByDistrict: Record<string, Hotel[]> = {
  colombo: [
    { name: "Cinnamon Lakeside Colombo", area: "Beira Lake", rating: 4.5, pricePerNightUsd: 110 },
    { name: "Galle Face Hotel", area: "Galle Face", rating: 4.6, pricePerNightUsd: 140 },
  ],
  gampaha: [
    { name: "Airport Garden Hotel", area: "Katunayake", rating: 4.0, pricePerNightUsd: 65 },
  ],
  kalutara: [
    { name: "Kalutara Beach Resort", area: "Kalutara Beach", rating: 4.2, pricePerNightUsd: 85 },
  ],
  kandy: [
    { name: "Earl's Regency Kandy", area: "Tennekumbura", rating: 4.4, pricePerNightUsd: 95 },
    { name: "Theva Residency", area: "Kandy Lake", rating: 4.3, pricePerNightUsd: 70 },
  ],
  matale: [
    { name: "Sigiriya Village Hotel", area: "Sigiriya", rating: 4.3, pricePerNightUsd: 90 },
  ],
  "nuwara-eliya": [
    { name: "Heritance Tea Factory", area: "Kandapola", rating: 4.6, pricePerNightUsd: 130 },
    { name: "The Grand Hotel", area: "Nuwara Eliya Town", rating: 4.2, pricePerNightUsd: 100 },
  ],
  galle: [
    { name: "Amangalla", area: "Galle Fort", rating: 4.7, pricePerNightUsd: 220 },
    { name: "Fort Bazaar", area: "Galle Fort", rating: 4.5, pricePerNightUsd: 150 },
  ],
  matara: [
    { name: "Amaya Resorts Mirissa", area: "Mirissa", rating: 4.4, pricePerNightUsd: 105 },
  ],
  hambantota: [
    { name: "Cinnamon Wild Yala", area: "Yala Buffer Zone", rating: 4.5, pricePerNightUsd: 160 },
  ],
  jaffna: [
    { name: "Jetwing Jaffna", area: "Jaffna Town", rating: 4.3, pricePerNightUsd: 80 },
  ],
  kilinochchi: [
    { name: "Kilinochchi Inn", area: "Kilinochchi Town", rating: 3.8, pricePerNightUsd: 40 },
  ],
  mannar: [
    { name: "Palmyrah House", area: "Mannar Island", rating: 4.0, pricePerNightUsd: 60 },
  ],
  vavuniya: [
    { name: "Vavuniya Rest House", area: "Vavuniya Town", rating: 3.7, pricePerNightUsd: 38 },
  ],
  mullaitivu: [
    { name: "Mullaitivu Lagoon View", area: "Mullaitivu Coast", rating: 3.8, pricePerNightUsd: 45 },
  ],
  batticaloa: [
    { name: "Amethyst Resort", area: "Passikudah", rating: 4.4, pricePerNightUsd: 115 },
  ],
  ampara: [
    { name: "Hideaway Arugam Bay", area: "Arugam Bay", rating: 4.3, pricePerNightUsd: 75 },
  ],
  trincomalee: [
    { name: "Uga Jungle Beach", area: "Nilaveli", rating: 4.5, pricePerNightUsd: 120 },
  ],
  kurunegala: [
    { name: "Diya Diga Farm", area: "Kurunegala Outskirts", rating: 4.1, pricePerNightUsd: 60 },
  ],
  puttalam: [
    { name: "Bar Reef Resort", area: "Kalpitiya", rating: 4.2, pricePerNightUsd: 95 },
  ],
  anuradhapura: [
    { name: "Heritance Kandalama", area: "Dambulla Road", rating: 4.6, pricePerNightUsd: 135 },
    { name: "Palm Garden Village", area: "Anuradhapura Town", rating: 4.0, pricePerNightUsd: 70 },
  ],
  polonnaruwa: [
    { name: "Amaya Lake", area: "Kandalama Road", rating: 4.3, pricePerNightUsd: 100 },
  ],
  badulla: [
    { name: "98 Acres Resort", area: "Ella", rating: 4.7, pricePerNightUsd: 145 },
    { name: "Ella Flower Garden Resort", area: "Ella Town", rating: 4.3, pricePerNightUsd: 65 },
  ],
  monaragala: [
    { name: "Wellawaya Grand", area: "Wellawaya", rating: 3.9, pricePerNightUsd: 50 },
  ],
  ratnapura: [
    { name: "Rathna Lodge", area: "Ratnapura Town", rating: 4.0, pricePerNightUsd: 55 },
  ],
  kegalle: [
    { name: "Elephant Trail Hotel", area: "Pinnawala", rating: 4.2, pricePerNightUsd: 68 },
  ],
};

export function getHotelForDistrict(districtId: string, index = 0): Hotel {
  const hotels = hotelsByDistrict[districtId] ?? [
    { name: "LankaRoute Partner Stay", area: "Town Centre", rating: 4.0, pricePerNightUsd: 60 },
  ];
  return hotels[index % hotels.length];
}
