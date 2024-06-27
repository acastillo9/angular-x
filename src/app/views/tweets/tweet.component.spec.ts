import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsComponent } from './tweet.component';

describe('TweetsComponent', () => {
  let component: TweetsComponent;
  let fixture: ComponentFixture<TweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TweetsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
