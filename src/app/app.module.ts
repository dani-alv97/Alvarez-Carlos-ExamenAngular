import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesService } from './services/clientes.service';
import { ReservaService } from './services/reserva.service';
import { RestauranteService } from './services/restaurante.service';
import { RegistrarClienteComponent } from './cliente/registrar-cliente/registrar-cliente.component';
import { RegistrarRestauranteComponent } from './restaurante/registrar-restaurante/registrar-restaurante.component';
import { ListarReservaComponent } from './reserva/listar/listar-reserva/listar-reserva.component';
import { RegistrarReservaComponent } from './reserva/registrar/registrar-reserva/registrar-reserva.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListarReserva2Component } from './reserva/listar/listar-reserva2/listar-reserva2.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarClienteComponent,
    RegistrarRestauranteComponent,
    ListarReservaComponent,
    RegistrarReservaComponent,
    ListarReserva2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule, NgbModule
  ],
  providers: [ ClientesService, ReservaService, RestauranteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
