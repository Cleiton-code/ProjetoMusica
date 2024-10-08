import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from './musics';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {
  [x: string]: any;
  private apiUrl = 'http://localhost:3000/musics';

  constructor(private http: HttpClient) { }

  getMusics(): Observable<Music[]> {
    return this.http.get<Music[]>('http://localhost:3000/musics');
  }
  getMusicsById(id:number): Observable<Music>{
    return this.http.get<Music>('http://localhost:3000/musics/' + id);
  }

  delete(music: Music): Observable<void>{
    return this.http.delete<void>('http://localhost:3000/musics/' + music.id);
  }

  update(music: Music): Observable<Music>{
    return this.http.put<Music>('http://localhost:3000/musics/' + music.id, music);
  }

}
