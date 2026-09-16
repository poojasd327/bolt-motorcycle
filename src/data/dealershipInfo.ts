export interface DealershipData {
  name: string;
  tagline: string;
  reAuthorizedBadge: string;
  foundedYear: number;
  phone: string;
  phoneRaw: string;
  email: string;
  whatsapp: string;
  businessHours: {
    weekdays: string;
    sunday: string;
  };
  address: {
    street: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  aboutUs: {
    intro: string;
    growthPillars: string;
    satisfactionFocus: string;
    highlights: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

export const dealershipData: DealershipData = {
  name: 'Bolt Motorcycles',
  tagline: 'Pure Motorcycling, Exceptional Journeys.',
  reAuthorizedBadge: 'Authorised Royal Enfield Dealership',
  foundedYear: 2021,
  phone: '+91 63091 25551',
  phoneRaw: '+916309125551',
  email: 'gmboltllp@gmail.com',
  whatsapp: '916309125551',
  businessHours: {
    weekdays: 'Mon - Sat: 9:00 AM - 8:30 PM',
    sunday: 'Sun: 10:00 AM - 6:00 PM',
  },
  address: {
    street: 'Plot No. 42, Main Commercial Boulevard, Near City Centre',
    landmark: 'Opposite RE Express Service Bay',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500081',
  },
  stats: [
    {
      label: 'Bikes Delivered',
      value: '15K+',
      description: 'Happy Royal Enfield riders on the road',
    },
    {
      label: 'Services Completed',
      value: '50K+',
      description: 'Express maintenance & certified care',
    },
    {
      label: 'Genuine Gear & Parts',
      value: '100+',
      description: 'Apparel, helmets & custom accessories',
    },
    {
      label: 'Customer Rating',
      value: '4.9 ★',
      description: 'Based on 5,000+ verified customer reviews',
    },
  ],
  aboutUs: {
    intro:
      'Bolt Motorcycles is an authorised Royal Enfield dealership, committed to delivering an exceptional motorcycle-buying and ownership experience. Since starting our journey in 2021, we have built a reputation for excellence, trust, and passion for pure motorcycling.',
    growthPillars:
      'Our growth is built on strong and well-defined processes, customer-centric operations, and an experienced management team. We focus on every stage of the customer journey—from enquiry and product selection to delivery, after-sales service, and long-term relationship management.',
    satisfactionFocus:
      'With customer satisfaction at the centre of our approach, our experienced management and dedicated team continuously work towards maintaining high operational standards, improving customer experience, and building lasting relationships.',
    highlights: [
      {
        title: 'Customer-Centric Operations',
        description:
          'Personalized assistance for model selection, customized test rides, transparent pricing, and instant loan approvals.',
        icon: 'People',
      },
      {
        title: 'Authorised Service Center',
        description:
          'High-tech diagnostic tools, factory-trained RE mechanics, express oil changes, and 100% genuine spare parts.',
        icon: 'Build',
      },
      {
        title: 'Seamless Journey',
        description:
          'Complete hassle-free support from enquiry to high-octane delivery celebrations and long-term relationship care.',
        icon: 'Speed',
      },
      {
        title: 'RE Apparel & Genuine Accessories',
        description:
          'Explore authentic Royal Enfield riding jackets, helmets, gloves, custom exhausts, and touring luggage.',
        icon: 'Checkroom',
      },
    ],
  },
};
