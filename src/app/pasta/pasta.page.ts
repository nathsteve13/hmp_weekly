import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
  standalone: false,
})
export class PastaPage implements OnInit {
  jenistampilan: string = 'accordion';

  pastas: any[] = [];
  filteredPastas: any[] = [];
  searchText: string = '';

  constructor(private foodservice: FoodserviceService) {}

  ngOnInit() {
    this.foodservice.pastaList().subscribe((data) => {
      this.pastas = data;
      this.filteredPastas = data; // inisialisasi awal
    });
  }

  ionViewWillEnter() {
    this.foodservice.pastaList().subscribe((data) => {
      this.pastas = data;
    })
  }


  onSearchChange() {
    const keyword = this.searchText.toLowerCase();
    this.filteredPastas = this.pastas.filter(pasta =>
      pasta.name.toLowerCase().includes(keyword)
    );
  }

  chunkArray(array: any[], chunkSize: number): any[] {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }
}
