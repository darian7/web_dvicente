import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarusuariosComponent } from './mostrarusuarios.component';

describe('MostrarusuariosComponent', () => {
  let component: MostrarusuariosComponent;
  let fixture: ComponentFixture<MostrarusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
