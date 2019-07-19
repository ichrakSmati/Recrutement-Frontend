import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../../service/quiz.service";
import {Quiz} from "../../models/quiz.model";

@Component({
  selector: 'ngx-quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent implements  OnInit {

  type: string[] = ["aa", "bb", "cc"];

  quizs: Quiz[];
  selectedQuiz: any;
  quizToAdd: Quiz = new Quiz();

  constructor(private router: Router, private quizService: QuizService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.quizService.getAllQuiz()
      .subscribe(data => {
        this.quizs = data;
      });
  }

  createQuiz(): void {
    this.quizService.creatQuiz(this.quizToAdd)
      .subscribe(data => {
        alert('Quiz created successfully.');
        //this.router.navigate(['question']);
      });
  }
}
