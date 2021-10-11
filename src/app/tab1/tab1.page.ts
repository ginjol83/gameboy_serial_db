import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  public plateCapture( event: any ) {
    console.log(event); // Normalmente el valor se encuentra en ( event.detail.value )
  }

}
