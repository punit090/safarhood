export const treksData = [
  {
    id: "dayara-bugyal",
    title: "Dayara Bugyal Trek",
    subTitle: "Dehradun to Dehradun via Natin Village",
    description: "Ascend to one of the most stunning high-altitude alpine meadows in the Himalayas. Walk through dense oak forests and open up to panoramic Bandarpoonch views.",
    duration: "5 Days / 4 Nights",
    difficulty: "Easy to Moderate",
    maxAltitude: "3,639 m (11,940 ft)",
    bestSeason: "March–June & September–February",
    startingPoint: "Dehradun",
    endingPoint: "Dehradun",
    totalTrekDistance: "17–20 km",
    image: "/dayara_bugyal.png",
    attractions: [
      "Dayara Bugyal Meadows",
      "Gui Campsite",
      "Himalayan Forests",
      "Bandarpoonch Peak Views",
      "Sunrise & Sunset Landscapes"
    ],
    route: [
      "Dehradun",
      "Mussoorie",
      "Chinyalisaur",
      "Uttarkashi",
      "Bhatwari",
      "Natin Village",
      "Dayara Bugyal",
      "Dehradun"
    ],
    trekDistanceSummary: [
      { from: "Natin", to: "Gui", distance: "4–5 km", mode: "Trek" },
      { from: "Gui", to: "Dayara Bugyal", distance: "4–5 km", mode: "Trek" },
      { from: "Dayara Bugyal", to: "Gui", distance: "4–5 km", mode: "Trek" },
      { from: "Gui", to: "Natin", distance: "4–5 km", mode: "Trek" }
    ],
    shortItinerary: [
      { day: 1, title: "Dehradun → Natin Village", details: "Drive 185 km | 7–8 hrs" },
      { day: 2, title: "Natin → Gui Campsite", details: "Trek 4–5 km" },
      { day: 3, title: "Gui → Dayara Bugyal → Gui", details: "Trek 8–10 km" },
      { day: 4, title: "Gui → Natin → Uttarkashi", details: "Trek 4–5 km + Drive 35 km" },
      { day: 5, title: "Uttarkashi → Dehradun", details: "Drive 145 km | 5–6 hrs" }
    ],
    briefItinerary: [
      {
        day: 1,
        title: "Dehradun to Natin Village",
        desc: "Drive through Mussoorie, Chinyalisaur and Uttarkashi to reach Natin Village, the base camp for the Dayara Bugyal trek. Overnight stay."
      },
      {
        day: 2,
        title: "Natin to Gui Campsite",
        desc: "Begin trekking through oak and rhododendron forests to reach Gui Campsite. Enjoy stunning mountain views and overnight camping."
      },
      {
        day: 3,
        title: "Dayara Bugyal Exploration",
        desc: "Trek to the vast alpine meadows of Dayara Bugyal. Witness panoramic views of Bandarpoonch, Srikanth, Draupadi Ka Danda and the Garhwal Himalayas. Return to Gui Campsite."
      },
      {
        day: 4,
        title: "Gui to Natin and Drive to Uttarkashi",
        desc: "Descend back to Natin Village and drive to Uttarkashi for an overnight stay."
      },
      {
        day: 5,
        title: "Uttarkashi to Dehradun",
        desc: "After breakfast, drive back to Dehradun, concluding the trek."
      }
    ]
  },
  {
    id: "har-ki-dun",
    title: "Har Ki Dun Valley Trek",
    subTitle: "Dehradun to Dehradun",
    description: "Explore a cradle-shaped glacial valley steeped in local culture, ancient wooden villages, and spectacular snow-capped Swargarohini peaks.",
    duration: "7 Days / 6 Nights",
    difficulty: "Easy to Moderate",
    maxAltitude: "3,566 m (11,700 ft)",
    bestSeason: "March–June & September–December",
    startingPoint: "Dehradun",
    endingPoint: "Dehradun",
    totalTrekDistance: "Approximately 48 km",
    totalDriveDistance: "Approximately 400 km",
    image: "/har_ki_dun.png",
    attractions: [
      "Har Ki Dun Valley",
      "Osla Village",
      "Supin River",
      "Swargarohini Peaks",
      "Ancient Himalayan Culture"
    ],
    route: [
      "Dehradun",
      "Mussoorie",
      "Purola",
      "Mori",
      "Netwar",
      "Sankri",
      "Taluka",
      "Seema/Osla",
      "Har Ki Dun"
    ],
    trekDistanceSummary: [
      { from: "Taluka", to: "Seema/Osla", distance: "13 km", mode: "Trek" },
      { from: "Seema/Osla", to: "Har Ki Dun", distance: "11 km", mode: "Trek" },
      { from: "Har Ki Dun", to: "Seema/Osla", distance: "11 km", mode: "Trek" },
      { from: "Seema/Osla", to: "Taluka", distance: "13 km", mode: "Trek" }
    ],
    shortItinerary: [
      { day: 1, title: "Dehradun → Sankri", details: "Drive 190 km | 8–10 hrs" },
      { day: 2, title: "Sankri → Taluka → Seema/Osla", details: "Drive 12 km + Trek 13 km" },
      { day: 3, title: "Seema/Osla → Har Ki Dun", details: "Trek 11 km" },
      { day: 4, title: "Har Ki Dun Exploration Day", details: "Local Sightseeing" },
      { day: 5, title: "Har Ki Dun → Seema/Osla", details: "Trek 11 km" },
      { day: 6, title: "Seema/Osla → Taluka → Sankri", details: "Trek 13 km + Drive 12 km" },
      { day: 7, title: "Sankri → Dehradun", details: "Drive 190 km | 8–10 hrs" }
    ],
    briefItinerary: [
      {
        day: 1,
        title: "Dehradun to Sankri",
        desc: "Drive through Mussoorie, Purola, Mori and Netwar to reach Sankri, a picturesque Himalayan village and gateway to several treks. Overnight stay."
      },
      {
        day: 2,
        title: "Sankri to Seema/Osla",
        desc: "Drive to Taluka and begin the trek along the Supin River through dense forests and traditional Himalayan villages. Reach Seema/Osla for overnight stay."
      },
      {
        day: 3,
        title: "Seema/Osla to Har Ki Dun",
        desc: "Trek through alpine meadows, pine forests and mountain streams to reach the beautiful Har Ki Dun Valley, surrounded by snow-capped peaks."
      },
      {
        day: 4,
        title: "Har Ki Dun Exploration",
        desc: "Explore the valley, Jaundhar Glacier viewpoints and nearby meadows. Enjoy panoramic views of Swargarohini Peak and surrounding Himalayan ranges."
      },
      {
        day: 5,
        title: "Har Ki Dun to Seema/Osla",
        desc: "Descend through the same scenic trail back to Seema/Osla. Overnight stay in camps or guesthouse."
      },
      {
        day: 6,
        title: "Seema/Osla to Sankri",
        desc: "Trek back to Taluka and drive to Sankri. Evening at leisure."
      },
      {
        day: 7,
        title: "Sankri to Dehradun",
        desc: "Drive back to Dehradun, marking the end of the trek."
      }
    ]
  },
  {
    id: "chopta-tungnath",
    title: "Chopta – Tungnath – Chandrashila – Deoria Tal Trek",
    subTitle: "Haridwar to Haridwar",
    description: "Conquer the stone trail to the highest Shiva temple in the world at Tungnath, and stand on Chandrashila summit for a 360-degree peak panorama.",
    duration: "5 Days / 4 Nights",
    difficulty: "Easy to Moderate",
    maxAltitude: "4,000 m (13,123 ft)",
    bestSeason: "March–June & September–December",
    startingPoint: "Haridwar",
    endingPoint: "Haridwar",
    totalTrekDistance: "Approximately 15–16 km",
    image: "/chopta_tungnath.png",
    attractions: [
      "Deoria Tal High-Altitude Lake",
      "Chopta Meadows (Mini Switzerland)",
      "Tungnath Temple (Highest Shiva Temple)",
      "Chandrashila Summit (Panoramic Views)",
      "Chaukhamba & Nanda Devi Peak Views"
    ],
    route: [
      "Haridwar",
      "Rishikesh",
      "Devprayag",
      "Rudraprayag",
      "Ukhimath",
      "Sari Village",
      "Deoria Tal",
      "Chopta",
      "Tungnath Temple",
      "Chandrashila Summit",
      "Haridwar"
    ],
    trekDistanceSummary: [
      { from: "Sari", to: "Deoria Tal", distance: "2.5–3 km", mode: "Trek" },
      { from: "Deoria Tal", to: "Sari", distance: "2.5–3 km", mode: "Trek" },
      { from: "Chopta", to: "Tungnath", distance: "3.5 km", mode: "Trek" },
      { from: "Tungnath", to: "Chandrashila Summit", distance: "1.5 km", mode: "Trek" },
      { from: "Chandrashila", to: "Chopta", distance: "5 km", mode: "Trek" }
    ],
    shortItinerary: [
      { day: 1, title: "Haridwar → Sari Village", details: "Drive 220 km | 8–9 hrs" },
      { day: 2, title: "Sari → Deoria Tal → Sari → Chopta", details: "Trek 5–6 km" },
      { day: 3, title: "Chopta → Tungnath → Chandrashila → Chopta", details: "Trek 10 km" },
      { day: 4, title: "Chopta → Ukhimath Sightseeing → Chopta", details: "Leisure Day" },
      { day: 5, title: "Chopta → Haridwar", details: "Drive 220 km | 8–9 hrs" }
    ],
    briefItinerary: [
      {
        day: 1,
        title: "Haridwar to Sari Village",
        desc: "Drive through Rishikesh, Devprayag, Rudraprayag and Ukhimath to reach Sari Village. Enjoy beautiful Himalayan views and overnight stay."
      },
      {
        day: 2,
        title: "Deoria Tal Trek & Transfer to Chopta",
        desc: "Morning trek to Deoria Tal, a serene high-altitude lake known for reflections of the Chaukhamba peaks. Return to Sari and drive to Chopta. Overnight stay."
      },
      {
        day: 3,
        title: "Tungnath & Chandrashila Trek",
        desc: "Begin early morning trek from Chopta to Tungnath Temple, the world's highest Shiva temple. Continue to Chandrashila Summit for panoramic views of Nanda Devi, Chaukhamba, Kedarnath and Trishul peaks. Return to Chopta."
      },
      {
        day: 4,
        title: "Chopta Exploration",
        desc: "Relax amidst the meadows of Chopta, explore nearby forests, local villages and Ukhimath. Enjoy sunset views and overnight stay."
      },
      {
        day: 5,
        title: "Chopta to Haridwar",
        desc: "After breakfast, drive back to Haridwar via Rudraprayag and Rishikesh."
      }
    ]
  },
  {
    id: "valley-of-flowers",
    title: "Valley of Flowers Trek",
    subTitle: "Haridwar to Haridwar",
    description: "Walk through a stunning UNESCO World Heritage site in full monsoon bloom, and visit the sacred glacial lake at Hemkund Sahib.",
    duration: "6 Days / 5 Nights",
    difficulty: "Easy to Moderate",
    maxAltitude: "4,329 m (14,202 ft) – Hemkund Sahib",
    bestSeason: "July to September (Monsoon Bloom) 🌸",
    startingPoint: "Haridwar",
    endingPoint: "Haridwar",
    totalTrekDistance: "Approximately 40–42 km",
    image: "/valley_of_flowers.png",
    attractions: [
      "Valley of Flowers (UNESCO Site)",
      "Hemkund Sahib Gurudwara & Lake",
      "Ghangaria Alpine Base",
      "Alaknanda River Confluences",
      "Vibrant Monsoon Alpine Flora"
    ],
    route: [
      "Haridwar",
      "Rishikesh",
      "Devprayag",
      "Rudraprayag",
      "Karnaprayag",
      "Joshimath/Pipalkoti",
      "Govindghat",
      "Ghangaria",
      "Valley of Flowers",
      "Hemkund Sahib",
      "Haridwar"
    ],
    trekDistanceSummary: [
      { from: "Govindghat", to: "Ghangaria", distance: "9 km", mode: "Trek/Drive split" },
      { from: "Ghangaria", to: "Valley of Flowers", distance: "5–6 km", mode: "Trek" },
      { from: "Valley of Flowers", to: "Ghangaria", distance: "5–6 km", mode: "Trek" },
      { from: "Ghangaria", to: "Hemkund Sahib", distance: "6 km", mode: "Trek" },
      { from: "Hemkund Sahib", to: "Ghangaria", distance: "6 km", mode: "Trek" },
      { from: "Ghangaria", to: "Govindghat", distance: "9 km", mode: "Trek" }
    ],
    shortItinerary: [
      { day: 1, title: "Haridwar → Joshimath/Pipalkoti", details: "Drive 270–290 km | 9–10 hrs" },
      { day: 2, title: "Joshimath/Pipalkoti → Govindghat → Ghangaria", details: "Drive 20 km + Trek 9 km" },
      { day: 3, title: "Ghangaria → Valley of Flowers → Ghangaria", details: "Trek 10–12 km" },
      { day: 4, title: "Ghangaria → Hemkund Sahib → Ghangaria", details: "Trek 12 km" },
      { day: 5, title: "Ghangaria → Govindghat → Joshimath/Pipalkoti", details: "Trek 9 km + Drive" },
      { day: 6, title: "Joshimath/Pipalkoti → Haridwar", details: "Drive 270–290 km" }
    ],
    briefItinerary: [
      {
        day: 1,
        title: "Haridwar to Joshimath/Pipalkoti",
        desc: "Drive through Rishikesh, Devprayag, Rudraprayag, Karnaprayag and reach Joshimath/Pipalkoti. Overnight stay."
      },
      {
        day: 2,
        title: "Joshimath/Pipalkoti to Ghangaria",
        desc: "Drive to Govindghat and begin the scenic trek to Ghangaria via Pulna village. Overnight stay in Ghangaria."
      },
      {
        day: 3,
        title: "Valley of Flowers Excursion",
        desc: "Trek into the famous Valley of Flowers, a UNESCO World Heritage Site. Explore colorful alpine meadows, glaciers and waterfalls before returning to Ghangaria."
      },
      {
        day: 4,
        title: "Hemkund Sahib Excursion",
        desc: "Early morning trek to Hemkund Sahib (4,329 m), one of the world's highest Gurudwaras. Visit the glacial lake and return to Ghangaria."
      },
      {
        day: 5,
        title: "Ghangaria to Joshimath/Pipalkoti",
        desc: "Descend to Govindghat and drive back to Joshimath/Pipalkoti for overnight stay."
      },
      {
        day: 6,
        title: "Joshimath/Pipalkoti to Haridwar",
        desc: "After breakfast, drive back to Haridwar with beautiful views of the Alaknanda River and Himalayan valleys."
      }
    ]
  }
];
