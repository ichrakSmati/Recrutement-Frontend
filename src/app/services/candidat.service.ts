
import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import { Demande } from '../models/demande.model';
import {User} from "../models/user.model";
import {Offre} from "../models/offre.model";
import {userInfo} from "os";
import {Observable} from "rxjs";
import {Candidat} from "../models/candidat.models";

@Injectable()
export class CandidatService {

  user: User = new User();
  offre: Offre =new  Offre();
  today = new Date();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    })};
  constructor(private http: HttpClient) {}
  private candidatUrl = 'http://localhost:8088/user/';

  // private poleUrl = '/api';

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    console.log('okkkk');

    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:8088/cv/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
  getCandidatId(id){
    return this.http.get<User>(this.candidatUrl + 'id/' + id, this.httpOptions);

  }

  getnombreCandidatParoffre(offre){
    return this.http.get<number[]>(this.candidatUrl+'nombrecandidat'+ offre, this.httpOptions);
  }

}


