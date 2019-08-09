import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Recruteur} from "../../../models/recruteur.model";
import {CompteService} from "../../../service/compte.service";



@Component({
  selector: '',
  templateUrl: './recruteur.component.html',
})
export class RecruteurComponent implements  OnInit {

  recruteurs: Recruteur[];
  date = new Date();
  recToAdd : Recruteur = new  Recruteur();

  constructor(private router: Router, private compteService: CompteService,private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.compteService.getRecruteurs()
      .subscribe(data => {
        this.recruteurs = data;
      });
  }

  createRecruteur(){
    this.recToAdd.pass="123";
    this.recToAdd.dateNaissance=this.date;
    this.recToAdd.etat=false;
    console.log(this.recToAdd);
    this.compteService.creatRecruteur(this.recToAdd)
      .subscribe(data => {
        this.router.navigate(['/pages/recruteurs']);
    });
  }

  editRecruteur(recruteur){
      recruteur.dateNaissance=this.date;
      this.compteService.editRecruteur(recruteur)
        .subscribe(data => {
          this.router.navigate(['/pages/recruteurs']);
      });
    }

  statusRecruteur(recruteur){
    console.log("test1 : "+ recruteur.etat);
    if (recruteur.etat==true)
      recruteur.etat=false;
    else
      recruteur.etat=true;
    console.log("test2 : "+ recruteur.etat);
    this.compteService.editRecruteur(recruteur)
      .subscribe(data => {
        this.router.navigate(['/pages/recruteurs']);
      });
  }

}
