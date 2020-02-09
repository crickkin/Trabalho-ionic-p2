import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormFuncionariosPage } from './form-funcionarios.page';

const routes: Routes = [
  {
    path: '',
    component: FormFuncionariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormFuncionariosPageRoutingModule {}
