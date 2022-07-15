import { Component, OnInit } from '@angular/core';
import { CardDataService } from 'src/app/Services/card-data.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  StudentDetailList: any;
  constructor(private cardDataService : CardDataService) { }

  ngOnInit(): void {
    this.cardDataService.getCardInfo().subscribe((data:any) => {
      console.log(data);
      this.StudentDetailList = data;
    })
  }

}
