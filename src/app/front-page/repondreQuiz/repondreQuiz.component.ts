import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {QuestionService} from "../../service/question.service";
import {Question} from "../../models/question.model";
import {Reponse} from "../../models/reponse.model";
import {Quiz} from "../../models/quiz.model";
import {QuizService} from "../../service/quiz.service";
import * as $ from "jquery";

@Component({
  selector: '',
  templateUrl: './repondreQuiz.component.html',
})
export class RepondreQuizComponent implements  OnInit {

  questions: Question[];
  private quizId: number;
  private demandeId: number;
  result: Quiz= new Quiz();
  constructor(private router: Router,private quizService: QuizService,private questionService: QuestionService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
     this.quizId = Number.parseInt(params["quizId"]);
     this.demandeId = Number.parseInt(params["demandeId"]);
    });
    this.questionService.getAllQuestionByQuizId(this.quizId).subscribe(data => {
      this.questions = data;
      this.result.id=this.quizId;
    });

  }

  repondre(){
    this.result.questions= new Array();
    $('form').serializeArray().forEach(e =>  {
      let question : Question = new Question();
      question.id=e.name;
      question.reponses= new Array();
      let reponse : Reponse = new Reponse();
      reponse.id=e.value;
      question.reponses.push(reponse);
      this.result.questions.push(question);
    });
    this.quizService.reponseQuiz(this.result, this.demandeId).subscribe(data=>{
      this.router.navigate(['/emploi']);
    });
  }


}
