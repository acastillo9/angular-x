import { Injectable } from '@angular/core';
import { Tweet } from '../models/tweet.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  tweets: Tweet[] = [
    {
      id: 1,
      user: {
        profilePhoto:
          'https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg',
        name: 'Elon Musk',
        username: '@elonmusk',
      },
      date: '20h',
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, aut repudiandae. Quo modi iste
                        laboriosam, possimus quasi et officiis unde facere quaerat, voluptatem perferendis adipisci quae
                        est animi rerum deleniti!`,
      image: '',
      comments: 23,
      retweets: 11,
      likes: 34,
      stats: 22,
    },
    {
      id: 2,
      user: {
        profilePhoto:
          'https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg',
        name: 'Elon Musk',
        username: '@elonmusk',
      },
      date: '20h',
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, aut repudiandae. Quo modi iste
                        laboriosam, possimus quasi et officiis unde facere quaerat, voluptatem perferendis adipisci quae
                        est animi rerum deleniti!`,
      image: '',
      comments: 23,
      retweets: 11,
      likes: 34,
      stats: 22,
    },
    {
      id: 3,
      user: {
        profilePhoto:
          'https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg',
        name: 'Elon Musk',
        username: '@elonmusk',
      },
      date: '20h',
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, aut repudiandae. Quo modi iste
                        laboriosam, possimus quasi et officiis unde facere quaerat, voluptatem perferendis adipisci quae
                        est animi rerum deleniti!`,
      image: '',
      comments: 23,
      retweets: 11,
      likes: 34,
      stats: 22,
    },
  ];

  constructor(private http: HttpClient) {}

  addTweet(tweet: Tweet) {
    // This is creating mock data
    const newTweet = {
      ...tweet,
      id: this.tweets.length + 1,
      user: {
        profilePhoto:
          'https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg',
        name: 'Elon Musk',
        username: '@elonmusk',
      },
      date: new Date().toISOString(),
      image: '',
      comments: 0,
      retweets: 0,
      likes: 0,
      stats: 0,
    };

    this.tweets.push(newTweet);
  }

  getTweet(tweetId: string): Observable<Tweet> {
    return this.http.get<Tweet>(`/tweets/${tweetId}`);
  }
}
