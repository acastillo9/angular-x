import { Component, Input } from '@angular/core';
import { Tweet } from '../../models/tweet.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.scss',
})
export class TweetComponent {
  @Input() tweets: Tweet[] = [];
}
