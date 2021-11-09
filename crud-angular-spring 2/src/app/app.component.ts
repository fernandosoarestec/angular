import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exemplo01';

  constructor(private router:Router){}

    Consultar(){
      this.router.navigate(["consultar"]);

     }

     Incluir(){
      this.router.navigate(["incluir"]);

     }





}

