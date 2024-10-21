import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableMusicComponent } from './table-music/table-music.component';
import { ProductMusicComponent } from './product-music/product-music.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'musics', component: TableMusicComponent },
  {path: 'music/:id', component: ProductMusicComponent},
  {path: 'music', component: ProductMusicComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
