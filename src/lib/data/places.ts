import type { Place } from "@/lib/types";

export const places: Place[] = [
  // Colombo
  {
    id: "gangaramaya-temple",
    name: "Gangaramaya Temple",
    districtId: "colombo",
    description: "A landmark Buddhist temple blending Sri Lankan, Thai and Chinese architecture.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gangaramaya_Temple.JPG/800px-Gangaramaya_Temple.JPG",
      alt: "Gangaramaya Temple in Colombo, Sri Lanka",
    },
  },
  {
    id: "galle-face-green",
    name: "Galle Face Green",
    districtId: "colombo",
    description: "An oceanfront promenade lined with street food carts and sunset crowds.",
    interests: ["relaxation-wellness", "food-local-life"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Colombo_-_Galle_Face.jpg/800px-Colombo_-_Galle_Face.jpg",
      alt: "Galle Face Green promenade in Colombo at sunset",
    },
  },
  {
    id: "pettah-market",
    name: "Pettah Market",
    districtId: "colombo",
    description: "A chaotic, colourful bazaar district selling everything from spices to textiles.",
    interests: ["food-local-life", "culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Pettah_Floating_Market.jpg/800px-Pettah_Floating_Market.jpg",
      alt: "Pettah floating market stalls in Colombo, Sri Lanka",
    },
  },
  // Gampaha
  {
    id: "henarathgoda-botanical-garden",
    name: "Henarathgoda Botanical Garden",
    districtId: "gampaha",
    description: "Sri Lanka's second-oldest botanical garden, home to the country's first rubber trees.",
    interests: ["nature-adventure", "relaxation-wellness"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Henarathgoda_Botanical_Garden.jpg/800px-Henarathgoda_Botanical_Garden.jpg",
      alt: "Henarathgoda Botanical Garden in Gampaha, Sri Lanka",
    },
  },
  // Kalutara
  {
    id: "kalutara-bodhiya",
    name: "Kalutara Bodhiya",
    districtId: "kalutara",
    description: "A hollow Buddhist stupa on the riverbank, unique for its open interior shrine.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Kalautara_Bodhiya_1.jpg/800px-Kalautara_Bodhiya_1.jpg",
      alt: "Kalutara Bodhiya stupa on the riverbank, Sri Lanka",
    },
  },
  {
    id: "bentota-beach",
    name: "Bentota Beach",
    districtId: "kalutara",
    description: "A palm-fringed beach resort strip popular for water sports and river safaris.",
    interests: ["beaches-coast", "relaxation-wellness"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sri_Lanka%2C_Bentota%2C_beach_%282%29.JPG/800px-Sri_Lanka%2C_Bentota%2C_beach_%282%29.JPG",
      alt: "Bentota Beach on the western coast of Sri Lanka",
    },
  },
  // Kandy
  {
    id: "kandy-temple-of-tooth",
    name: "Temple of the Tooth",
    districtId: "kandy",
    description: "Sacred Buddhist temple enshrining a relic of the tooth of the Buddha.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/SL_Kandy_asv2020-01_img33_Sacred_Tooth_Temple.jpg/800px-SL_Kandy_asv2020-01_img33_Sacred_Tooth_Temple.jpg",
      alt: "Temple of the Sacred Tooth Relic in Kandy, Sri Lanka",
    },
  },
  {
    id: "royal-botanical-gardens-peradeniya",
    name: "Royal Botanical Gardens",
    districtId: "kandy",
    description: "Sprawling royal gardens in Peradeniya with giant bamboo and an orchid house.",
    interests: ["nature-adventure", "relaxation-wellness"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Botanical_Garden_of_Peradeniya_03.jpg/800px-Botanical_Garden_of_Peradeniya_03.jpg",
      alt: "Royal Botanical Gardens at Peradeniya, near Kandy, Sri Lanka",
    },
  },
  {
    id: "kandy-lake",
    name: "Kandy Lake",
    districtId: "kandy",
    description: "A tranquil man-made lake in the heart of the city, ideal for an evening stroll.",
    interests: ["relaxation-wellness", "culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Kandy_Lake_%289%29.jpg/800px-Kandy_Lake_%289%29.jpg",
      alt: "Kandy Lake in the centre of Kandy, Sri Lanka",
    },
  },
  // Matale
  {
    id: "sigiriya-rock-fortress",
    name: "Sigiriya Rock Fortress",
    districtId: "matale",
    description: "A UNESCO World Heritage ancient rock citadel rising dramatically from the jungle.",
    interests: ["culture-history", "nature-adventure"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sigiriya_%28141688197%29.jpeg/800px-Sigiriya_%28141688197%29.jpeg",
      alt: "Sigiriya rock fortress rising above the jungle, Sri Lanka",
    },
  },
  {
    id: "dambulla-cave-temple",
    name: "Dambulla Cave Temple",
    districtId: "matale",
    description: "A cave complex of painted ceilings and statues, Sri Lanka's best-preserved shrine.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Dambulla-buddhastupa.jpg/800px-Dambulla-buddhastupa.jpg",
      alt: "Dambulla cave temple stupa, Sri Lanka",
    },
  },
  // Nuwara Eliya
  {
    id: "horton-plains-national-park",
    name: "Horton Plains National Park",
    districtId: "nuwara-eliya",
    description: "A misty highland plateau ending at World's End, a sheer 880-metre cliff drop.",
    interests: ["nature-adventure", "wildlife-safari"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Srilankamountainforest.jpg/800px-Srilankamountainforest.jpg",
      alt: "Cloud forest at Horton Plains National Park, Sri Lanka",
    },
  },
  // Galle
  {
    id: "galle-fort",
    name: "Galle Fort",
    districtId: "galle",
    description: "A UNESCO-listed Dutch colonial fort with cobbled streets and rampart sunsets.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Galle_Fort.jpg/800px-Galle_Fort.jpg",
      alt: "Galle Fort ramparts on Sri Lanka's southern coast",
    },
  },
  {
    id: "unawatuna-beach",
    name: "Unawatuna Beach",
    districtId: "galle",
    description: "A curved, palm-backed bay popular for swimming and easy snorkelling.",
    interests: ["beaches-coast", "relaxation-wellness"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Unawatuna.jpg/800px-Unawatuna.jpg",
      alt: "Unawatuna Beach near Galle, Sri Lanka",
    },
  },
  // Matara
  {
    id: "mirissa-beach",
    name: "Mirissa Beach",
    districtId: "matara",
    description: "A crescent beach and the country's top launch point for whale-watching trips.",
    interests: ["beaches-coast", "wildlife-safari", "relaxation-wellness"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Mirissa-Plage_%283%29.jpg/800px-Mirissa-Plage_%283%29.jpg",
      alt: "Mirissa Beach on the southern coast of Sri Lanka",
    },
  },
  {
    id: "matara-star-fort",
    name: "Matara Star Fort",
    districtId: "matara",
    description: "A compact star-shaped Dutch fort guarding the mouth of the Nilwala River.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Dutch_Star_Fort%2C_Matara_0691.jpg/800px-Dutch_Star_Fort%2C_Matara_0691.jpg",
      alt: "Dutch Star Fort in Matara, Sri Lanka",
    },
  },
  // Hambantota
  {
    id: "yala-national-park",
    name: "Yala National Park",
    districtId: "hambantota",
    description: "Sri Lanka's most visited park, with one of the highest leopard densities on earth.",
    interests: ["wildlife-safari", "nature-adventure"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Yala_Beach.jpg/800px-Yala_Beach.jpg",
      alt: "Coastline of Yala National Park, Sri Lanka",
    },
  },
  {
    id: "bundala-national-park",
    name: "Bundala National Park",
    districtId: "hambantota",
    description: "A wetland sanctuary and Ramsar site, a haven for migratory flamingos.",
    interests: ["wildlife-safari", "nature-adventure"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Wildlife_Preserve_Near_Kirinda%2C_Sri_Lanka.jpg/800px-Wildlife_Preserve_Near_Kirinda%2C_Sri_Lanka.jpg",
      alt: "Wildlife preserve near Bundala, Hambantota, Sri Lanka",
    },
  },
  // Jaffna
  {
    id: "nallur-kandaswamy-temple",
    name: "Nallur Kandaswamy Temple",
    districtId: "jaffna",
    description: "A vividly coloured Hindu temple and the spiritual heart of Jaffna.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Nallur_Kandasamy_front_entrance.jpg/800px-Nallur_Kandasamy_front_entrance.jpg",
      alt: "Nallur Kandaswamy Temple entrance in Jaffna, Sri Lanka",
    },
  },
  {
    id: "jaffna-fort",
    name: "Jaffna Fort",
    districtId: "jaffna",
    description: "One of the largest surviving Dutch forts in Asia, overlooking Jaffna lagoon.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Jaffna_Fort_%281%29.jpg/800px-Jaffna_Fort_%281%29.jpg",
      alt: "Jaffna Fort ramparts, northern Sri Lanka",
    },
  },
  // Kilinochchi
  {
    id: "kilinochchi-railway-station",
    name: "Kilinochchi Railway Station",
    districtId: "kilinochchi",
    description: "A rebuilt landmark station symbolising the north's post-war railway revival.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kilinochchi_Railway_Station_-_Sri_Lanka.jpg/800px-Kilinochchi_Railway_Station_-_Sri_Lanka.jpg",
      alt: "Kilinochchi railway station, northern Sri Lanka",
    },
  },
  // Mannar
  {
    id: "adams-bridge",
    name: "Adam's Bridge",
    districtId: "mannar",
    description: "A chain of limestone shoals stretching toward India, steeped in legend.",
    interests: ["nature-adventure", "culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Adams_Bridge_aerial.jpg/800px-Adams_Bridge_aerial.jpg",
      alt: "Aerial view of Adam's Bridge near Mannar, Sri Lanka",
    },
  },
  // Vavuniya
  {
    id: "vavuniya-town",
    name: "Vavuniya Town",
    districtId: "vavuniya",
    description: "A friendly transit town where southern and northern Sri Lankan life meet.",
    interests: ["culture-history", "food-local-life"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Vavuniya_City.jpg/800px-Vavuniya_City.jpg",
      alt: "Street in Vavuniya town, northern Sri Lanka",
    },
  },
  // Mullaitivu
  {
    id: "mullaitivu-coast",
    name: "Mullaitivu Coast",
    districtId: "mullaitivu",
    description: "Wide, empty beaches and lagoons along Sri Lanka's least-developed shoreline.",
    interests: ["beaches-coast", "nature-adventure"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Mullaitivu_district_secretariat_building.jpg/800px-Mullaitivu_district_secretariat_building.jpg",
      alt: "Mullaitivu district town, northeastern Sri Lanka",
    },
  },
  // Batticaloa
  {
    id: "pasikudah-beach",
    name: "Pasikudah Beach",
    districtId: "batticaloa",
    description: "A shallow, calm bay lined with resorts, ideal for swimming year-round.",
    interests: ["beaches-coast", "relaxation-wellness"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Pasikudah_beach.JPG/800px-Pasikudah_beach.JPG",
      alt: "Pasikudah Beach in Batticaloa district, Sri Lanka",
    },
  },
  {
    id: "kallady-bridge",
    name: "Kallady Bridge",
    districtId: "batticaloa",
    description: "The historic bridge over Batticaloa lagoon, famed for its 'singing fish' legend.",
    interests: ["culture-history", "nature-adventure"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kallady_Bridge_Batticaloa.jpg/800px-Kallady_Bridge_Batticaloa.jpg",
      alt: "Kallady Bridge over Batticaloa lagoon, Sri Lanka",
    },
  },
  // Ampara
  {
    id: "gal-oya-national-park",
    name: "Gal Oya National Park",
    districtId: "ampara",
    description: "Famous for boat safaris to see elephants swimming between reservoir islands.",
    interests: ["wildlife-safari", "nature-adventure"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Gal_Oya_National_Park_%28Senanayake_Samudhraya%29.JPG/800px-Gal_Oya_National_Park_%28Senanayake_Samudhraya%29.JPG",
      alt: "Gal Oya National Park reservoir, eastern Sri Lanka",
    },
  },
  {
    id: "arugam-bay",
    name: "Arugam Bay",
    districtId: "ampara",
    description: "A laid-back surf town with one of the best right-hand point breaks in Asia.",
    interests: ["beaches-coast", "nature-adventure"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Beach_of_Arugam_Bay.jpg/800px-Beach_of_Arugam_Bay.jpg",
      alt: "Arugam Bay beach, eastern Sri Lanka",
    },
  },
  // Trincomalee
  {
    id: "nilaveli-beach",
    name: "Nilaveli Beach",
    districtId: "trincomalee",
    description: "Powder-white sands and calm, clear water close to Pigeon Island.",
    interests: ["beaches-coast", "relaxation-wellness"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Nillaveli_Beach.JPG/800px-Nillaveli_Beach.JPG",
      alt: "Nilaveli Beach near Trincomalee, Sri Lanka",
    },
  },
  {
    id: "koneswaram-temple",
    name: "Koneswaram Temple",
    districtId: "trincomalee",
    description: "A clifftop Hindu temple perched dramatically above the Indian Ocean.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Spiritual_16.jpg/800px-Spiritual_16.jpg",
      alt: "Koneswaram Temple overlooking the ocean in Trincomalee, Sri Lanka",
    },
  },
  {
    id: "pigeon-island-national-park",
    name: "Pigeon Island National Park",
    districtId: "trincomalee",
    description: "A snorkelling and diving reserve with reef sharks and vibrant coral.",
    interests: ["wildlife-safari", "beaches-coast"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Pigeon_Island_National_Park%2C_Trincomalee.jpg/800px-Pigeon_Island_National_Park%2C_Trincomalee.jpg",
      alt: "Pigeon Island National Park near Trincomalee, Sri Lanka",
    },
  },
  // Kurunegala
  {
    id: "ridi-viharaya",
    name: "Ridi Viharaya",
    districtId: "kurunegala",
    description: "The 'Silver Temple', an atmospheric cave shrine dating back over 2,000 years.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ridi_Viharaya_3.JPG/800px-Ridi_Viharaya_3.JPG",
      alt: "Ridi Viharaya cave temple near Kurunegala, Sri Lanka",
    },
  },
  // Puttalam
  {
    id: "wilpattu-national-park",
    name: "Wilpattu National Park",
    districtId: "puttalam",
    description: "Sri Lanka's largest national park, known for its natural lakes and leopards.",
    interests: ["wildlife-safari", "nature-adventure"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/WilpattuNationalPark-April2014_%283%29.JPG/800px-WilpattuNationalPark-April2014_%283%29.JPG",
      alt: "Natural lake in Wilpattu National Park, Sri Lanka",
    },
  },
  {
    id: "kalpitiya-lagoon",
    name: "Kalpitiya Lagoon",
    districtId: "puttalam",
    description: "A kitesurfing and dolphin-watching hotspot on Sri Lanka's northwest coast.",
    interests: ["nature-adventure", "wildlife-safari"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/SL_Kalpitiya_asv2020-01_img4_Fishery_harbour.jpg/800px-SL_Kalpitiya_asv2020-01_img4_Fishery_harbour.jpg",
      alt: "Fishery harbour at Kalpitiya lagoon, Sri Lanka",
    },
  },
  // Anuradhapura
  {
    id: "ruwanwelisaya",
    name: "Ruwanwelisaya",
    districtId: "anuradhapura",
    description: "A gleaming white dagoba and one of the most sacred stupas in Sri Lanka.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Ruwanweli_Maha_Saaya.jpg/800px-Ruwanweli_Maha_Saaya.jpg",
      alt: "Ruwanwelisaya stupa in Anuradhapura, Sri Lanka",
    },
  },
  {
    id: "abhayagiri-vihara",
    name: "Abhayagiri Vihara",
    districtId: "anuradhapura",
    description: "A vast ruined monastery complex that was once a centre of Buddhist scholarship.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/SL_Anuradhapura_asv2020-01_img31_Abhayagiriya_Stupa.jpg/800px-SL_Anuradhapura_asv2020-01_img31_Abhayagiriya_Stupa.jpg",
      alt: "Abhayagiri Vihara stupa in Anuradhapura, Sri Lanka",
    },
  },
  // Polonnaruwa
  {
    id: "gal-vihara",
    name: "Gal Vihara",
    districtId: "polonnaruwa",
    description: "Four monumental Buddha statues carved directly into a granite rock face.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Gal_Vihara_Polonnaruwa_1.jpg/800px-Gal_Vihara_Polonnaruwa_1.jpg",
      alt: "Gal Vihara rock-carved Buddha statues in Polonnaruwa, Sri Lanka",
    },
  },
  {
    id: "polonnaruwa-vatadage",
    name: "Polonnaruwa Vatadage",
    districtId: "polonnaruwa",
    description: "An intricately carved circular relic house at the heart of the ancient city.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Vatadage.jpg/800px-Vatadage.jpg",
      alt: "Vatadage relic house in Polonnaruwa, Sri Lanka",
    },
  },
  // Badulla
  {
    id: "nine-arch-bridge",
    name: "Nine Arch Bridge",
    districtId: "badulla",
    description: "An iconic colonial-era railway viaduct near Ella, framed by tea-covered hills.",
    interests: ["nature-adventure", "culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/NineArchesBridge.JPG/800px-NineArchesBridge.JPG",
      alt: "Nine Arch Bridge near Ella, Sri Lanka",
    },
  },
  {
    id: "dunhinda-falls",
    name: "Dunhinda Falls",
    districtId: "badulla",
    description: "A powerful cascading waterfall reached via a short forest trail.",
    interests: ["nature-adventure"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Dunhinda.jpg/800px-Dunhinda.jpg",
      alt: "Dunhinda Falls near Badulla, Sri Lanka",
    },
  },
  {
    id: "haputale-tea-plantations",
    name: "Haputale Tea Plantations",
    districtId: "badulla",
    description: "Rolling emerald tea estates with panoramic views across the southern plains.",
    interests: ["relaxation-wellness", "nature-adventure", "food-local-life"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Tea_plantation_Haputale.jpg/800px-Tea_plantation_Haputale.jpg",
      alt: "Tea plantation in Haputale, Badulla district, Sri Lanka",
    },
  },
  // Monaragala
  {
    id: "buduruwagala",
    name: "Buduruwagala",
    districtId: "monaragala",
    description: "Seven giant Buddhist figures carved into a remote cliff face in the wilderness.",
    interests: ["culture-history"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Buduruvagala.JPG/800px-Buduruvagala.JPG",
      alt: "Buduruwagala rock-carved statues in Monaragala, Sri Lanka",
    },
  },
  // Ratnapura
  {
    id: "sinharaja-forest-reserve",
    name: "Sinharaja Forest Reserve",
    districtId: "ratnapura",
    description: "A UNESCO World Heritage rainforest bursting with endemic birds and wildlife.",
    interests: ["nature-adventure", "wildlife-safari"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/20160128_Sri_Lanka_4132_Sinharaja_Forest_Preserve_sRGB_%2825674474901%29.jpg/800px-20160128_Sri_Lanka_4132_Sinharaja_Forest_Preserve_sRGB_%2825674474901%29.jpg",
      alt: "Sinharaja Forest Reserve rainforest canopy, Sri Lanka",
    },
  },
  {
    id: "bopath-ella-falls",
    name: "Bopath Ella Falls",
    districtId: "ratnapura",
    description: "A picture-perfect, leaf-shaped waterfall close to Ratnapura's gem mines.",
    interests: ["nature-adventure"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Bopath_Ella_Falls.jpg/800px-Bopath_Ella_Falls.jpg",
      alt: "Bopath Ella Falls near Ratnapura, Sri Lanka",
    },
  },
  // Kegalle
  {
    id: "pinnawala-elephant-orphanage",
    name: "Pinnawala Elephant Orphanage",
    districtId: "kegalle",
    description: "A riverside sanctuary where rescued elephant herds bathe and roam together.",
    interests: ["wildlife-safari"],
    image: {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Pinnawala_01.jpg/800px-Pinnawala_01.jpg",
      alt: "Elephants at Pinnawala Elephant Orphanage, Sri Lanka",
    },
  },
];

export function getPlacesByDistrict(districtId: string): Place[] {
  return places.filter((place) => place.districtId === districtId);
}

export function getPlaceById(id: string): Place | undefined {
  return places.find((place) => place.id === id);
}
