import { Component, OnInit } from '@angular/core';
import {EntretienService} from "../../services/entretien.service";
import {Entretiendate} from "../../models/entretiendate.model";
import { map } from 'rxjs/operators';
import {formatDate } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'ngx-list-entretien',
  templateUrl: './list-entretien.component.html',
  styleUrls: ['./list-entretien.component.scss']
})
export class ListEntretienComponent implements OnInit {
  today= new Date();
  private selectedEntretien:Entretiendate;
  currentDate = '';
  private dispo:boolean=true;
  private entretiens: Entretiendate[];
  constructor(private entretienService:EntretienService,private router:Router) {
    this.currentDate = formatDate(this.today, 'yyyy-MM-dd hh:mm:ss a', 'en-US', '+0530');

  }
  ngOnInit() {
    this.entretienService.getEntretienList().pipe(
      map(entretiens => entretiens.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
    ).subscribe(entretiens =>
    { this.entretiens = entretiens;
      for (var index of this.entretiens) {
        console.log(new Date(index.date).getTime() );
        console.log(new Date().getTime() );
        console.log(Math.ceil(new Date(index.date).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
      }
    });
  }
  entretiensucces(entretien):void{
    this.selectedEntretien=entretien;
    this.entretienService.effectueEntretien(entretien).subscribe(data => {
      this.router.navigate(['/pages/entretien' + this.selectedEntretien.id]);
    });
  }
  }



