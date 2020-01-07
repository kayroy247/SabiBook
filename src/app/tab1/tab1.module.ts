import { ResultModalPageModule } from './../result-modal/result-modal.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    // ResultModalPageModule,
  ],
  exports: [
    Tab1Page
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
