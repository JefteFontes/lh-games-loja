import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  mostraMenu = new Subject<boolean>();
  

  constructor(private _router: Router) { }

  login(usuario:string, senha:string):void{
    if(usuario == "aluno" && senha == "1234"){
      localStorage.setItem('token', 'qwre1234');
      this.mostraMenu.next(false);
    } else {
      this.mostraMenu.next(true);
    }
  }
  setMostraMenu(value:boolean){
    this.mostraMenu.next(value);
  }

  getMostraMenu(){
    return this.mostraMenu.asObservable();
  }
}
