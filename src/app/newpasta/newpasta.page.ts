import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';


@Component({
  selector: 'app-newpasta',
  templateUrl: './newpasta.page.html',
  styleUrls: ['./newpasta.page.scss'],
  standalone: false,
})
export class NewpastaPage implements OnInit {
  new_name: string = '';
  new_desc: string = '';
  new_price: number = 0;
  new_url: string = '';
  new_spicy: boolean = false;
  arr_price:number[] = []
  public alertButtons = ['OK']

  constructor(private foodservice: FoodserviceService) {
    
  }

  ngOnInit() {
    this.arr_price=this.generateNumberOptions(30000,50000,2000)
    console.log(this.arr_price)
  }

  generateNumberOptions(start: number, end: number, step: number): number[] {
      const options: number[] = [];
      for (let i = start; i <= end; i += step) {
        options.push(i);
      }
      return options;
  }


  submitpasta()
  {
    this.foodservice.addPasta(this.new_name,            
        this.new_url,this.new_desc,this.new_price).subscribe((response: any) => {
          if(response.result==='success'){
            alert("success")
          }
          else
          {
            alert(response.message)
          }
    });
  }


  

}
