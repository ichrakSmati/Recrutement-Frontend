import { Component, OnInit } from '@angular/core';
import {OffreService} from "../../services/offre.service";
import {Offre} from "../../models/offre.model";
import {Router} from "@angular/router";
import {DemandeService} from "../../services/demande.service";
import {CandidatService} from "../../services/candidat.service";
import {NbIconLibraries} from "@nebular/theme";

@Component({
  selector: 'ngx-liste-offre',
  templateUrl: './liste-offre.component.html',
  styleUrls: ['./liste-offre.component.scss']
})
export class ListeOffreComponent implements OnInit {
  private selectedoffre: Offre;
  nombre: number[];
  offres: Offre[];
  items: string[] ;

  constructor(iconsLibrary: NbIconLibraries, private router:Router,private offreService: OffreService) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
  }

  ngOnInit() {
    this.offreService.getoffres()
      .subscribe(data => {
        this.offres = data;
      });
    /*
    this.candidatService.getnombreCandidatParoffre(this.offres)
      .subscribe(data => {
        this.nombre = data;
      });
    */
  }

  Liste(offre: Offre): void {
    this.selectedoffre = offre;
    this.router.navigate(['/pages/offre/'+ this.selectedoffre.id]);
  }

  update(offre: Offre): void {
    this.router.navigate(['/pages/offre/update/'+ offre.id]);
  }

  delete(offre: Offre){
    this.offreService.deleteOffre(offre)
      .subscribe(data => {
        this.router.navigate(['/pages/listeOffre']);
      });
  }

  changerEtat(offre :Offre){
    if (offre.etat=='disponible'){
      offre.etat='non diponible';
    }else{
      offre.etat='disponible';
    }
    this.offreService.updateOffre(offre)
      .subscribe(data => {
        this.router.navigate(['/pages/listeOffre']);
      });
  }
}
