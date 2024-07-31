import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'loja-games';
  mostrarMenu: boolean = true;
  constructor(private _loginService: LoginService){ }

  ngOnInit(): void {
    this._loginService.getMostraMenu().subscribe(
      res => {
        this.mostrarMenu = res
      }
    )
  }

  ngOnDestroy(): void {
    localStorage.clear()
  }
}
