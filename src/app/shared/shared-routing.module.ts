import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewSectionComponent } from './view-section/view-section.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'view-section', component: ViewSectionComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedRoutingModule { }
