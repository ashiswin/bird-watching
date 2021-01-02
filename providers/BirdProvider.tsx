export interface Bird {
  id: string;
  name: string;
  scientific: string;
  image: string;
  description: string;
  lastLocation?: {
    lat: number;
    lon: number;
    date: string;
    time: string;
  };
}

export const Birds: Bird[] = [
  {
    id: "1",
    name: "Bird",
    scientific: "Birda Flyetica",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg",
    description: "Birdy bird bird",
  },
  {
    id: "2",
    name: "Big Bird",
    scientific: "Biggus Birdica",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg",
    description: "Big birdy bird bird",
    lastLocation: {
      lat: 37.78825,
      lon: -122.4324,
      date: "2021-01-02",
      time: "10:03:00",
    },
  },
  {
    id: "3",
    name: "Yellow Bird",
    scientific: "Birdus Yellowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg",
    description: "Yellow birdy bird bird",
  },
  {
    id: "4",
    name: "Red Bird",
    scientific: "Birdus Redowa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/1200px-Eopsaltria_australis_-_Mogo_Campground.jpg",
    description: "Red birdy bird bird",
  },
];
