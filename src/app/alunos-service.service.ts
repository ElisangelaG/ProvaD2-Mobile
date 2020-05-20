import { Injectable } from '@angular/core';
import { aluno } from './interfaceAluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosServiceService {
  aluno={
    nome: "Elisângela Cristine Oliveira Gonçalves",
    idade: "30",
    ra: "11724946"
  }
  constructor() { }
  getAluno(){
    return this.aluno;
  }
}
