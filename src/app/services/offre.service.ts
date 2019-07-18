
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Offre } from '../models/offre.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OffreService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })};
  constructor(private http: HttpClient) {}
  private offreUrl = 'http://localhost:8081/offre/';

  // private poleUrl = '/api';

  public getoffres() {
    return this.http.get<Offre[]>(this.offreUrl, this.httpOptions);
  }

  public getoffre(id) {
    return this.http.get<Offre>(this.offreUrl + id, this.httpOptions);
  }

  public updateOffre(offre) {
    return this.http.put<Offre>(this.offreUrl + 'update' ,  offre, this.httpOptions );
  }
  public deleteOffre(offre) {
    return this.http.put<Offre>(this.offreUrl + 'disable' ,  offre, this.httpOptions );
  }

  public createOffre(offre) {
    return this.http.post<Offre>(this.offreUrl, offre, this.httpOptions);
  }


}
