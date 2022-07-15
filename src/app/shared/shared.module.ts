import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from '../shared/shared.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { ViewSectionComponent } from './view-section/view-section.component';
import { HomeComponent } from './home/home.component';
import { SharedRoutingModule } from './shared-routing.module';
import { InfoCardComponent } from './view-section/info-card/info-card.component';
import { InfoCardDetailComponent } from './view-section/info-card-detail/info-card-detail.component';



@NgModule({
  declarations: [
    SharedComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    ViewSectionComponent,
    HomeComponent,
    InfoCardComponent,
    InfoCardDetailComponent
  ],
  exports: [
    SharedComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    ViewSectionComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  
})
export class SharedModule { }
