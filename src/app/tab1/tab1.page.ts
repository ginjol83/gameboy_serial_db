import { Component } from '@angular/core';
import  *  as  data  from  '../../bd/bd.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  serial
  serialType
  block  
  serialNum
  cpu
  comment
  made_in
  screws
  age
  
  constructor() {
    this.block = false
  }

  public onBlur() {
    this.block = false
  }

  public searchSerial() {
    let serialChars = this.serialType
    let num = this.serialNum
    
    for(let x in data){
      let aux = data[x]
      let serial_ini = parseInt(aux.serial_ini)
      let serial_end = parseInt(aux.serial_end)
      let serial_char = aux.serial_char

      if(num > serial_ini && num < serial_end && serial_char == serialChars){
        this.serialNum = serialChars+num 
        this.cpu = aux.cpu
        this.comment = aux.comment
        this.made_in = aux.made_in
        this.screws = aux.screws
        this.age = aux.age

        this.block = true
      }
    }
    if(!this.block){
      this.cpu="BAD serial number"
      this.serialNum = "" 
      this.comment = ""
      this.made_in = ""
      this.screws = ""
      this.age = ""

      this.block = true
    }
  }
}
