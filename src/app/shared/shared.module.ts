import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from '../shared/shared.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ViewSectionComponent } from './view-section/view-section.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoCardComponent } from './view-section/info-card/info-card.component';
import { InfoCardDetailComponent } from './view-section/info-card-detail/info-card-detail.component';


@NgModule({
  declarations: [
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ViewSectionComponent,
    InfoCardComponent,
    InfoCardDetailComponent
  ],
  exports: [
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    ViewSectionComponent,
    InfoCardComponent,
    InfoCardDetailComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
