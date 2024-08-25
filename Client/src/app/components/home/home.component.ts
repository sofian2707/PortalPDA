import { Component, OnInit } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import *as bootstrap from 'bootstrap';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  ngOnInit(): void {
   
  }

 }




