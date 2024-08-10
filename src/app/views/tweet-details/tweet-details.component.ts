import { Component } from '@angular/core';
import { TweetComponent } from '../../components/tweet/tweet.component';
import { Tweet } from '../../models/tweet.model';
import { ActivatedRoute } from '@angular/router';
import { TweetService } from '../../services/tweet.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tweet-details',
  standalone: true,
  imports: [TweetComponent, CommonModule],
  templateUrl: './tweet-details.component.html',
  styleUrl: './tweet-details.component.scss',
})
export class TweetDetailsComponent {
  tweet$: Observable<Tweet> | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tweetService: TweetService
  ) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      const tweetId = params['id'];
      this.tweet$ = this.tweetService.getTweet(tweetId);
    });
    this.activatedRoute.queryParams.subscribe(queryParams => {
      console.log(queryParams);
    });
  }
}
