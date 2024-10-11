import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Musics } from './Musics';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {
 url = 'http://localhost:3000/musics'

  constructor(private http: HttpClient) { }
  getMusic(): Observable<Musics[]> {
    return this.http.get<Musics[]>('http://localhost:3000/musics');
  }
  getMusicsById(id:number): Observable<Musics>{
    return this.http.get<Musics>(`${this.url}/${id}`);
  }

  delete(music: Musics): Observable<void>{
    return this.http.delete<void>(`${this.url}/${music.id}` + music.id);
  }

  update(music: Musics): Observable<Musics>{
    return this.http.put<Musics>(`${this.url}/${music.id}`, music);
  }

}
