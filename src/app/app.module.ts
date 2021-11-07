import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProveedoresService } from './servicios/proveedores.service'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {path:'', component:InicioComponent},
  {path:'proveedores', component:ProveedoresComponent},
  {path:'**',component:InicioComponent},
  {path:'addprovee', component:AddproveeComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
