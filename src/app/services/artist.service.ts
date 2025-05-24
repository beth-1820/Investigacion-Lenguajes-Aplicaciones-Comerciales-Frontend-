import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistResult } from '../../app/model/artist-result.model';
import { environment } from '../../environments/environment'; // Import environment
 // si usas servicio
@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private baseUrl = `${environment.apiUrl}/artists`;

  constructor(private http: HttpClient) {}

  searchArtists(nombre: string): Observable<ArtistResult[]> {
    const params = new HttpParams().set('nombre', nombre);
    return this.http.get<ArtistResult[]>(`${this.baseUrl}/search`, { params });
  }
}
