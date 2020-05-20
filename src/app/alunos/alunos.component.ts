import { Component, OnInit } from '@angular/core';
import { aluno } from '../interfaceAluno';
import { AlunosServiceService } from '../alunos-service.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor(private alunoService:AlunosServiceService) { }
  aluno:aluno;
  aux:any;
  

  ngOnInit(): void {
    this.aux=this.alunoService.getAluno();
    console.log(this.aux);
    this.aluno=this.aux;
  }

}
