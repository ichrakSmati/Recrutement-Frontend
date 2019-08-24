import {Component, OnDestroy, OnInit} from '@angular/core';
import {Offre} from "../../models/offre.model";
import {Router} from "@angular/router";
import {OffreService} from "../../services/offre.service";
import {QuizService} from "../../service/quiz.service";
import {Quiz} from "../../models/quiz.model";



@Component({
  templateUrl: './deposerOffre.component.html',
})
export class DeposerOffreComponent implements  OnInit  {

  offre: Offre = new Offre();
  date = new Date();
  quizs: Quiz[];

  constructor(private router: Router, private offreService: OffreService, private quizService: QuizService) {
  }

  ngOnInit(): void {
    this.offre.quiz=new Quiz();
    this.quizService.getAllQuiz()
      .subscribe(data => {
        this.quizs = data;
      });
  }
  createOffre(): void {
    this.offre.dateAjout=new Date();
    this.offre.dateDebut=this.date;
    this.offre.etat="disponible";
    this.offreService.createOffre(this.offre)
      .subscribe(data => {
        alert('offre created successfully.');
      });
  }


}
