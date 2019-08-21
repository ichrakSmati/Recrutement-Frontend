import { Component, OnInit, ViewChild } from '@angular/core';
import {Demande} from "../../models/demande.model";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {DemandeService} from "../../services/demande.service";
import {switchMap} from "rxjs/operators";
import {Offre} from "../../models/offre.model";
import {any} from "codelyzer/util/function";
import {Quiz} from "../../models/quiz.model";
import {OffreService} from "../../services/offre.service";

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

  constructor(private route: ActivatedRoute ,private router: Router,private offreService: OffreService , private demandeService: DemandeService) {
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
    this.offreService.getoffre(this.id).subscribe(data=>{
      this.selectedoffre=data;
    });
    console.log(this.selectedoffre);
  }

  createDemande(offre: Offre): void {
    this.demandeService.createDemande(this.id, this.demande)
      .subscribe(data => {
        //this.router.navigate(['quiz/'+ this.selectedoffre.quiz.id]);
        this.router.navigate(['quiz/'+ this.selectedoffre.quiz.id+'/demande/'+data.id]);
      });
  }


}
