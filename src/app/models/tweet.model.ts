import { User } from "./user.model";

export interface Tweet {
  id: number;
  user: User;
  content: string;
  image?: string;
  comments: number;
  retweets: number;
  likes: number;
  stats: number;
  save: string;
  share: string;
}
