import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlojamientoComponent } from './components/alojamiento/alojamiento.component';
import { AtraccionesComponent } from './components/atracciones/atracciones.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'alojamientos', component: AlojamientoComponent},
    { path: 'atracciones', component: AtraccionesComponent}, // Ruta para el componente Home
    { path: 'restaurantes', component: RestaurantComponent},
    { path: 'noticias', component: NoticiasComponent},
    { path: 'admin-portalpda', component: AdminComponent}
    // Otras rutas aquí
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
  