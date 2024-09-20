import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {


  integrantes = [
    { nome: 'Geovana', imagem: 'integrantes/geo.jpeg' },
    { nome: 'Luiza', imagem: 'integrantes/luiza.jpeg' },
    { nome: 'Maria', imagem: 'integrantes/maria.jpeg' },
    { nome: 'Nicole', imagem: 'integrantes/nina.jpeg' }
  ];

}
