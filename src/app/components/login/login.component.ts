import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password: string;

  constructor(
    private authService:AuthService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.login(this.email, this.password)
      .then((res)=> {
        this._flashMessagesService.show('You are logged in', { cssClass: 'alert-success', timeout: 4000 });

        console.log(res);
        this.router.navigate(['/']);
      })
      .catch((err)=>{
        this._flashMessagesService.show(err.message, { cssClass: 'alert-danger', timeout: 4000 });
        console.log(err);
        this.router.navigate(['/login']);
      });
  }

}
