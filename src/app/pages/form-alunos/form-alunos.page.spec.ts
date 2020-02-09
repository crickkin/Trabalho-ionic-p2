import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormAlunosPage } from './form-alunos.page';

describe('FormAlunosPage', () => {
  let component: FormAlunosPage;
  let fixture: ComponentFixture<FormAlunosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAlunosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormAlunosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
