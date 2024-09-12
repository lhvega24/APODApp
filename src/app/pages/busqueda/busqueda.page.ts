import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { PicturesService } from 'src/app/services/http-nasa/http-nasa.service';
import { Apod } from 'src/app/interfaces/apod';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BusquedaPage implements OnInit {
  public pictures: Apod[] = [];
  public dateBuscada: string = "";
  public cargando: boolean = false;
  constructor(private picturesService: PicturesService) { }

  ngOnInit() {
  }

  buscar() {
    this.cargando = true;
    this.picturesService.getPictures(this.dateBuscada).subscribe(data => {
      this.cargando = false;
      if (data.Response === 'False') { }
      else {
        this.pictures = data.Search;
      }
    })
  }

}



