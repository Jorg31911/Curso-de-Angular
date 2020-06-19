import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path: '/', component : InicioComponent },
  {path: '/proveedores', component: ProveedoresComponent}
];


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
