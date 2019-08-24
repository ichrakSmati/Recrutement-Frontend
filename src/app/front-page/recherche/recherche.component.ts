import {Component, OnInit} from '@angular/core';
import {OffreService} from "../../services/offre.service";
import {Offre} from "../../models/offre.model";
import {Router} from "@angular/router";
import { DatePipe } from '@angular/common';
import * as $ from "jquery";
import {DemandeService} from "../../services/demande.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'recherche',
  templateUrl: './recherche.component.html'
})
export class RechercheComponent implements OnInit {
  details: string='';
  buttonPostuler:string='';
  offres: Offre[];
  items: string[] ;
  departements: string[] = new Array();
  contrats: string[] = new Array() ;
  uniqueDepartements : string[];
  uniqueContrats : string[];
  constructor(private router:Router, private offreService: OffreService, private demandeService: DemandeService, private datePipe: DatePipe, private  authService: AuthService) {
  }

  ngOnInit() {
    this.offreService.getoffresDisponible()
      .subscribe(data => {
        this.offres = data;
        this.fill(this.offres[0]);
        for (let offre of this.offres ){
          offre.days=Math.ceil((Math.abs(new Date().getTime() - new Date(offre.dateAjout).getTime())) / (1000 * 3600 * 24));
          this.departements.push(offre.departement);
          this.contrats.push(offre.type);
        }
         this.uniqueDepartements = [...new Set(this.departements)];
         this.uniqueContrats = [...new Set(this.contrats)];
      });
  }


  fill(offre){
    if(this.authService.getLoggedin()== "false"){
      this.buttonPostuler="<a class='btn btn-primary btn-lg' href='editor/"+offre.id+"' role='button'>postuler</a>";
      this.showDetails(this.buttonPostuler, offre);
    }else{
      this.demandeService.checkDemandeExist(offre.id, localStorage.getItem("Id")).subscribe(data => {
        if(data == false){
          this.buttonPostuler="<a class='btn btn-primary btn-lg' href='editor/"+offre.id+"' role='button'>postuler</a>"
        }else{
          this.buttonPostuler="<a class='btn btn-primary btn-lg' href='/emploi' role='button' >List Candidature</a>";
        }
        this.showDetails(this.buttonPostuler, offre);
      });
    }
  }

  showDetails(buttonString: string, offre: Offre){
    this.details="<div class='jumbotron'>\n" +
      "      <h1 class='display-5'>"+offre.titre+"</h1>\n" +
      "      <p class='lead'>Contrat : "+offre.type+" | Ville : "+offre.ville+" | Salaire: "+offre.salaire+" | Date de debut: "+offre.dateDebut+"</p>\n" +
      "      <hr class='my-4'>\n" +
      "      <p>"+offre.description+"</p>\n" +
      "      <p class='lead'>\n" +
      this.buttonPostuler +
      "      </p>\n" +
      "    </div>\n" +
      "  </div>";
    $('#details').find('.jumbotron').remove().end().append(this.details);
  }

  nbrViewParOffre(){

  }
}
