
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MusicsService } from "../musics.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-product-music',
  templateUrl: './product-music.component.html',
  styleUrl: './product-music.component.css'
})

export class ProductMusicComponent implements OnInit{

  formGroupMusics: FormGroup;
  constructor(private router: Router,
              private ActiveRoute: ActivatedRoute,
              private service: MusicsService,
              private formbuilder: FormBuilder ){
                this.formGroupMusics = formbuilder.group({
                  id: [''],
                  name: [''],
                  price: [''],
                  category: [''],
                  artist: [''],
                  year: ['']

                });

              }
  ngOnInit(){
    const id = Number(this.ActiveRoute.snapshot.paramMap.get("id"));
    this.loadMusics(id);
  }

  loadMusics(id: number){
    this.service.getMusicsById(id).subscribe({
      next: data => this.formGroupMusics.setValue(data)
    });
  }

  update(){
    this.service.update(this.formGroupMusics.value).subscribe({
      next: () => this.router.navigate(['musics'])
    });
  }


}
