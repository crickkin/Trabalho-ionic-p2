import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Professor } from 'src/app/models/professor';
import { ApiProfessoresService } from '../../service/api-professores.service';

@Component({
  selector: 'app-form-professores',
  templateUrl: './form-professores.page.html',
  styleUrls: ['./form-professores.page.scss'],
})
export class FormProfessoresPage implements OnInit {
  professor: Professor;
  id = 0;

  constructor(private actRouter: ActivatedRoute, private router: Router, private api: ApiProfessoresService) {
    this.professor = new Professor();
  }

  save() {
    console.log(this.id);
    if (this.id === undefined) {
      this.api.create(this.professor).subscribe(data => { this.ionViewWillEnter(); });
    } else {
      this.api.update(this.id, this.professor).subscribe( data => this.ionViewWillEnter() );
    }
    this.router.navigateByUrl('/professores');
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.actRouter.params.subscribe(params => {
      this.id = params.id;
      console.log(`Número de matrícula do professor: ${this.id}`);
    });
    if (this.id !== undefined) {
      this.api.get(this.id).subscribe(res => {
        this.professor = res;
      });
    }
  }

}
