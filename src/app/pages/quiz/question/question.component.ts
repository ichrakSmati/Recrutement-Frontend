import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {QuestionService} from "../../../service/question.service";
import {Question} from "../../../models/question.model";
import * as $ from "jquery";
import {Reponse} from "../../../models/reponse.model";
import {Quiz} from "../../../models/quiz.model";
import {QuizService} from "../../../service/quiz.service";
import {NbIconLibraries} from "@nebular/theme";


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
  questionToAdd: Question = new Question();
  private quizId: number;
  radioGroupValue = 'This is value 2';
  private responsDdiv: string;
  count : number;
  reponses: Reponse[] = new Array();
  constructor(iconsLibrary: NbIconLibraries, private router: Router,private quizService: QuizService,private questionService: QuestionService, private route: ActivatedRoute) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
     this.quizId = Number.parseInt(params["id"]);
    });

    this.questionService.getAllQuestionByQuizId(this.quizId).subscribe(data => {
      this.questions = data;
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
      '                         <input type="checkbox" id="cheked'+this.count+'" name="isActive" >Is Right' +
      '                    </form>' +
      '</div>';
    this.count++;
    $('#reponseBlock'+id).append(this.responsDdiv);
  }

  editQuestionJq(question){
    console.log(question);
    let i: number = 0;
    while (i < this.count) {
      let reponse: Reponse= new Reponse();
      reponse.reponse= $('#res'+i).val();
      reponse.validate= $('#cheked'+i).is(":checked");
      reponse.active = true;
      question.reponses.push(reponse);
      i++;
    }
    question.quiz= new Quiz();
    question.quiz.id=this.quizId;
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
