import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Quiz} from "../models/quiz.model";
import {Injectable} from "@angular/core";

@Injectable()
export class QuizService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    })};
  constructor(private http: HttpClient) {}
  private quizUrl = 'http://localhost:8088/quiz';


  public getAllQuiz() {
    return this.http.get<Quiz[]>(this.quizUrl, this.httpOptions);
  }

  public getQuiz(id) {
    return this.http.get<Quiz>(this.quizUrl + id, this.httpOptions);
  }

  public updateQuiz(quiz) {
    return this.http.put<Quiz>(this.quizUrl + 'update' ,  quiz, this.httpOptions );
  }


  public creatQuiz(quiz) {
    return this.http.post<Quiz>(this.quizUrl +'/', quiz, this.httpOptions);
  }

  public creatQuestion(question) {
    return this.http.post<Quiz>(this.quizUrl +'/', question, this.httpOptions);
  }


}
