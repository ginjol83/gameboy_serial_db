import { Component } from '@angular/core';
import  *  as  data  from  '../../bd/bd.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  plate
  plateType
  block  
  serial
  cpu
  comment
  made_in
  screws
  age
  
  constructor() {
    this.block = false
  }

  public searchPlate() {
    let plateChars = this.plateType
    let num = this.plate
    
    for(let x in data){
      let aux = data[x]
      let serial_ini = parseInt(aux.serial_ini)
      let serial_end = parseInt(aux.serial_end)
      let serial_char= aux.serial_char

      if(num>serial_ini && num < serial_end && serial_char==plateChars){
        this.serial= plateChars+num 
        this.cpu = aux.cpu
        this.comment = aux.comment
        this.made_in = aux.made_in
        this.screws = aux.screws
        this.age = aux.age

        this.block=true;
      }
    }
  }
}
