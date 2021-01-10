import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  paises: any =[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( data => this.paises = data );
  }

  drop( evento: CdkDragDrop<any> ): void {
    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }

}
