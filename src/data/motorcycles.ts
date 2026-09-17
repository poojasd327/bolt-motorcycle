export interface Motorcycle {
  id: string;
  name: string;
  tagline: string;
  category: 'Cruiser' | 'Roadster' | 'Adventure' | 'Cafe Racer';
  priceStarting: number; // in INR (Ex-showroom / starting price)
  priceFormatted: string;
  displacement: string; // e.g. "349 cc"
  power: string; // e.g. "20.2 bhp @ 6100 rpm"
  torque: string; // e.g. "27 Nm @ 4000 rpm"
  transmission: string; // "5 Speed" | "6 Speed"
  mileage: string; // e.g. "35 kmpl"
  weight: string; // e.g. "195 kg"
  fuelCapacity: string; // e.g. "13 L"
  imageUrl: string;
  featured?: boolean;
  colors: {
    name: string;
    hex: string;
  }[];
  description: string;
}

export const motorcycles: Motorcycle[] = [
  {
    id: 'hunter-350',
    name: 'Hunter 350',
    tagline: 'Shot of Motorcycling',
    category: 'Roadster',
    priceStarting: 149900,
    priceFormatted: '₹1.49 Lakhs*',
    displacement: '349 cc',
    power: '20.2 bhp @ 6100 rpm',
    torque: '27 Nm @ 4000 rpm',
    transmission: '5 Speed',
    mileage: '36.2 kmpl',
    weight: '181 kg',
    fuelCapacity: '13 L',
    imageUrl: '/bolt-motorcycle/images/bikes/hunter_350.avif',
    featured: true,
    colors: [
      { name: 'Dapper White', hex: '#EAEAEA' },
      { name: 'Rebel Blue', hex: '#1C497B' },
      { name: 'Factory Black', hex: '#1C1C1C' },
      { name: 'Rebel Red', hex: '#B71C1C' },
    ],
    description:
      'Agile, responsive, and packed with punch. The Hunter 350 brings modern urban ergonomics with a thumping J-series engine.',
  },
  {
    id: 'classic-350',
    name: 'Classic 350',
    tagline: 'Reborn for the Legend',
    category: 'Cruiser',
    priceStarting: 193080,
    priceFormatted: '₹1.93 Lakhs*',
    displacement: '349 cc',
    power: '20.2 bhp @ 6100 rpm',
    torque: '27 Nm @ 4000 rpm',
    transmission: '5 Speed',
    mileage: '35 kmpl',
    weight: '195 kg',
    fuelCapacity: '13 L',
    imageUrl: '/bolt-motorcycle/images/bikes/classic 350.jpeg',
    featured: true,
    colors: [
      { name: 'Chrome Red', hex: '#8B0000' },
      { name: 'Halcyon Green', hex: '#2E5A44' },
      { name: 'Dark Stealth Black', hex: '#222222' },
      { name: 'Signals Marsh Grey', hex: '#63666A' },
    ],
    description:
      'The timeless legend reborn with smoother J-series twin-downturn frame, refined counterbalanced engine, and classic teardrop tank.',
  },
  {
    id: 'himalayan-450',
    name: 'Himalayan 450',
    tagline: 'Built for All Roads, Built for No Roads',
    category: 'Adventure',
    priceStarting: 285000,
    priceFormatted: '₹2.85 Lakhs*',
    displacement: '452 cc',
    power: '40 bhp @ 8000 rpm',
    torque: '40 Nm @ 5500 rpm',
    transmission: '6 Speed',
    mileage: '30 kmpl',
    weight: '196 kg',
    fuelCapacity: '17 L',
    imageUrl: '/bolt-motorcycle/images/bikes/himalayan_450.jpeg',
    featured: true,
    colors: [
      { name: 'Hanle Black', hex: '#191919' },
      { name: 'Kamet White', hex: '#F5F5F5' },
      { name: 'Slate Poppy Blue', hex: '#2B5B84' },
      { name: 'Kaza Brown', hex: '#5C4033' },
    ],
    description:
      'Powered by the liquid-cooled Sherpa 450 engine with ride-by-wire, TFT TripperDash navigation, long-travel USD suspension, and switchable ABS.',
  },
  {
    id: 'bullet-350',
    name: 'Bullet 350',
    tagline: '1932 to Eternity',
    category: 'Roadster',
    priceStarting: 173562,
    priceFormatted: '₹1.73 Lakhs*',
    displacement: '349 cc',
    power: '20.2 bhp @ 6100 rpm',
    torque: '27 Nm @ 4000 rpm',
    transmission: '5 Speed',
    mileage: '37 kmpl',
    weight: '195 kg',
    fuelCapacity: '13 L',
    imageUrl: '/bolt-motorcycle/images/bikes/bullet_350.jpeg',
    featured: false,
    colors: [
      { name: 'Black Gold', hex: '#B8860B' },
      { name: 'Standard Black', hex: '#111111' },
      { name: 'Military Red', hex: '#A91B1B' },
    ],
    description:
      'The world longest running motorcycle brand in continuous production. Hand-pinstriped tank with iconic metallic badge and soul-stirring thump.',
  },
  {
    id: 'meteor-350',
    name: 'Meteor 350',
    tagline: 'Cruiser Core',
    category: 'Cruiser',
    priceStarting: 205900,
    priceFormatted: '₹2.05 Lakhs*',
    displacement: '349 cc',
    power: '20.2 bhp @ 6100 rpm',
    torque: '27 Nm @ 4000 rpm',
    transmission: '5 Speed',
    mileage: '35 kmpl',
    weight: '191 kg',
    fuelCapacity: '15 L',
    imageUrl: '/bolt-motorcycle/images/bikes/meteor_350.jpeg',
    featured: true,
    colors: [
      { name: 'Supernova Gold', hex: '#DAA520' },
      { name: 'Stellar Black', hex: '#222222' },
      { name: 'Fireball Red', hex: '#DC143C' },
      { name: 'Aurora Green', hex: '#1B4D3E' },
    ],
    description:
      'The quintessential highway cruiser. Relaxed riding posture, windshield, Tripper navigation system, and buttery smooth low-end torque.',
  },
  {
    id: 'continental-gt-650',
    name: 'Continental GT 650',
    tagline: 'Ton of Fun Cafe Racer',
    category: 'Cafe Racer',
    priceStarting: 319000,
    priceFormatted: '₹3.19 Lakhs*',
    displacement: '648 cc Twin',
    power: '47 bhp @ 7250 rpm',
    torque: '52 Nm @ 5250 rpm',
    transmission: '6 Speed',
    mileage: '25 kmpl',
    weight: '214 kg',
    fuelCapacity: '12.5 L',
    imageUrl: '/bolt-motorcycle/images/bikes/continental gt 360.jpeg',
    featured: true,
    colors: [
      { name: 'Mr Clean Chrome', hex: '#DCDCDC' },
      { name: 'Apex Grey', hex: '#4A5568' },
      { name: 'Rocker Red', hex: '#CC0000' },
      { name: 'Slipstream Blue', hex: '#1E3A8A' },
    ],
    description:
      'Inspired by the 1960s British cafe racing culture. Clip-on handlebars, rear-set footpegs, sculpted tank, and a roar from parallel-twin headers.',
  },
  {
    id: 'interceptor-650',
    name: 'Interceptor 650',
    tagline: 'Easy-going California Roadster',
    category: 'Roadster',
    priceStarting: 303000,
    priceFormatted: '₹3.03 Lakhs*',
    displacement: '648 cc Twin',
    power: '47 bhp @ 7250 rpm',
    torque: '52 Nm @ 5250 rpm',
    transmission: '6 Speed',
    mileage: '25 kmpl',
    weight: '217 kg',
    fuelCapacity: '13.7 L',
    imageUrl: '/bolt-motorcycle/images/bikes/interceptor 360.jpeg',
    featured: false,
    colors: [
      { name: 'Mark 2 Chrome', hex: '#E0E0E0' },
      { name: 'Canyon Red', hex: '#990000' },
      { name: 'Sunset Strip', hex: '#CC5500' },
      { name: 'Black Ray', hex: '#1C1C1C' },
    ],
    description:
      'Iconic 1960s beach roadster styling meets modern twin engineering. Wide handlebars, comfortable bench seat, and effortless power delivery.',
  },
  {
    id: 'shotgun-650',
    name: 'Shotgun 650',
    tagline: 'Inspired by Custom Culture',
    category: 'Cafe Racer',
    priceStarting: 359000,
    priceFormatted: '₹3.59 Lakhs*',
    displacement: '648 cc Twin',
    power: '47 bhp @ 7250 rpm',
    torque: '52.3 Nm @ 5650 rpm',
    transmission: '6 Speed',
    mileage: '24 kmpl',
    weight: '240 kg',
    fuelCapacity: '13.8 L',
    imageUrl: '/bolt-motorcycle/images/bikes/shotgun_650.jpeg',
    featured: false,
    colors: [
      { name: 'Stencil White', hex: '#F0F0F0' },
      { name: 'Plasma Blue', hex: '#0F52BA' },
      { name: 'Sheetmetal Grey', hex: '#5A6577' },
      { name: 'Green Drill', hex: '#3B4D3C' },
    ],
    description:
      'A neo-retro custom bobber with modular single to double seating, dark-finished engine cases, and striking low-slung stance.',
  },
];
