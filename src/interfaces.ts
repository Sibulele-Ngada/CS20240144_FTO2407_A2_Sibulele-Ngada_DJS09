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
