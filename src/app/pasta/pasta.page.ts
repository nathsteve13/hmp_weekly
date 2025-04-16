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
  

  pastas:any[]=[]
  
  constructor(private foodservice: FoodserviceService) { }

  ngOnInit() {
    this.pastas=this.foodservice.pastas
  }

  chunkArray(array: any[], chunkSize: number): any[] {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  }
}
