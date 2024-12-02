import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'app-see-place',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './see-place.component.html',
  styleUrl: './see-place.component.css'
})
export class SeePlaceComponent implements OnInit  {
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
