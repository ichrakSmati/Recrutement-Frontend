import { Component, OnInit } from '@angular/core';
import { NbDateService} from '@nebular/theme';
import {EntretienService} from '../../services/entretien.service';
import {Choixdate} from '../../models/choixdate.model';
import {Demande} from '../../models/demande.model';

import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'ngx-choixentretien',
  templateUrl: './choixentretien.component.html',
  styleUrls: ['./choixentretien.component.scss'],
})
export class ChoixentretienComponent implements OnInit {

  min: Date;
  max: Date;
  result = '';
  datemin: string;
  datemax: string;
  choixdateEntretien: Choixdate = new Choixdate();
  demandeId: number;
  demandeEntretien:Demande;

  constructor(protected dateService: NbDateService<Date>, private entretienService: EntretienService, private route: ActivatedRoute) {
    this.min = this.dateService.addDay(this.dateService.today(), -5);
    this.max = this.dateService.addDay(this.dateService.today(), 5);
  }

  send(dateChoix: string) {
    this.result = dateChoix;
    this.partage();
    this.choixdateEntretien.date1 = this.datemin;
    this.choixdateEntretien.date2 = this.datemax;
    this.entretienService.getdemande(this.demandeId)
      .subscribe(data => {
        this.demandeEntretien = data;
        this.choixdateEntretien.demande=this.demandeEntretien;
        this.entretienService.choixoffre(this.choixdateEntretien)
          .subscribe(data => {
            alert('Date disponibilté envoyé avec succés.');
          });
      });
  }

  partage(): void {
    let mor = this.result.toString().split('-');
    this.datemin = mor[0];
    this.datemax = mor[1];
  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.demandeId = +params['id'];
    });
  }

}
