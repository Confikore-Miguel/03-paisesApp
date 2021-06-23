import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { PaisesREST } from '../interfaces/paises.interface';
@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _url:string = 'https://restcountries.eu/rest/v2';

  constructor( private _http:HttpClient) { }
  
  buscarPorPais( termino:string):Observable<PaisesREST[]>{
    return this._http.get<PaisesREST[]>(this._url+'/name/'+ termino);
  }
  buscarPorCapital( termino:string):Observable<PaisesREST[]>{
    return this._http.get<PaisesREST[]>(this._url+'/capital/'+ termino);
  }
  buscarPorCodigo( termino:string):Observable<PaisesREST[]>{
    return this._http.get<PaisesREST[]>(this._url+'/alpha/'+ termino);
  }
  buscarPorRegion( termino:string):Observable<PaisesREST[]>{
    return this._http.get<PaisesREST[]>(this._url+'/region/'+ termino);
  }
}
