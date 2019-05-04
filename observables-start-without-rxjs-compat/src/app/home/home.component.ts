import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObservableSubscription: Subscription;
  customObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000)
      .pipe(map(
        (data: number) => data * 2
      ));
    this.numbersObservableSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('firstPackage');
        }, 2000);
        setTimeout(() => {
          observer.next('secondPackage');
        }, 4000);
        setTimeout(() => {
          // observer.error('this does not work');
          observer.complete();
        }, 5000);
        setTimeout(() => {
          observer.next('third package');
        }, 6000);
      }
    );
    this.customObservableSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('Completed!');
      }
    );
  }

  ngOnDestroy() {
    this.numbersObservableSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }

}
