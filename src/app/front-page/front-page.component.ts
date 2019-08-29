import {Component, OnInit} from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {Candidat} from '../models/candidat.models';
import {ActivatedRoute, Router} from '@angular/router';
import {CandidatService} from '../services/candidat.service';
import {User} from '../models/user.model';
import {NotificationService} from '../services/notification.service';
import {NotifResponse} from '../models/NotifResponse.model';
import * as $ from 'jquery';

declare var $: $;

@Component({
  selector: '',
  templateUrl: './front-page.component.html',


})
export class FrontPageComponent implements OnInit {
  private candidatId: string;
  private candidat: User;
  private userid: string;
  private notifs: NotifResponse[];

  constructor(private route: ActivatedRoute, private candidatService: CandidatService,
              private notificationService: NotificationService,
              private router: Router) { }

  ngOnInit() {
   /* this.candidatId=localStorage.getItem("Id")
    this.candidatService.getCandidatId(this.candidatId)
      .subscribe(data => {
        this.candidat = data;
      });*/
    this.notificationService.getNotifResponse()
      .subscribe(data => {
        this.notifs = data;
        $('.toast').toast('show');
      });

  }
  dismiss(notif: NotifResponse){
    this.notificationService.changeetatnotif(notif).subscribe(val => {
      this.router.navigate(['/']);

    });

  }
}
