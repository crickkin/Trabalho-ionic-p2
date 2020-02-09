import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professor } from 'src/app/models/professor';
import { ApiProfessoresService } from '../../service/api-professores.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.page.html',
  styleUrls: ['./professores.page.scss'],
})
export class ProfessoresPage implements OnInit {
  professores: Observable<any>;
  professor: Professor;

  constructor(private router: Router, private api: ApiProfessoresService) {
    this.getAll();
  }

  async getAll() {
    this.professores = this.api.getAll();
  }

  addProfessor() {
    this.router.navigate(['create-professor']);
  }

  editProfessor(id: number) {
    this.router.navigate(['form-professores', id]);
  }

  removeProfessor(id: number) {
    this.api.delete(id).subscribe(data => { this.getAll(); });
  }

  back() {
    this.router.navigate(['']);
  }

  ngOnInit() {
  }

}
