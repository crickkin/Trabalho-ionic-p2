import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAlunosPage } from './form-alunos.page';

const routes: Routes = [
  {
    path: '',
    component: FormAlunosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAlunosPageRoutingModule {}
