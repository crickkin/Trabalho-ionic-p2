import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormFuncionariosPage } from './form-funcionarios.page';

describe('FormFuncionariosPage', () => {
  let component: FormFuncionariosPage;
  let fixture: ComponentFixture<FormFuncionariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFuncionariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormFuncionariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
