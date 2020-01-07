import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultModalPageRoutingModule } from './result-modal-routing.module';

import { ResultModalPage } from './result-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultModalPageRoutingModule
  ],
  declarations: [ResultModalPage]
})
export class ResultModalPageModule {}
