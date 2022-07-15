import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-card-detail',
  templateUrl: './info-card-detail.component.html',
  styleUrls: ['./info-card-detail.component.scss']
})
export class InfoCardDetailComponent implements OnInit {
  @Input() studentDetailsData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
