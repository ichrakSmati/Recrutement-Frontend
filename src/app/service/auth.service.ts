import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/map';
import {User} from "../models/user.model";
import {Candidat} from "../models/candidat.model";
const TOKEN_KEY = 'AuthToken';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    user: User;
    users: any;
    jwtToken = null;
    private host: string = 'http://localhost:8088';

    setLoggedin() {
        window.sessionStorage.removeItem('loggedin');
        window.sessionStorage.setItem('loggedin', 'true');
    }

    setLoggedOut() {
        window.sessionStorage.removeItem('loggedin');
        window.sessionStorage.setItem('loggedin', 'false');
    }

    getLoggedin() {
        return window.sessionStorage.getItem('loggedin');
    }

    loadToken() {
        this.jwtToken = window.sessionStorage.getItem(TOKEN_KEY);
    }


    getCurrentUser() {
        let token = window.sessionStorage.getItem(TOKEN_KEY);
        let jwtHelper = new JwtHelperService();
        return jwtHelper.decodeToken(token);
    }

    getUserAllData() {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
            })};
        if (this.jwtToken == null) {
            this.loadToken();
        }
        this.users = this.getCurrentUser();
        console.log(this.users.sub);
        return this.http.get(this.host + '/user/email/' + this.users.sub ,  httpOptions);

    }

    sendCredential(username: string, password: string): Observable<any> {
        const credentials = {username: username, password: password};
        console.log('Connexion ::');
        return this.http.post<any>('http://localhost:8088/token/generate-token', credentials);
    }

    inscription(candidat : Candidat): Observable<any> {
        const credentials = {username: candidat.email, password: candidat.pass};
        console.log('Connexion ::');
        return this.http.post<any>('http://localhost:8088/inscription', candidat);
    }



    check() {
        console.log('check test :');
        return this.http.get('http://localhost:8088/check');
    }
}
