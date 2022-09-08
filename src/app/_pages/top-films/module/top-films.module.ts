import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopFilmsComponent } from '../component/top-films.component';
import { TopFilmsRoutingModule } from '../router/top-films-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../service/service.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TopFilmsComponent,
  ],
  imports: [
    CommonModule,
    TopFilmsRoutingModule,
    HttpClientModule,
    SharedModule
  ],

  providers: [
    ServiceService
  ]
})
export class TopFilmsModule { }
