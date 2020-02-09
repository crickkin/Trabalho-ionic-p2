import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormFuncionariosPageRoutingModule } from './form-funcionarios-routing.module';

import { FormFuncionariosPage } from './form-funcionarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormFuncionariosPageRoutingModule
  ],
  declarations: [FormFuncionariosPage]
})
export class FormFuncionariosPageModule {}
