import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentFieldComponent } from './tournament-field.component';

describe('TournamentFieldComponent', () => {
  let component: TournamentFieldComponent;
  let fixture: ComponentFixture<TournamentFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
