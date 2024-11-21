export interface Review {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
}

export interface User {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
}

export interface Property {
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: string;
  isAvailable: boolean;
}
