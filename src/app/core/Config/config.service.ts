import { Injectable } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

    public apiBaseUrl = 'http://devel3.init.gruppoinit.it/backend/services/rest-private/app/';
    public authUrl = 'http://devel3.init.gruppoinit.it/backend/mercati/appbootstrap.htm?idcomunealias={alias}&software={software}';
    public offsetDataInizio = 0;
    public offsetDataFine = 7;
    private _bottoneEsciVisibile = true;

    nascondiBottoneEsci() {
        this._bottoneEsciVisibile = false;
    }

    isBottoneEsciVisible() {
        return this._bottoneEsciVisibile;
    }

}
