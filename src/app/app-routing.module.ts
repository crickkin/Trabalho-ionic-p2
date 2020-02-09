import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'aluno',
    loadChildren: () => import('./pages/aluno/aluno.module').then( m => m.AlunoPageModule)
  },
  {
    path: 'create-aluno',
    loadChildren: () => import('./pages/form-alunos/form-alunos.module').then( m => m.FormAlunosPageModule)
  },
  {
    path: 'form-alunos/:id',
    loadChildren: () => import('./pages/form-alunos/form-alunos.module').then( m => m.FormAlunosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
