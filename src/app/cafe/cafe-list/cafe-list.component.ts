import { CafeService } from '../cafe.service';
import { Cafe } from './../cafe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  contador: Map<string, number> = new Map<string, number>();

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
      this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
      this.crearteContador();
    });
  }

  ngOnInit() {
    this.getCafes();
  }

  crearteContador() {
    this.cafes.forEach(cafe => {
      if(this.contador.get(cafe.tipo) != null){
        let cantidad1 = this.contador.get(cafe.tipo) as number;
        cantidad1++;
        this.contador.set(cafe.tipo, cantidad1)
      }
      else {
        this.contador.set(cafe.tipo, 1)
      }
    });
  }

}
