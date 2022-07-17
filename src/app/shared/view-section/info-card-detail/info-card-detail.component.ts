import { Component, Input, OnInit } from '@angular/core';
import { CardDataService } from 'src/app/Services/card-data.service';

@Component({
  selector: 'app-info-card-detail',
  templateUrl: './info-card-detail.component.html',
  styleUrls: ['./info-card-detail.component.scss']
})
export class InfoCardDetailComponent implements OnInit {
  @Input() studentDetailsData: any;

  constructor(public cardDataService : CardDataService) { }

  ngOnInit(): void {
  }

}
