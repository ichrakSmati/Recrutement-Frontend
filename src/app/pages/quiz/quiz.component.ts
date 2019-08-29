import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../service/quiz.service";
import {Quiz} from "../../models/quiz.model";
import {NbIconLibraries} from "@nebular/theme";

@Component({
  selector: 'ngx-quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent implements  OnInit {

  quizs: Quiz[];
  selectedQuiz: any;
  quizToAdd: Quiz = new Quiz();

  constructor(iconsLibrary: NbIconLibraries, private router: Router, private quizService: QuizService) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
  }

  ngOnInit() {
    this.quizService.getAllQuiz()
      .subscribe(data => {
        this.quizs = data;
      });
  }

  readQuiz(quiz: Quiz): void {
    this.selectedQuiz = quiz;
    this.router.navigate(['/pages/quiz/'+ this.selectedQuiz.id+'/question']);
  }

  createQuiz(){
    this.quizToAdd.active=false;
    this.quizService.creatQuiz(this.quizToAdd).subscribe(data => {
      this.router.navigate(['/pages/quiz']);
    });
  }

  activateQuiz(quiz : Quiz){
    this.quizService.activateQuiz(quiz).subscribe(data => {
    });
  }

  deactivate(quiz : Quiz){
    quiz.active=false;
    this.quizService.updateQuiz(quiz).subscribe(data => {
    });
  }


}
