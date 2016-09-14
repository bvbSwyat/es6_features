import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BasePage} from '../base/base';


@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {

  constructor(private navCtrl: NavController) {
  }
  goToOtherPage(pageName:string) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    switch(pageName) {
      case 'BasePage': {
        this.navCtrl.push(BasePage);
        break;
      }
    }
  }
}
