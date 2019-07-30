import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Question} from "../models/question.model";
import {Reponse} from "../models/reponse.model";
import {Quiz} from "../models/quiz.model";
import {Recruteur} from "../models/recruteur.model";

@Injectable()
export class CompteService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    })};
  constructor(private http: HttpClient) {}
  private userUrl = 'http://localhost:8088/user/';

  public getRecruteurs() {
    return this.http.get<Recruteur[]>(this.userUrl+'recruteurs', this.httpOptions);
  }

  public creatRecruteur(recruteur) {
    return this.http.post<Recruteur>(this.userUrl+'recruteurs', recruteur, this.httpOptions);
  }

  public editRecruteur(recruteur) {
    return this.http.put<Recruteur>(this.userUrl+'recruteurs', recruteur, this.httpOptions);
  }

}
