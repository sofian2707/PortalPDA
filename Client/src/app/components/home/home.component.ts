import { Component, OnInit } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import *as bootstrap from 'bootstrap';
import { RouterLink } from '@angular/router';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


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




