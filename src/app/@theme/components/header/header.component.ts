import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {
  NbIconLibraries,
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService
} from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {User} from "../../../models/user.model";
import {CandidatService} from "../../../services/candidat.service";
import {NotificationService} from "../../../services/notification.service";
import {Notif} from "../../../models/notif.model";
import {NotifierService} from "angular-notifier";
import * as $ from 'jquery';
import {NotifResponse} from "../../../models/NotifResponse.model";
import {Router} from "@angular/router";
declare var $: $;
@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
private recruteurId:string;
  recruteur:User;
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  private readonly notifier: NotifierService;
private message:string;
  notifs: Notif[];

  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private userService: UserData,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              private candidatService: CandidatService,
              private notificationService : NotificationService,
              private notifierService: NotifierService ,
              private router:Router,
              iconsLibrary: NbIconLibraries,) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });

  }

  ngOnInit() {
    this.notificationService.getNotif()
      .subscribe(data=>{
        this.notifs=data;
        $('.toast').toast('show');

        //  for (let notif of this.notifs) {
        /* if(notif.etat==true){
          console.log("bye");
          this.notifier.show({
            message: this.message,
            type: 'info',
            //id: notif.id,
          });
          //}
        }*/
      });

    this.recruteurId= localStorage.getItem("Id");
    console.log("recruteur"+localStorage.getItem("Id"));
    this.candidatService.getCandidatId(this.recruteurId)
      .subscribe(data => {
        console.log(data);
        this.recruteur = data;
      });
    this.currentTheme = this.themeService.currentTheme;

    this.userService.getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: any) => this.recruteur = users.nick);

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }
  dismiss(notif: Notif) {
    this.notificationService.changeetat(notif).subscribe(val => {
      this.router.navigate(['/pages/']);

    });
  }

  /*public showSpecificNotification( type: string, message: string, id: string ): void {
    this.notifier.show( {
      id,
      message,
      type
    } );
  }*/
  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

}
