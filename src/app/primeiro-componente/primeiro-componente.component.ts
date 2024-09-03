import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {

  imagem:string = 'vinijr.jpg'

  alterarImagem() {
    if(this.imagem === 'vinijr.jpg') {
      this.imagem = 'rodri.jpg'
    } else if(this.imagem === 'rodri.jpg') {
      this.imagem = 'mbappe.jpg'
    } else if(this.imagem === 'mbappe.jpg') {
      this.imagem = 'toni.jpg'
    } else if(this.imagem === 'toni.jpg') {
      this.imagem = 'bellingham.jpg'
    } else if(this.imagem === 'bellingham.jpg') {
      this.imagem = 'vinijr.jpg'
    } else {this.imagem = 'vinijr.jpg'}
  }

}
