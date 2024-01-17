import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appareil } from './appareil';
import { Categorie } from './categorie';
import { Image } from './image';
@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  constructor(private httpClient : HttpClient) { }

  private baseUrl = "http://localhost:8080/api/Appareil";
  private baseUrl1 = "http://localhost:8080/api/Categorie";

  getCategorieById(id : number |undefined): Observable<Categorie>{
    return this.httpClient.get<Categorie>(`${this.baseUrl1}/id/${id}`)
    }

  getAppareilById(id : number |undefined): Observable<Appareil>{
    return this.httpClient.get<Appareil>(`${this.baseUrl}/id/${id}`)
    }

    getAppareilsList() : Observable<Appareil[]>{
      return this.httpClient.get<Appareil[]>(`${this.baseUrl}`);
    }

    deleteAppareil(id:number | undefined) : Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/id/${id}`);
      }

      createAppareil(appareil : Appareil): Observable<Object>{
          return this.httpClient.post(`${this.baseUrl}`, appareil);

        }

        updateAppareil(id:number|undefined, appareil : Appareil): Observable<Object>{
          return this.httpClient.put(`${this.baseUrl}/id/${id}`,appareil);

          }

          switchAllOn():Observable<void>{
            return this.httpClient.post<void>(`${this.baseUrl}/switchAllOn`,{});
          }

          switchAllOff():Observable<void>{
            return this.httpClient.post<void>(`${this.baseUrl}/switchAllOff`,{});
          }






  imageURL = 'http://localhost:8080/cloudinary/';

  public list(): Observable<Appareil[]> {
    return this.httpClient.get<Appareil[]>(this.imageURL + 'list');
  }
  public upload(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('multipartFile', image);
    return this.httpClient.post<any>(this.imageURL + 'upload', formData);
  }
  public delete(id: any): Observable<any> {
    return this.httpClient.delete<any>(this.imageURL + `delete/${id}`);
  }

}
