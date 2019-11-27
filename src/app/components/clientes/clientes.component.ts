import { Component, OnInit } from '@angular/core';
import { Cliente } from './model/cliente';
import { ClienteService } from './service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clientes = this.clienteService.getClientes();
  }

}
