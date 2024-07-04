import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tweet } from '../../models/tweet.model';

@Component({
  selector: 'app-tweet-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tweet-input.component.html',
  styleUrl: './tweet-input.component.scss'
})
export class TweetInputComponent {
  @Output()
  onInput: EventEmitter<Tweet> = new EventEmitter()

  tweetText: string = ''

  saveTweet() {
    const newTweet: Tweet = {
      content: this.tweetText
    }
    this.onInput.emit(newTweet)
  }
}
