import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { ApiAlunosService } from 'src/app/service/api-alunos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {
  alunos: Observable<any>;
  aluno: Aluno;

  constructor(private router: Router, private api: ApiAlunosService) {
    this.getAll();
  }

  async getAll() {
    this.alunos = this.api.getAll();
    this.alunos.subscribe(r => console.log(r) );
  }

  addAluno() {
    this.router.navigate(['create-aluno']);
  }

  editAluno(id: number) {
    console.log(id);
    this.router.navigate(['form-alunos', id]);
  }

  removeAluno(id: number) {
    this.api.delete(id).subscribe(data => { this.getAll(); } );
  }

  back() {
    console.log('yow');
    this.router.navigate(['academico']);
  }

  ngOnInit() {
  }

}
