import { Subject } from 'rxjs/Subject';

export class UserService {
  userActivated = new Subject();
}
