import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  protected routes = [
    {
      name: 'Создание команды',
      path: 'main'
    },
    {
      name:'Турнир',
      path:'second'
    },
    {
      name:'Создание турниров',
      path:'third'
    },
  ];

}
