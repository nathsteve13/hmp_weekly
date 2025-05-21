import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-editpasta',
  templateUrl: './editpasta.page.html',
  styleUrls: ['./editpasta.page.scss'],
  standalone: false
})
export class EditpastaPage implements OnInit {

  id: number = 0;
  e_name: string = "";
  e_desc: string = "";
  e_price: number = 0;
  e_url: string = "";

  constructor(
    private route: ActivatedRoute,
    private foodservice: FoodserviceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.foodservice.pastaDetail(this.id).subscribe(
        (data) => {
          this.e_name = data.name;
          this.e_desc = data.description;
          this.e_price = data.price;
          this.e_url = data.url;
        },
        (error) => {
          console.error('Failed to load pasta details', error);
        }
      );
    });
  }

  updatepasta() {
    this.foodservice.updatePasta(
      this.id,this.e_name,this.e_url,this.e_desc,this.e_price).subscribe(
        (response: any) => {
          if(response.result==='success'){
          alert("success")
          this.router.navigate(['/pasta'])
        }
        else
        {
          alert(response.message)
        }
    });
  }

}
