import { Component, OnInit } from '@angular/core';

@Component({
  // can be used as deirect elemnt
 // selector: 'app-servers',
  // can be used as attribute
    // selector: '[app-servers]',

    // can be used as class 
    selector: '.app-servers',

    // using html file path
   // templateUrl:'./servers.component.html',

  // inline teamplte 
  template: `<app-server></app-server>
                <hr>
                <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
