import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {

  constructor(public afa: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise( (resolve, reject) => {
      this.afa.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    } );
  }

}
