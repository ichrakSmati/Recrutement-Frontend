import { Component, OnInit, ViewChild } from '@angular/core';
import {Demande} from "../../models/demande.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {DemandeService} from "../../services/demande.service";
import {NotificationService} from "../../services/notification.service";

import {Offre} from "../../models/offre.model";
import {any} from "codelyzer/util/function";
import {Notif} from "../../models/notif.model";
import {CandidatService} from "../../services/candidat.service";
import {User} from "../../models/user.model";
import {Candidat} from "../../models/candidat.models";
import {formatDate} from "@angular/common";

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
})
export class EditorComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  log: string = '';

  demande: Demande = new Demande();
  notif:Notif=new Notif();
  private sub: any;
  id:number;
  private selectedoffre: Offre;
  user:User;
  userId:string;
  offre:Offre;
  candidat:Candidat;
  currentDate = '';
  today= new Date();
  constructor(private route: ActivatedRoute ,private router: Router, private demandeService: DemandeService,private notificationService:NotificationService,private candidatService:CandidatService) {
    this.currentDate = formatDate(this.today, 'yyyy-MM-dd hh:mm:ss a', 'en-US', '+0530');
  }
  createDemande(offre: Offre): void {

    this.userId = localStorage.getItem("Id");
   // console.log('testeeee'+this.getCandidat());
    //console.log('ofr'+this.getOffre());

    this.demande.datePostulation= new Date();
    this.demandeService.createDemande(this.id, this.demande)
      .subscribe(data => {
        alert('Postuler');
        this.candidatService.getCandidatId(this.userId).subscribe(x => {
          this.candidat = x
          console.log(x);
          this.notificationService.getoffre(this.id).subscribe(offres => {
            this.offre = offres;
            this.notificationService.createnotif(this.candidat, this.offre, this.notif)
              .subscribe(data => {
                console.log(data);
              });
          });
        });
      });
    //console.log(this.candidat);

    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
    };
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
  });


  /*onChange($event: any) : void {
    console.log('onChange');
    //this.log += new Date() + "<br />";
  }*/

}/*
  getCandidat():void {
    this.candidat=this.candidatService.getCandidatParId(this.userId);
  }
  getOffre():void
  {
    this.offre=this.notificationService.getoffre(this.id);
  }*/
}
