import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from './categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private baseUrl = "http://localhost:8080/api/Categorie";

  constructor(private httpClient : HttpClient) { }

getCategorieById(id : number |undefined): Observable<Categorie>{
return this.httpClient.get<Categorie>(`${this.baseUrl}/id/${id}`)
}

getCategoriesList() : Observable<Categorie[]>{
  return this.httpClient.get<Categorie[]>(`${this.baseUrl}`);
}

createCategorie(categorie : Categorie): Observable<Object>{
return this.httpClient.post(`${this.baseUrl}`, categorie);
}

deleteCategorie(id:number | undefined) : Observable<Object>{
return this.httpClient.delete(`${this.baseUrl}/id/${id}`);
}

updateCategorie(id:number|undefined, categorie : Categorie): Observable<Object>{
return this.httpClient.put(`${this.baseUrl}/id/${id}`,categorie);

}

}
