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
  mainboard
  comment
  made_in
  screws
  age
  cpu 
  vram 
  wram 
  lcd_board 
  power_board 
  jack_board 
  
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
        this.mainboard = aux.mainboard
        this.comment = aux.comment
        this.made_in = aux.made_in
        this.screws = aux.screws
        this.age = aux.age
        this.cpu = aux.cpu
        this.vram = aux.vram
        this.wram = aux.wram
        this.lcd_board = aux.lcd_board
        this.power_board = aux.power_board
        this.jack_board = aux.jack_board

        this.block = true
      }
    }
    if(!this.block){
      this.mainboard="BAD serial number"
      this.serialNum = "" 
      this.comment = ""
      this.made_in = ""
      this.screws = ""
      this.age = ""
      this.cpu = ""
      this.vram = ""
      this.wram = ""
      this.lcd_board = ""
      this.power_board = ""
      this.jack_board = ""

      this.block = true
    }
  }
}
