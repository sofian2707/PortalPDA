import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Route, RouterModule } from '@angular/router';
import *as bootstrap from 'bootstrap';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-atracciones',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './atracciones.component.html',
  styleUrl: './atracciones.component.css'
})
export class AtraccionesComponent implements OnInit {

  ngOnInit(): void {
    this.onScroll(); // Llama a onScroll en la inicialización si se necesita
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event?: Event): void {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Cambia el valor según lo que necesites
      if (navbar) navbar.classList.add('scrolled');
    } else {
      if (navbar) navbar.classList.remove('scrolled');
    }}
    
}
