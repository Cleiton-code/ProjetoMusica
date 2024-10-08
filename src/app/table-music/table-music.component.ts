import { Router } from '@angular/router';
import { MusicsService } from './../musics.service';
import { Music } from '../musics';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-music',
  templateUrl: './table-music.component.html',
  styleUrl: './table-music.component.css'
})
export class TableMusicComponent implements OnInit {
  musics: Music[] = [];


  constructor(private MusicsService: MusicsService,
              private router: Router
  ){}

  ngOnInit(): void {
    this.loadMusics();
  }

  delete (music: Music) {
    this.MusicsService.delete(music).subscribe({
      next: () => this.loadMusics()
    });
  }



loadMusics() {
  this.MusicsService.getMusics().subscribe(data => {
    this.musics = data;
  });
}

create() {
  this.router.navigate(['music'])
}

}
