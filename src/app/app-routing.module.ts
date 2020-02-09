import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'academico',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
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
  },
  {
    path: 'professores',
    loadChildren: () => import('./pages/professores/professores.module').then( m => m.ProfessoresPageModule)
  },
  {
    path: 'form-professores',
    loadChildren: () => import('./pages/form-professores/form-professores.module').then( m => m.FormProfessoresPageModule)
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./pages/funcionarios/funcionarios.module').then( m => m.FuncionariosPageModule)
  },
  {
    path: 'form-funcionarios',
    loadChildren: () => import('./pages/form-funcionarios/form-funcionarios.module').then( m => m.FormFuncionariosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
