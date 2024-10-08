import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableMusicComponent } from './table-music/table-music.component';


const routes: Routes = [
  {path: '', redirectTo: '/musics', pathMatch: 'full'},
  {path: 'musics', component: TableMusicComponent },
  {path: 'music/:id', component: TableMusicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
