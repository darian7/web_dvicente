import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarproductosComponent } from './insertarproductos.component';

describe('InsertarproductosComponent', () => {
  let component: InsertarproductosComponent;
  let fixture: ComponentFixture<InsertarproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertarproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
