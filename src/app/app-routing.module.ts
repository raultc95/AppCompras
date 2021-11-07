import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ProveedoresComponent } from './proveedores/proveedores/proveedores.component';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './proveedores/addprovee/addprovee.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'proveedores', component:ProveedoresComponent},
  {path:'Inicio', component:InicioComponent},
  {path:'header', component:HeaderComponent},
  {path:'addproveedores',component:AddproveeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
