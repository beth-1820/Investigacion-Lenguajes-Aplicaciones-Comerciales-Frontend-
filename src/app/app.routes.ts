import { Routes } from '@angular/router';

import{ArtistSearchComponent} from './artistas/artista-search-reactive/artist-search.component';

export const routes: Routes = [
    { path: '', redirectTo: 'buscar-artista', pathMatch: 'full' },
  { path: 'buscar-artista', component: ArtistSearchComponent },
  { path: '**', redirectTo: 'buscar-artista' }
];
