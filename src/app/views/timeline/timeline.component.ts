import { Tweet } from '../../models/tweet.model';
import { Component } from '@angular/core';
import { TweetComponent } from '../../components/tweet/tweet.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [TweetComponent, CommonModule, FormsModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  tweets: Tweet[] = [
    {
      id: 1,
      user: {
        profilePhoto:
          'https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg',
        name: 'Elon Musk',
        username: '@elonmusk',
        publishTime: '20h',
      },
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, aut repudiandae. Quo modi iste
                        laboriosam, possimus quasi et officiis unde facere quaerat, voluptatem perferendis adipisci quae
                        est animi rerum deleniti!`,
      image: '',
      comments: 23,
      retweets: 11,
      likes: 34,
      stats: 22,
      save: '',
      share: '',
    },
    {
      id: 2,
      user: {
        profilePhoto:
          'https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg',
        name: 'Elon Musk',
        username: '@elonmusk',
        publishTime: '20h',
      },
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, aut repudiandae. Quo modi iste
                        laboriosam, possimus quasi et officiis unde facere quaerat, voluptatem perferendis adipisci quae
                        est animi rerum deleniti!`,
      image: '',
      comments: 23,
      retweets: 11,
      likes: 34,
      stats: 22,
      save: '',
      share: '',
    },
    {
      id: 3,
      user: {
        profilePhoto:
          'https://pbs.twimg.com/profile_images/1780044485541699584/p78MCn3B_400x400.jpg',
        name: 'Elon Musk',
        username: '@elonmusk',
        publishTime: '20h',
      },
      content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, aut repudiandae. Quo modi iste
                        laboriosam, possimus quasi et officiis unde facere quaerat, voluptatem perferendis adipisci quae
                        est animi rerum deleniti!`,
      image: '',
      comments: 23,
      retweets: 11,
      likes: 34,
      stats: 22,
      save: '',
      share: '',
    },
  ];

  tweetText: string = '';

  tweetClicked() {
    console.log('Tweet Clicked!!!')
  }

  saveTweet() {
    console.log('tweet text', this.tweetText)
  }
}
