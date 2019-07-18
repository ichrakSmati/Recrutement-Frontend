import {Component, OnInit} from '@angular/core';
import {OffreService} from "../../services/offre.service";
import {Offre} from "../../models/offre.model";

@Component({
  selector: 'recherche',
  templateUrl: './recherche.component.html'


})
export class RechercheComponent implements OnInit {
 constructor(private offreService: OffreService) {
}

offres: Offre[];
items: string[] ;
ngOnInit()
  {
    this.offreService.getoffres()
      .subscribe(data => {
        this.offres = data;
      });
  }
}
