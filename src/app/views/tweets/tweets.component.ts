import { Component, Input } from '@angular/core';
import { TweetInfo } from '../../models/TweetInfo.model';

@Component({
  selector: 'app-tweets',
  standalone: true,
  imports: [],
  templateUrl: './tweets.component.html',
  styleUrl: './tweets.component.scss',
})
export class TweetsComponent {
  @Input() tweets: TweetInfo[] = [];
}
