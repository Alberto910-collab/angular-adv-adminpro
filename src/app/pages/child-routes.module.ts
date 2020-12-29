import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from '../guards/admin.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const childRoutes: Routes = [
  { path: '', component: DashboardComponent, data: { titulo: 'Dashboard'} },
  { path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBar'} },
  { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Grafica #1'} },
  { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes'} },
  { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil de usuario'} },
  { path: 'buscar/:termino', component: BusquedaComponent, data: { titulo: 'Busquedas'} },

  //Mantenimientos
  { path: 'hospitales', component: HospitalesComponent, data: { titulo: 'Mantenimiento de hospitales'} },
  { path: 'medicos', component: MedicosComponent, data: { titulo: 'Mantenimiento de Medicos'} },
  { path: 'medico/:id', component: MedicoComponent, data: { titulo: 'Mantenimiento de Medicos'} },

  //Rutas de admin
  { path: 'usuarios', canActivate: [AdminGuard], component: UsuariosComponent, data: { titulo: 'Mantenimiento de usuarios'} },
]

@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
