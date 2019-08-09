import { Component, OnInit, ViewChild } from '@angular/core';
import {Demande} from "../../models/demande.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {DemandeService} from "../../services/demande.service";
import {switchMap} from "rxjs/operators";
import {Offre} from "../../models/offre.model";
import {any} from "codelyzer/util/function";

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
})
export class EditorComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  log: string = '';
  demande: Demande = new Demande();
  private sub: any;
  id:number;
  private selectedoffre: Offre;
  constructor(private route: ActivatedRoute ,private router: Router, private demandeService: DemandeService) {
  }
  createDemande(offre: Offre): void {
    this.demandeService.createDemande(this.id, this.demande)
      .subscribe(data => {
        alert('Postuler');
        this.router.navigate(['/']);
      });
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

}
}
