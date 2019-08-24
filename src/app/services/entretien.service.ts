import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Demande} from '../models/demande.model';
import {Choixdate} from '../models/choixdate.model';
import {Offre} from '../models/offre.model';
import {Observable} from "rxjs";
import {Entretiendate} from "../models/entretiendate.model";

@Injectable()
export class EntretienService {
  cd: Choixdate = new Choixdate();
  demande: Demande = new Demande();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    })
  };

  constructor(private http: HttpClient) {
  }

  private entretienUrl = 'http://localhost:8088/entretien/';
  private demandeUrl = 'http://localhost:8088/demande/';

  public choixoffre(choixdateEntretien) {
    return this.http.post<Choixdate>(this.entretienUrl + 'choixdate', choixdateEntretien, this.httpOptions);
  }
  public getdemande(id) {
    return this.http.get<Demande>(this.demandeUrl + 'entretien/' + id, this.httpOptions);
  }
  public getChoix(demandeid) {
    return this.http.get<Choixdate>(this.entretienUrl + demandeid, this.httpOptions);
  }

  public createEntretien(entretien) {
    entretien.date="08/12/2018"
    entretien.type="En attente de l'entretien";
    return this.http.post<Entretiendate>(this.entretienUrl, entretien, this.httpOptions);
  }
}
