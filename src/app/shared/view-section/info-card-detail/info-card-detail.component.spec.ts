import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardDetailComponent } from './info-card-detail.component';

describe('InfoCardDetailComponent', () => {
  let component: InfoCardDetailComponent;
  let fixture: ComponentFixture<InfoCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
