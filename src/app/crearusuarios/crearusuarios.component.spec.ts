import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearusuariosComponent } from './crearusuarios.component';

describe('CrearusuariosComponent', () => {
  let component: CrearusuariosComponent;
  let fixture: ComponentFixture<CrearusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
