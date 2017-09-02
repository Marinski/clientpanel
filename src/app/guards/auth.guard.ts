import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(
        private router:Router,
        private afa:AngularFireAuth
    ) { }

    canActivate(): Observable<boolean>{
        return this.afa.authState.map(auth => {
            if(!auth) {
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }
        });
    }
}