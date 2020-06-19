import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { ProveedoresService } from './servicios/proveedores.service';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: '**', component: InicioComponent}
  ];


@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent],
})
export class AppModule { }
