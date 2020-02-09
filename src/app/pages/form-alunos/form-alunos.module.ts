import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAlunosPageRoutingModule } from './form-alunos-routing.module';

import { FormAlunosPage } from './form-alunos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAlunosPageRoutingModule
  ],
  declarations: [FormAlunosPage]
})
export class FormAlunosPageModule {}
