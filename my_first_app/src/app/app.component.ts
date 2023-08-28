import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})       //  <app-customers></app-customers>
export class AppComponent implements OnInit {
  constructor(){
  }

  ngOnInit() {
  }
}