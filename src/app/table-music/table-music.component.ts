import { MusicsService } from './../musics.service';
import { music } from '../musics';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-music',
  templateUrl: './table-music.component.html',
  styleUrl: './table-music.component.css'
})
export class TableMusicComponent implements OnInit {
  musics: music[] = [];


  constructor(private MusicsService: MusicsService){}

  ngOnInit(): void {
    this.loadMusics();
  }

  delete (music: music) {
    this.MusicsService.delete(music).subscribe({
      next: () => this.loadMusics()
    });
  }



loadMusics() {
  this.MusicsService.getMusics().subscribe(data => {
    this.musics = data;
  });
}

}
