import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Route, RouterModule } from '@angular/router';
import *as bootstrap from 'bootstrap';

@Component({
  selector: 'app-alojamiento',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './alojamiento.component.html',
  styleUrl: './alojamiento.component.css'
})
export class AlojamientoComponent implements OnInit {

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