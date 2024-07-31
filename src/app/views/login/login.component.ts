import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    usuario!:string;
    senha!:string;

  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit(): void {
    
  }

  fazerLogin(): void {
    this._loginService.login(this.usuario, this.senha)
    this._router.navigate(['/restrito/lista']);
    this._loginService.setMostraMenu(false);
  }
}
