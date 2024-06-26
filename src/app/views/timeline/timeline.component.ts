import { TweetInfo } from './../../models/TweetInfo.model';
import { Component } from '@angular/core';
import { TweetsComponent } from '../tweets/tweets.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [TweetsComponent, CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  tweets: TweetInfo[] = [
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
  ];
}
