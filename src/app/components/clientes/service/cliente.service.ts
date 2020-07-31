import { Injectable } from "@angular/core";
import { CLIENTES } from "../clientes.json";
import { Cliente } from "../model/cliente";
import { Observable, of, from } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  private urlEndPoint: string =
    "https://private-7fd2b-listapersona.apiary-mock.com/estudiantes";

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlEndPoint);
  }
}
