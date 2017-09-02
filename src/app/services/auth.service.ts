import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';


@Injectable()
export class AuthService {

  constructor(public afa: AngularFireAuth) { }

  // Login user
  login(email: string, password: string) {
    return new Promise( (resolve, reject) => {
      this.afa.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData), err => reject(err));
    } );
  }

  // Check user status
  getAuth(){
    return this.afa.authState.map(auth=>auth);
  }
  
  // Logout user
  logout(){
    this.afa.auth.signOut();
  }

  register(email, password) {
    return new Promise((resolve,reject)=> {
      this.afa.auth.createUserWithEmailAndPassword(email,password)
        .then(userData=>resolve(userData), err => reject(err));
    })
  }
}
