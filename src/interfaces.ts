import { LoyaltyUser, Permissions } from "./enums.js";
import { Country, Price } from "./types.js";

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
}

export interface User {
  firstName: string;
  lastName: string;
  permissions: Permissions;
  isReturning: boolean;
  age: number;
  stayedAt: string[];
}

export interface Property {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: Country;
  };
  contact: [number, string];
  isAvailable: boolean;
}
