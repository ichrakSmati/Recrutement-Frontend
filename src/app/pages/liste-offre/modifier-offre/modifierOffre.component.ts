import {Component, OnDestroy, OnInit} from '@angular/core';
import {Offre} from "../../../models/offre.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {OffreService} from "../../../services/offre.service";
import {QuizService} from "../../../service/quiz.service";
import {Quiz} from "../../../models/quiz.model";
import {NbWindowService} from "@nebular/theme";



@Component({
  templateUrl: './modifierOffre.component.html',
})
export class ModifierOffreComponent implements  OnInit  {

  date : Date;
  quizs: Quiz[];
  offre: Offre;

  constructor(private router: Router, private offreService: OffreService, private quizService: QuizService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.offreService.getoffre(Number.parseInt(params['id'])).subscribe(data=>{
        this.offre=data;
        this.date=this.offre.dateDebut;
        console.log(this.offre);
      })
    });
    this.quizService.getAllActivatedQuiz() .subscribe(data => {
        this.quizs = data;
      });
  }

  updateOffre(): void {
    this.offre.dateDebut=this.date;
    this.offreService.updateOffre(this.offre)
      .subscribe(data => {
        alert('offre updated successfully.');
      });
  }


}
