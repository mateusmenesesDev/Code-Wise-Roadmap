export interface UserRating {
  technology: string;
  rating: 0 | 0.25 | 0.5 | 0.75 | 1;
}

export interface User {
  id: string;
  email: string;
  isAdmin: boolean;
  ratings?: UserRating[];
}
