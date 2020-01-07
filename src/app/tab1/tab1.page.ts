import { ResultModalPage } from './../result-modal/result-modal.page';
import { QuestionsService } from './../questions.service';
import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  item: any;
  userAnswer: any;
  gotIt = false;
  subject: string;

  constructor( private questionsService: QuestionsService, 
               public modalController: ModalController,
               public alertController: AlertController) {}


  ngOnInit(){
    this.getNewQuestion('physics');
  }

  changeSubject(event) {
    event.preventDefault();
    this.subject = event.detail.value;
    this.getNewQuestion(this.subject);

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  handlevalue(event){
    event.preventDefault();
    this.userAnswer = event.detail.value;

  }

  handleClose(){

  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ResultModalPage,
      componentProps: {
        'gotIt': this.gotIt,
        'modalController': this.modalController
      }
    });
    return await modal.present();
  }

  handleSubmit() {
    this.gotIt = this.item.data.answer === this.userAnswer;
    this.presentModal();
    
  }
  getNewQuestion(subject) {
    this.questionsService.getQuestion(subject).subscribe(response => {
      this.item = response;


});
  }
}
