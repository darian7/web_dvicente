import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosenpedidoComponent } from './productosenpedido.component';

describe('ProductosenpedidoComponent', () => {
  let component: ProductosenpedidoComponent;
  let fixture: ComponentFixture<ProductosenpedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosenpedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosenpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
