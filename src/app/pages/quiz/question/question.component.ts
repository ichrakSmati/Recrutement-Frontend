import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {QuestionService} from "../../../service/question.service";
import {Question} from "../../../models/question.model";
import * as $ from "jquery";
import {Reponse} from "../../../models/reponse.model";
import {Quiz} from "../../../models/quiz.model";
import {QuizService} from "../../../service/quiz.service";


interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  size: string;
  kind: string;
  items?: number;
}

@Component({
  selector: '',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements  OnInit {

  type: string[] = ["aa", "bb", "cc"];
  questions: Question[];
  selectedQuestion: any;
  questionToAdd: Question = new Question();
  private quizId: number;
  radioGroupValue = 'This is value 2';
  private responsDdiv: string;
  count : number;
  reponses: Reponse[] = new Array();
  constructor(private router: Router,private quizService: QuizService,private questionService: QuestionService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
     this.quizId = Number.parseInt(params["id"]);
    });

    this.questionService.getAllQuestionByQuizId(this.quizId).subscribe(data => {
      this.questions = data;
      console.log(this.questions);
    });
    this.count=0;
    this.questionToAdd.quiz= new Quiz();
    this.questionToAdd.quiz.id=this.quizId;
    this.questionToAdd.reponses = this.reponses;
  }

  addResponseJq(id){
    this.responsDdiv = '  <div class="col-md-12 responseB">' +
      '<form class="form-inline">' +
      '                        <label  class="label">Reponse</label>' +
      '                        <input name="responseTitle'+this.count+'" id="res'+this.count+'" nbInput type="text"  placeholder="Repnse">\n' +
      '                         <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">' +
      '                    </form>' +
      '</div>';
    this.count++;
    $('#reponseBlock'+id).append(this.responsDdiv);
  }

  editQuestionJq(question){
    console.log(question);
    question.active=true;
    let i: number = 0;
    while (i < this.count) {
      console.log( "Block statement execution no." + i );
      let reponse: Reponse= new Reponse();
      reponse.reponse= $('#res'+i).val();
      reponse.active = true;
      reponse.validate=true;
      question.reponses.push(reponse);
      i++;
    }
    console.log(this.questionToAdd);
    console.log("edit question");
    console.log(question);
    this.questionService.creatQuestion(question).subscribe(data => {
      this.router.navigate(['/pages/quiz/'+ this.quizId+'/question']);
    });
  }

  cancelAddResponseJq(id){
    this.count=0;
    $('#reponseBlock'+id).find('.responseB').remove().end();
  }

  deleteQuestion(question){
    this.questionService.deleteQuestion(question).subscribe(data => {
      this.router.navigate(['/pages/quiz/'+ this.quizId+'/question']);
    });
  }
}
