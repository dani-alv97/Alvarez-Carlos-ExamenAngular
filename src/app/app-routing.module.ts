import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarClienteComponent } from './cliente/registrar-cliente/registrar-cliente.component';
import { RegistrarReservaComponent } from './reserva/registrar/registrar-reserva/registrar-reserva.component';
import { ListarReservaComponent } from './reserva/listar/listar-reserva/listar-reserva.component';
import { RegistrarRestauranteComponent } from './restaurante/registrar-restaurante/registrar-restaurante.component';
import { ListarReserva2Component } from './reserva/listar/listar-reserva2/listar-reserva2.component';

const routes: Routes = [
  {path:"",redirectTo:"cliente", pathMatch:"full"},
  {path:"registrarcliente", component:RegistrarClienteComponent},
  {path:"registrarreserva", component:RegistrarReservaComponent},
  {path:"listarreserva", component:ListarReservaComponent},
  {path:"registrarrestaurante", component:RegistrarRestauranteComponent},
  {path:"listarreserva2", component:ListarReserva2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
