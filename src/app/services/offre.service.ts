
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Offre } from '../models/offre.model';
import {User} from "../models/user.model";

@Injectable()
export class OffreService {

  user: User = new User();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    })};
  constructor(private http: HttpClient) {}
  private offreUrl = 'http://localhost:8088/emploi/';

  // private poleUrl = '/api';

  public getoffres() {
    return this.http.get<Offre[]>(this.offreUrl, this.httpOptions);
  }

  public getoffresDisponible() {
    return this.http.get<Offre[]>(this.offreUrl+ 'disponible', this.httpOptions);
  }

  public getoffre(id) {
    return this.http.get<Offre>(this.offreUrl + id, this.httpOptions);
  }

  public updateOffre(offre) {
    return this.http.put<Offre>(this.offreUrl ,  offre, this.httpOptions );
  }

  public deleteOffre(offre) {
    return this.http.delete(this.offreUrl+offre.id , this.httpOptions );
  }

  public createOffre(offre) {
    this.user.id= localStorage.getItem("Id");
    offre.recruteur = this.user;
    return this.http.post<Offre>(this.offreUrl, offre, this.httpOptions);
  }

}
