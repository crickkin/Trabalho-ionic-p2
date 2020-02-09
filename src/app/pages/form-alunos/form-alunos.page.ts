import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from '../../models/aluno';
import { ApiAlunosService } from '../../service/api-alunos.service';

@Component({
  selector: 'app-form-alunos',
  templateUrl: './form-alunos.page.html',
  styleUrls: ['./form-alunos.page.scss'],
})
export class FormAlunosPage implements OnInit {
  aluno: Aluno;
  id = 0;

  constructor(private actRouter: ActivatedRoute, private router: Router, private api: ApiAlunosService) {
    this.aluno = new Aluno();
  }

  save() {
    console.log(this.id);
    if (this.id === undefined) {
      this.api.create(this.aluno).subscribe(data => { this.ionViewWillEnter(); });
    } else {
      this.api.update(this.id, this.aluno).subscribe(data => { this.ionViewWillEnter(); });
    }
    this.router.navigateByUrl('/aluno');
  }

  cancel() {
    this.router.navigateByUrl('/aluno');
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.actRouter.params.subscribe(params => {
      this.id = params.id;
      console.log(`Número de matrícula de aluno: ${this.id}`);
    });
    if (this.id !== undefined) {
      this.api.get(this.id).subscribe(res => {
        this.aluno = res;
      });
    }
  }
}
