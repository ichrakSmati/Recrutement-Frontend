import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Demande} from '../models/demande.model';
import {Choixdate} from '../models/choixdate.model';
import {Offre} from '../models/offre.model';
import {Observable} from "rxjs";
import {Entretiendate} from "../models/entretiendate.model";
import {User} from "../models/user.model";

@Injectable()
export class EntretienService {
  cd: Choixdate = new Choixdate();
  demande: Demande = new Demande();
  user: User = new User();
  dateString:string;
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

  public createEntretien(entretien,demande) {
    console.log(entretien.type);
    this.dateString=entretien.date;
    let newDate = new Date(this.dateString);
    this.user.id= demande.candidat.id;
    entretien.candidat=this.user;
    entretien.date=newDate;
    entretien.etat="En attente de l'entretien";
    return this.http.post<Entretiendate>(this.entretienUrl, entretien, this.httpOptions);
  }
  public createEntretienSpontane(entretien,candidat) {
    console.log(candidat.id);
    this.dateString=entretien.date;
    console.log()
    let newDate = new Date(this.dateString);
    this.user.id= candidat.id;
    entretien.candidat=this.user;
    entretien.date=newDate;
    entretien.etat="En attente de l'entretien";
    console.log(entretien);

    return this.http.post<Entretiendate>(this.entretienUrl, entretien, this.httpOptions);
  }

  public getEntretien() {
    console.log("test");
    return this.http.get<Choixdate[]>(this.entretienUrl , this.httpOptions);
  }
  public getEntretienList() {
    console.log("test");
    return this.http.get<Entretiendate[]>(this.entretienUrl +'list', this.httpOptions);
  }
  public effectueEntretien(entretien){
    return this.http.put<Entretiendate>(this.entretienUrl + 'effectue' ,  entretien, this.httpOptions );

  }


}
