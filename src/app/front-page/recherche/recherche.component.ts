import {Component, OnInit} from '@angular/core';
import {OffreService} from "../../services/offre.service";
import {Offre} from "../../models/offre.model";
import {Router} from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'recherche',
  templateUrl: './recherche.component.html'


})
export class RechercheComponent implements OnInit {
  myDate = new Date();

  constructor(private router:Router, private offreService: OffreService,private datePipe: DatePipe) {
}

offres: Offre[];
items: string[] ;
ngOnInit()
  {
   // this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.offreService.getoffres()
      .subscribe(data => {
        this.offres = data;
      });
  }

}
