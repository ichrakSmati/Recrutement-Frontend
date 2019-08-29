
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Demande } from '../models/demande.model';
import {User} from "../models/user.model";
import {Offre} from "../models/offre.model";
import {userInfo} from "os";

@Injectable()
export class DemandeService {

  user: User = new User();
  offre: Offre =new  Offre();
  today = new Date();
  dateNow : Date = new Date();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    })};

  constructor(private http: HttpClient) {}

  private demandeUrl = 'http://localhost:8088/demande/';

  public getdemandes() {
    return this.http.get<Demande[]>(this.demandeUrl, this.httpOptions);
  }
  public getoffre(id) {
    return this.http.get<Demande>(this.demandeUrl + id, this.httpOptions);
  }

  public createDemande(id, demande: Demande) {
    this.offre.id = id;
    this.user.id= localStorage.getItem("Id");
    demande.etat= 'en cours';
    demande.candidat=this.user;
    demande.offre= this.offre;
    demande.date = this.dateNow.toISOString();
    //demande.date = this.today.getFullYear()+'-'+(this.today.getMonth()+1)+'-'+this.today.getDate();
    return this.http.post<Demande>(this.demandeUrl, demande, this.httpOptions);
  }

  public getdemandesparOffre(id) {
    return this.http.get<Demande[]>(this.demandeUrl + id , this.httpOptions);
  }

  public accepte(demande) {
    return this.http.put<Demande>(this.demandeUrl + 'accepte' ,  demande, this.httpOptions );
  }

  public refuser(demande) {
    return this.http.put<Demande>(this.demandeUrl + 'refuser' ,  demande, this.httpOptions );
  }

  public getdemandesparCandidat(id) {
    return this.http.get<Demande[]>(this.demandeUrl + 'candidat/' + id , this.httpOptions);
  }

  public getdemandesparCandidatparoffre(candidatId,offreId) {
     return this.http.get<Demande>(this.demandeUrl + 'demande/' + candidatId+'/'+offreId , this.httpOptions);
  }

  public changeEtatDemande(demande) {
    demande.etat="date de l'entretien choisi";
    return this.http.put<Demande>(this.demandeUrl + 'changeEtat' ,  demande, this.httpOptions );
  }

  checkDemandeExist(offreId, userId){
    return this.http.get<boolean>(this.demandeUrl + 'check/'+offreId +'/'+userId, this.httpOptions );
  }
}
