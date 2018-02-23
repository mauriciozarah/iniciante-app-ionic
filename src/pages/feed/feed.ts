import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  private nome_usuario:string = "Mauricio Zaha do Código";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //A FUNÇÃO ABAIXO INICIALIZA SEMPRE QUANDO A PAGE É CARREGADA
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros(1, 3);
  }

  public somaDoisNumeros(num1:number, num2:number):void{
    alert(num1 + num2);
  }

  public getNome():string{
    return this.nome_usuario;
  }

}
