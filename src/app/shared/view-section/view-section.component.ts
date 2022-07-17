import { Component, OnInit } from '@angular/core';
import { CardDataService } from 'src/app/Services/card-data.service';

@Component({
  selector: 'app-view-section',
  templateUrl: './view-section.component.html',
  styleUrls: ['./view-section.component.scss']
})
export class ViewSectionComponent implements OnInit {

  constructor(public cardDataService : CardDataService) { }

  ngOnInit(): void {
  }
  onSelectAll() {
    this.cardDataService.allCardSelect = "border border-success"
  }

  onRemoveAll() {
    this.cardDataService.allCardSelect = ""
  }
}
