import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/model/User';
import * as moment from 'moment';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

constructor(private _http: HttpClient) { }

  login(username: string, password: string) {
    // tslint:disable-next-line: max-line-length
    //return this._http.post<User>('/', {username, password}).pipe(tap(res = > this.setSession)).shareReplay();  // shareReplay() SERVE PER EVITARE CHE IL SUBSCRIBER RICEVA RICHIESTE POST MULTIPLE IN CASO DI ATTIVAZIONE ACCIDENTALE 
  }

  private setSession(authResult) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');  // Controllare poi il nomi delle varie proprita' presenti nel risultato di ritorno

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  // logout() {
  //   localStorage.removeItem('id_token');
  //   localStorage.removeItem('expires_at');
  // }
  // METODO LOGOUT UTILE? EFFETTUA L'ELIMINAZIONE DEL TOKEN DA LocalStorage, SENTIRE SE VA IMPLEMENTATO

    public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
      return !this.isLoggedIn();
    }

    getExpiration() {
      const expiration = localStorage.getItem('expires_at');
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    }
}


