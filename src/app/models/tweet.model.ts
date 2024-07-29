import { User } from './user.model';

export interface Tweet {
  id?: number;
  user?: User;
  content: string;
  date?: string;
  image?: string;
  comments?: number;
  retweets?: number;
  likes?: number;
  stats?: number;
}
