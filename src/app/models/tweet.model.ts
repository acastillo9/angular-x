export interface Tweet {
  id: number;
  user: {
    profilePhoto: string;
    name: string;
    username: string;
    publishTime: string;
  };
  content: string;
  image?: string;
  comments: number;
  retweets: number;
  likes: number;
  stats: number;
  save: string;
  share: string;
}
