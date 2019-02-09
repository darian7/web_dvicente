import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearclienteComponent } from './crearcliente.component';

describe('CrearclienteComponent', () => {
  let component: CrearclienteComponent;
  let fixture: ComponentFixture<CrearclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
