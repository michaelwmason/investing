import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestingTableComponent } from './watchlists.component';

describe('InvestingTableComponent', () => {
  let component: InvestingTableComponent;
  let fixture: ComponentFixture<InvestingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
