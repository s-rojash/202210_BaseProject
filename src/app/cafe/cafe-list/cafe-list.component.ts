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

  constructor(private cafeService: CafeService) { }

  getCafes(): void {
      this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
    });
  }

  ngOnInit() {
    this.getCafes();
  }


}
