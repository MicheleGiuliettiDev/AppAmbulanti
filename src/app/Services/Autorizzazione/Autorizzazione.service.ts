import { Injectable } from '@angular/core';
import { IAutorizzazione } from '../../Interfaces/IAutorizzazione';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/core/Config/config.service';


@Injectable({
  providedIn: 'root'
})
export class AutorizzazioneService {

constructor(private _http: HttpClient, private _config: ConfigService) {
  }

  getAutorizzazioni(): Observable<IAutorizzazione[]>{
    return;// this._http.get(this._config.apiBaseUrl + '/priv/ricercaAutorizzazioni');
  }
 }

