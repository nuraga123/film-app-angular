import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopFilmsComponent } from '../component/top-films.component';

const routes: Routes = [
  {
    path: '',
    component: TopFilmsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopFilmsRoutingModule { }
