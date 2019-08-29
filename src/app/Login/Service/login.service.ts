import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/model/User';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) {}

    authenticate(username: string, password: string): Observable<any> {
        return this.http.get<User>('./assets/stub-login/' + username + '.json'/*, {
            username,
            password
        }*/);
    }
}
