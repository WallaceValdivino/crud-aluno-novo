import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudant } from './estudant';

@Injectable({
  providedIn: 'root'
})
export class EstudantService {
   url = "http://localhost:3000/estudants";
  constructor(private http: HttpClient) {}
  getEstudants(): Observable<Estudant[]>{
  return this.http.get<Estudant[]>(this.url);
  }
  save(Estudant: Estudant): Observable<Estudant>{
    return this.http.post<Estudant>(this.url, Estudant);

  }
  edit(Estudant: Estudant): Observable<Estudant>{
    return this.http.put<Estudant>(`${this.url}/${Estudant.id}`, Estudant);
  }
  delete(Estudant: Estudant): Observable<void>{
    return this.http.delete<void>(`${this.url}/${Estudant.id}`);

  }


}
