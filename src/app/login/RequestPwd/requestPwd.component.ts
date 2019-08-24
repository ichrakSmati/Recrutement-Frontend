import { Component } from '@angular/core';
import {Params, Router} from '@angular/router';
import {AuthService} from "../../service/auth.service";
import {TokenStorage} from "../../service/token.storage";

@Component({
  selector: '',
  templateUrl: './requestPwd.component.html'
})
export class RequestPwdComponent {
  title = 'request pwd';
  email: string;
  user: any;
  result :boolean;
  message: string="";
  constructor( private authService: AuthService, private router: Router, private token: TokenStorage) { }


  requestPwd(): void {

    this.authService.requestPwd(this.email)
      .subscribe(data => {
        this.result = data;
      });
    if (this.result==true){
      this.message="le lien de reintialisation du mot de passe a été envoyé";
    }else{
      this.message="le mail est invalide";
    }
    console.log(this.result);

  }
}
