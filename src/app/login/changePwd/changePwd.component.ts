import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {AuthService} from "../../service/auth.service";
import {TokenStorage} from "../../service/token.storage";
import {QuestionService} from "../../service/question.service";
import {User} from "../../models/user.model";

@Component({
  selector: '',
  templateUrl: './changePwd.component.html'
})
export class ChangePwdComponent implements OnInit {
  title = 'recrutement';
  username: string;
  password: string;
  user: any;
  tokenUrl: string;
  pwd1: string;
  pwd2: string;
  result: any;
  constructor( private authService: AuthService, private router: Router, private token: TokenStorage, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.tokenUrl = params["token"];
    });
    console.log(this.tokenUrl);
    this.authService.verifyToken(this.tokenUrl).subscribe(data => {
      this.user = data;
      console.log(this.user);
      console.log(this.user['email']);
    });
    if (this.user!=null){
      console.log("denied");
    }
  }

  login(){
    this.authService.resetPwd(this.tokenUrl, this.pwd1).subscribe(data => {
     this.result=data;
      this.authService.sendCredential(this.user['email'], this.pwd1).subscribe(
        data => {
          this.token.saveToken(data.token);
          console.log(this.token.getToken());
          console.log("send credential operation");
        },
        error => {
          console.log(error);
        },
        () => {
          this.authService.getUserAllData().subscribe(
            data => {
              this.user = data;
              localStorage.setItem("ROLE", this.user.role.role);
              localStorage.setItem("Id", this.user.id);
              localStorage.setItem("Nom", this.user.nom);
              localStorage.setItem("Prenom", this.user.prenom);
              localStorage.setItem("Email", this.user.email);
              localStorage.setItem("DateNaissance", this.user.dateNaissance);
              localStorage.setItem("Photo", this.user.photo);
              console.log(localStorage.getItem("ROLE"));
              if(this.user.role.role == "ROLE_ADMIN" || this.user.role.role == "ROLE_RECRUTEUR" ) {
                this.router.navigate(['/pages/dashboard']);
              }
              else if (this.user.role.role == "ROLE_CANDIDAT"){
                this.router.navigate(['/emploi']);
              }else {
                this.router.navigate(['/signin']);
              }
            }
          );
        }
      );
    });
  }

}
