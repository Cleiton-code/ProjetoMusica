import { Musics } from './../Musics';
import { Router } from '@angular/router';
import { MusicsService } from './../musics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-music',
  templateUrl: './table-music.component.html',
  styleUrl: './table-music.component.css'
})
export class TableMusicComponent implements OnInit {
  musics: Musics[]= [];


  constructor(private service: MusicsService,
              private router: Router
  ){}

  ngOnInit(): void {
    this.loadMusic();
  }

  delete (music: Musics) {
    this.service.delete(music).subscribe({
      next: () => this.loadMusic()
    });
  }



loadMusic() {
  this.service.getMusic().subscribe({
    next: data => this.musics = data
  });
}

create() {
  this.router.navigate(['music'])
}

}
