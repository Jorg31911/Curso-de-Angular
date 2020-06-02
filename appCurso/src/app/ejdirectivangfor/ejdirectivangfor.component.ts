import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivangfor.component.html',
  styleUrls: ['./ejdirectivangfor.component.css']
})
export class EjdirectivangforComponent implements OnInit {

  constructor() {
    this.cursos = ['Angular','HTML','CSS'];
   }

  ngOnInit(): void {
  }

}
