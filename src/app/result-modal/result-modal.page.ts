import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-result-modal',
  templateUrl: './result-modal.page.html',
  styleUrls: ['./result-modal.page.scss'],
})
export class ResultModalPage implements OnInit {
  getResult: any;
  modalController: any;
  constructor(private navParams: NavParams) { 
    this.getResult = navParams.get('gotIt');
  }

  ngOnInit() {
  }

  closeModal(){
   this.modalController.dismiss();
  }

}
 