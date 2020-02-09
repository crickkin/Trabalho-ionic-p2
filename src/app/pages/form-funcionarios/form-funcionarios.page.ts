import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Funcionario } from '../../models/funcionario';
import { ApiFuncionariosService } from '../../service/api-funcionarios.service';

@Component({
  selector: 'app-form-funcionarios',
  templateUrl: './form-funcionarios.page.html',
  styleUrls: ['./form-funcionarios.page.scss'],
})
export class FormFuncionariosPage implements OnInit {
  funcionario: Funcionario;
  id = 0;

  constructor(private actRouter: ActivatedRoute, private router: Router, private api: ApiFuncionariosService) {
    this.funcionario = new Funcionario();
  }

  save() {
    console.log(this.id);
    if (this.id === undefined) {
      this.api.create(this.funcionario).subscribe(data => this.ionViewWillEnter());
    } else {
      this.api.update(this.id, this.funcionario).subscribe(data => this.ionViewWillEnter());
    }
    this.router.navigateByUrl('/funcionarios');
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.actRouter.params.subscribe(params => {
      this.id = params.id;
      console.log(`Número de matrícula do funcionario: ${this.id}`);
    });
    if (this.id !== undefined) {
      this.api.get(this.id).subscribe(res => {
        this.funcionario = res;
      });
    }
  }

}
