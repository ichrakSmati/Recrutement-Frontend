import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Offre} from '../models/offre.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Demande} from '../models/demande.model';
import {Notif} from '../models/notif.model';
import {CandidatService} from './candidat.service';
import {Observable} from 'rxjs';
import {__await} from "tslib";
import {NotifResponse} from "../models/NotifResponse.model";

@Injectable()
export class NotificationService {

  today = new Date();
  dateNow: Date = new Date();
  offre: Offre = new Offre();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    }),
  };
  private notif: Notif;

  constructor(private http: HttpClient, private candidatService: CandidatService) {
  }

  private offreUrl = 'http://localhost:8088/emploi/';

  private notifUrl = 'http://localhost:8088/notif/';

  // private poleUrl = '/api';

  public getNotif() {
    return this.http.get<Notif[]>(this.notifUrl, this.httpOptions);
  }
  public getNotifResponse() {
    return this.http.get<NotifResponse[]>(this.notifUrl+ 'list', this.httpOptions);
  }
  public createnotif(user, offre, notif: Notif) {

    //this.userId=localStorage.getItem("Id");
      console.log(offre.titre);
      console.log(user);
      console.log(user.nom);
      notif.message = user.nom + ' a postuler pour ' + offre.titre;
      notif.etat=true;
      console.log(this.notif);
    return this.http.post<Notif>(this.notifUrl + 'postule', notif, this.httpOptions);
}
  public notifaccepte(demande,entretien, notif: NotifResponse) {

    console.log(demande.offre.titre);
    console.log(demande.candidat.nom);
    notif.etat=true;
    notif.candidat=demande.candidat;
    notif.message = ' Votre candidature à ' + demande.offre.titre+' a était accepté !La date de votre entretien est le'+entretien.date;

    console.log(this.notif);
    return this.http.post<NotifResponse>(this.notifUrl + 'Reponse', notif, this.httpOptions);
  }
  public notifEntretien(entretien,candidat,notif: NotifResponse) {
    console.log(notif);

    notif.etat=true;
    notif.candidat=candidat;
    notif.message = 'Vous avez une demande d entretien le '+entretien.date ;

    console.log(this.notif);
    return this.http.post<NotifResponse>(this.notifUrl + 'Reponse', notif, this.httpOptions);
  }
  public notifRefus(demande, notif: NotifResponse) {

    console.log(demande.offre.titre);
    console.log(demande.candidat.nom);
    notif.etat=true;
    notif.candidat=demande.candidat;
    notif.message = ' Votre candidature à ' + demande.offre.titre+' a était refusé';

    console.log(this.notif);
    return this.http.post<NotifResponse>(this.notifUrl + 'Reponse', notif, this.httpOptions);
  }
  public getoffre(id) {
    return this.http.get<Offre>(this.offreUrl + id, this.httpOptions).map(data => <Offre>data);
  }
  public changeetat(notif) {
    return this.http.put<Notif>(this.notifUrl + 'changeetat' ,  notif, this.httpOptions );
  }
  public changeetatnotif(notif) {
    return this.http.put<NotifResponse>(this.notifUrl + 'changeetatnotif' ,  notif, this.httpOptions );
  }
}
