import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-atracciones',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './atracciones.component.html',
  styleUrl: './atracciones.component.css'
})
export class AtraccionesComponent {

}
