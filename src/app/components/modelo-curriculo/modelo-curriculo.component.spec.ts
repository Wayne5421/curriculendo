import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloCurriculoComponent } from './modelo-curriculo.component';

describe('ModeloCurriculoComponent', () => {
  let component: ModeloCurriculoComponent;
  let fixture: ComponentFixture<ModeloCurriculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModeloCurriculoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloCurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
