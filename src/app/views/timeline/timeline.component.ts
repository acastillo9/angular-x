import { Tweet } from '../../models/tweet.model';
import { Component } from '@angular/core';
import { TweetComponent } from '../../components/tweet/tweet.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TweetService } from '../../services/tweet.service';
import { TweetInputComponent } from '../../components/tweet-input/tweet-input.component';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [TweetComponent, CommonModule, FormsModule, TweetInputComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  tweetText = '';
  tweets = this.tweetService.tweets;

  constructor(
    private tweetService: TweetService,
    private router: Router,
    private authService: AuthService
  ) {}

  tweetClicked() {
    console.log('Tweet Clicked!!!');
    this.tweetText = 'Tweet Clicked';
  }

  saveTweet(tweet: Tweet) {
    this.tweetService.addTweet(tweet);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
