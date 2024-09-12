import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { PicturesService } from 'src/app/services/http-nasa/http-nasa.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BusquedaPage implements OnInit {
  public dateBuscada: string = "";

  constructor() { private picturesService: PicturesService
} {

}

ngOnInit() {
}

buscar() {
  this.cargando
  this.picturesService.getPictures(this.dateBuscada)
}

}
