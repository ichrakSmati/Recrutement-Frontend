import {Component, OnInit} from '@angular/core';
import {CandidatService} from "../../services/candidat.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit{
  private users:User[];

  constructor(private candidatService:CandidatService){}

  private use: { name: string, title: string }[];

  ngOnInit() {
    this.candidatService.getCandidat().subscribe(data => {
      this.users = data;
      for (let user of this.users) {
        this.use=[{ name: user.nom, title: user.role.role }];
        console.log(user.nom);

      }
    });
  }


}
