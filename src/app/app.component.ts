import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listEstudiantes: any[] = [
    {nombre: 'Nemesis Sierra', estado: 'Aprobado' },
    {nombre: 'Vanessa Martinez', estado: 'Aprobado' },
    {nombre: 'Daniel Moreno', estado: 'Reprobado'},
    {nombre: 'Jose Torres', estado: 'Aprobado'}

  ]
  
}
