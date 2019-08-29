import { Component, OnInit } from '@angular/core';
import {DemandeService} from "../../services/demande.service";
import {Demande} from "../../models/demande.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NbDateService, NbIconLibraries, NbWindowService} from "@nebular/theme";
import {Offre} from "../../models/offre.model";
import {EntretienService} from "../../services/entretien.service";
import {Choixdate} from "../../models/choixdate.model";

// @ts-ignore
@Component({
  selector: 'ngx-liste-candidats',
  templateUrl: './liste-candidats.component.html',
  styleUrls: ['./liste-candidats.component.scss']
})
export class ListeCandidatsComponent implements OnInit {
demandes: Demande[];
  private offreId: number;
  mycontent: string;
  private selectedemande: Demande;
  min: Date;
  max: Date;
  result = '';
  datemin: string;
  datemax: string;
  choixdateEntretien: Choixdate = new Choixdate();
  etat : boolean = false;

  constructor(iconsLibrary: NbIconLibraries, protected dateService: NbDateService<Date>, private entretienService: EntretienService, private route: ActivatedRoute ,private demandeService: DemandeService,private windowService: NbWindowService,private router: Router) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.offreId = Number.parseInt(params['id']);
    });
    this.demandeService.getdemandesparOffre(this.offreId)
      .subscribe(data => {
        console.log(data);
        this.demandes = data;
      });
  }
  accepte(demande: Demande, dateChoix: string): void {
    let mor = dateChoix.toString().split('-');
    this.datemin = mor[0];
    this.datemax = mor[1];
    this.choixdateEntretien.date1 = this.datemin;
    this.choixdateEntretien.date2 = this.datemax;
    this.choixdateEntretien.demande=demande;
    this.demandeService.accepte(demande)
      .subscribe(data => {
        console.log('demande de postulation accepté.');
        this.entretienService.choixoffre(this.choixdateEntretien)
          .subscribe(data => {
            alert('Date disponibilté envoyé avec succés.');
          });
      });
  }


  refuser(demande): void {
    this.demandeService.refuser(demande)
      .subscribe(data => {
        alert('demande de postulation refusé.');
      });
  }

  pickDateEtat(){
    console.log(this.etat);
    if (this.etat == true){
      this.etat=false;
    }

    else {
      this.etat=true;
    }
    console.log(this.etat);
  }
}
