import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { music } from './musics';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {
  private apiUrl = 'http://localhost:3000/musics';

  constructor(private http: HttpClient) { }
  getMusics(): Observable<music[]> {
    return this.http.get<music[]>(this.apiUrl);
  }
  delete(music: music): Observable<void>{
    return this.http.delete<void>('http://localhost:3000/musics/' + music.id);
  }
}
