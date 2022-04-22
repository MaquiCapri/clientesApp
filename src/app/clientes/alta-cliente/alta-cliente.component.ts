import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from '../cliente.model';
import { ClientesService } from './../clientes.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
  cliente: any;
  grupos:any[];
  
  constructor(private clientesService: ClientesService) {
    this.cliente=clientesService.nuevoCliente();
    this.grupos=clientesService.getGrupos();
   }

  ngOnInit(): void {
    
    }
    nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
    }
  
  }



 
  
 
