import { LoyaltyUser, Permissions } from "./enums.js";

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
  price: number;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: [number, string];
  isAvailable: boolean;
}
