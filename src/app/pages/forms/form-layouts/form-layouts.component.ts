import { Component } from '@angular/core';
import { Offre } from '../../../models/offre.model';
import { OffreService } from '../../../services/offre.service';

import {Router} from '@angular/router';
@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {
  offre: Offre = new Offre();

  constructor(private router: Router, private offreService: OffreService) {

  }

  createOffre(): void {
    this.offreService.createOffre(this.offre)
      .subscribe(data => {
        alert('offre created successfully.');
      });
  }
}
