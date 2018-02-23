import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private nome:string = "Mauricio Zaha";
  constructor(public navCtrl: NavController) {

  }

  public getNome():string{
    return this.nome;
  }
}
