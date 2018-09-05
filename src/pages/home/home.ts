import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {IndsocioPage } from '../indsocio/indsocio'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  };

  goToIndsocioPage () {
  this.navCtrl.push(IndsocioPage);
}
  
}
