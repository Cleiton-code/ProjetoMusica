import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MusicsService } from "../musics.service";

@Component({
  selector: 'app-product-music',
  templateUrl: './product-music.component.html',
  styleUrl: './product-music.component.css'
})

export class ProductMusicComponent implements OnInit{

  constructor(private router: Router,
              private ActiveRoute: ActivatedRoute,
              private service: MusicsService){

              }
  ngOnInit(){
    const id = Number(this.ActiveRoute.snapshot.paramMap.get("id"));
    this.loadMusics(id);
  }

  loadMusics(id: number){
    this.service.getMusicsById(id).subscribe({
      next: data => alert(data.name)
    });
  }


}
