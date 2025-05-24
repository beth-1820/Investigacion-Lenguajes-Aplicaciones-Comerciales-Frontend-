import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf, NgFor } from '@angular/common';
import { ArtistService } from '../../services/artist.service';  // si usas servicio
import { ArtistResult } from '../../model/artist-result.model';  // si usas servicio
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-artist-search',
  imports: [CommonModule, FormsModule], // ✅ IMPORTA FormsModule
    standalone: true, // ✅ REQUERIDO
  templateUrl: './artist-search.component.html',
  styleUrl: './artist-search.component.css'
})
export class ArtistSearchComponent {
  nombre: string = '';
  resultados: ArtistResult[] = [];
  buscando = false;
  error: string | null = null;

  constructor(private artistService: ArtistService) {}

  buscar() {
    this.buscando = true;
    this.error = null;
    this.artistService.searchArtists(this.nombre).subscribe({
      next: (data) => {
        this.resultados = data;
        this.buscando = false;
      },
      error: (err) => {
        this.error = 'Error al buscar artistas.';
        this.buscando = false;
      }
    });
  }
}