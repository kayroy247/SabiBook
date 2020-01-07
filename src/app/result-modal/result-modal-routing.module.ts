import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultModalPage } from './result-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ResultModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultModalPageRoutingModule {}
