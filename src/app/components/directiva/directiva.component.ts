import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  listaCursos: string[] = ['TypeScript', 'JavaScript', 'Java EE', 'C#'];
  habilitar: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  setHababilitar(): void{
    this.habilitar = (this.habilitar === true) ? false : true;
  }

}
