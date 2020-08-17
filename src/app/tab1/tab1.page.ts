import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {

  public inputValue = "";
  public jugadorActual = "";
  public count = 1;
  public player = false;
  public msg = "";
  public playerOneScore = 0;
  public playerTwoScore = 0;
  public wins = [7, 56, 448, 73, 146, 292, 273, 84];


  constructor(private navCtrl: NavController) {}
  checkWin(score){
    for(var i = 0; i < this.wins.length; i++){
        if((this.wins[i] & score)  === this.wins[i]){
            if(this.jugadorActual == "Jugador1"){
                this.newGame();
                alert("Jugado 1 Gana");
            } else{
                this.newGame();
                alert("Jugador 2 Gana");
            }
        }    
    }
    if(this.count == 10){
        alert("Empate");
        this.newGame();
    }
}
    
    
    placeTile(param){
      console.log("param " + param);
      this.count += 1;
      if(this.count %2 == 0){
        this.jugadorActual = "Jugador1";
        console.log(this.jugadorActual);
        var tile = <HTMLInputElement> document.getElementById(param);
        tile.disabled = true;
        document.getElementById(param).textContent="X";
        this.playerOneScore += Number(param);
        console.log("Jugador1 puntaje:" + this.playerOneScore);
        this.checkWin(this.playerOneScore);
      }
      else if(this.count %2 != 0){
        this.jugadorActual = "Jugador2";
        this.msg= "O";
        var tile = <HTMLInputElement> document.getElementById(param);
        tile.disabled = true;
        this.playerTwoScore += Number(param);
        document.getElementById(param).textContent="O";
        console.log("Jugador2 puntaje:"+this.playerTwoScore);          
        this.checkWin(this.playerTwoScore);
      }
  }
    
newGame(){
    console.log("Nuevo Juego");
    for(var i = 1; i < 512; i*2 ){
        var tile = <HTMLInputElement> document.getElementById(i.toString()); 
        if(tile != null || tile != undefined){
            tile.textContent="";
            tile.disabled = false;
            i+=i;
            console.log(i);
        }
    }
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
    this.count=1;
    }
}
