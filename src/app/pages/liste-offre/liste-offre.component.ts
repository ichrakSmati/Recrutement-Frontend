import { Component, OnInit } from '@angular/core';
import {OffreService} from "../../services/offre.service";
import {Offre} from "../../models/offre.model";
import {Router} from "@angular/router";
import {DemandeService} from "../../services/demande.service";
import {CandidatService} from "../../services/candidat.service";

@Component({
  selector: 'ngx-liste-offre',
  templateUrl: './liste-offre.component.html',
  styleUrls: ['./liste-offre.component.scss']
})
export class ListeOffreComponent implements OnInit {
  private selectedoffre: Offre;
  constructor(private router:Router,private offreService: OffreService,private candidatService:CandidatService) {
  }
nombre: number[];
  offres: Offre[];
  items: string[] ;
  ngOnInit()
  {
    this.offreService.getoffres()
      .subscribe(data => {
        this.offres = data;
      });
    this.candidatService.getnombreCandidatParoffre(this.offres)
      .subscribe(data => {
        this.nombre = data;
      });
  }
  Liste(offre: Offre): void {
  this.selectedoffre = offre;
  this.router.navigate(['/pages/offre/'+ this.selectedoffre.id]);

  }
}
