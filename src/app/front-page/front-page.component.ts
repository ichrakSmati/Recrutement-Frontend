import {Component, OnInit} from '@angular/core';
import {LocationStrategy} from "@angular/common";
import {Candidat} from "../models/candidat.models";
import {ActivatedRoute, Router} from "@angular/router";
import {CandidatService} from "../services/candidat.service";
import {User} from "../models/user.model";
import {AuthService} from "../service/auth.service";

@Component({
  selector: '',
  templateUrl: './front-page.component.html'


})
export class FrontPageComponent implements OnInit{
  cnx:string=null;
  private candidat: User;
  private connected: boolean;

  constructor(private route: ActivatedRoute ,private candidatService: CandidatService, private  authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.authService.getLoggedin()== "true"){
      this.connected=true;
      this.candidatService.getCandidatId(localStorage.getItem("Id"))
        .subscribe(data => {
          this.candidat = data;
        });
    }else{
      this.connected=false;
    }
  }

  logout(){
    this.authService.setLoggedOut();
    this.router.navigate(['/login']);
  }
}
