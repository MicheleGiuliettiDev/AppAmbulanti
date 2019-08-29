import { Component, OnInit } from '@angular/core';
import {FormsModule , FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthServiceService } from '../Common/AuthService/AuthService.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _authService: AuthServiceService, private _router: Router) { 
    this.form = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const val = this.form.value;
    /* IMPLEMENTARE VALIDAZIONE USERNAME E PASSWORD, FORSE REGEX? DA VALUTARE SE BASTANO VALIDAZIONI HTML5 */

    if (val.username && val.password) {
      this._authService.login(val.username, val.password)
        .subscribe(() => {
          console.log('User is logged in'); // DA DISABILITARE CONSOLE.LOG
          this._router.navigateByUrl('/');
        });
    }
  }
  ngOnInit() {
  }

}
