export class CounterService {

  count: number = 0;

  incrementCount() {
    this.count++;
    console.log('Number of times a user was activated / inactivated is ' + this.count);
  }

}
