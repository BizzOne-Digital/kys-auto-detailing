/**
 * Client imagery, stored in /public/kvs_images.
 * To replace a photo, overwrite the file (keep the name) or change its `src` here.
 */
const img = (file: string) => `/kvs_images/${file}`;

export const images = {
  hero: { src: img("01-hero.png"), alt: "Black muscle car with headlights on in a dark detailing studio with blue lighting" },
  handWash: { src: img("02-handWash.png"), alt: "KVS detailer hand washing a foam-covered car with a microfiber mitt" },
  interior: { src: img("03-interior.png"), alt: "Clean, detailed car interior with leather seats and dashboard" },
  mustang: { src: img("04-mustang.png"), alt: "Glossy black Mustang after a full detail in the KVS studio" },
  garageNight: { src: img("05-garageNight.png"), alt: "Freshly detailed silver Mustang under blue studio lighting" },
  moodyCar: { src: img("06-moodyCar.png"), alt: "Detailer pressure washing a black car covered in foam" },
  porsche: { src: img("07-porsche.png"), alt: "Foam pressure wash on a black car under hexagon studio lights" },
  coupe: { src: img("08-coupe.png"), alt: "Black car being rinsed with a pressure washer during a detail" },
  camaro: { src: img("09-camaro.png"), alt: "Pressure washing a foam-covered black muscle car" },
  bmw: { src: img("10-bmw.png"), alt: "Foam wash on a black Mustang in the KVS Auto Detailing studio" },
} as const;
