import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../../models/funcionario';
import { ApiFuncionariosService } from '../../service/api-funcionarios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.page.html',
  styleUrls: ['./funcionarios.page.scss'],
})
export class FuncionariosPage implements OnInit {
  funcionarios: Observable<any>;
  funcionario: Funcionario;

  constructor(private router: Router, private api: ApiFuncionariosService) {
    this.getAll();
  }

  async getAll() {
    this.funcionarios = this.api.getAll();
  }

  addFuncionario() {
    this.router.navigate(['create-funcionario']);
  }

  editFuncionario(id: number) {
    this.router.navigate(['form-funcionarios', id]);
  }

  removeFuncionario(id: number) {
    this.api.delete(id).subscribe(data => this.getAll());
  }

  back() {
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
