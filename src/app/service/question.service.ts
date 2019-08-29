import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Question} from "../models/question.model";
import {Reponse} from "../models/reponse.model";
import {Quiz} from "../models/quiz.model";

@Injectable()
export class QuestionService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    })};
  constructor(private http: HttpClient) {}
  private questionUrl = 'http://localhost:8088/quiz/';
  private quizUrl = 'http://localhost:8088/quiz';

  public getAllQuestionByQuizId(id : number) {
    return this.http.get<Question[]>(this.questionUrl +id+'/question', this.httpOptions);
  }

  public creatQuestion(question) {
    return this.http.post<Question>(this.questionUrl +'question', question, this.httpOptions);
  }

  deleteQuestion(question){
    return this.http.delete(this.questionUrl +'question/'+question.id, this.httpOptions);
  }
  /*
  public getQuiz(id) {
    return this.http.get<Quiz>(this.questionUrl + id, this.httpOptions);
  }

  public updateQuiz(quiz) {
    return this.http.put<Quiz>(this.questionUrl + 'update' ,  quiz, this.httpOptions );
  }


  public creatQuiz(quiz) {
    return this.http.post<Quiz>(this.questionUrl +'/', quiz, this.httpOptions);
  }
*/

}
