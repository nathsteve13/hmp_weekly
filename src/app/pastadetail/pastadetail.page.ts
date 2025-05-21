import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodserviceService } from '../foodservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pastadetail',
  templateUrl: './pastadetail.page.html',
  styleUrls: ['./pastadetail.page.scss'],
  standalone: false
})
export class PastadetailPage implements OnInit {
  index=0;
  pasta: any = {};

  constructor(
    private route: ActivatedRoute,
    private foodservice: FoodserviceService,
    private router: Router

  ) {}

  goToEdit() {
    if (this.index !== undefined && this.index !== null) {
      this.router.navigate(['editpasta', this.index]);
    } else {
      console.error('Index is undefined or null');
    }
  }

  deletepasta(id:any) {
    this.foodservice.deletePasta(id).subscribe((response: any) => {
        if(response.result==='success'){
          alert("success")
          this.router.navigate(['/pasta']) 
        }
        else {
          alert(response.message)
        }
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.index = params['id'];
       this.foodservice.pastaDetail(4).subscribe(
        (data)=> {
         this.pasta=data;
        }
       );
     });
  }
  
}
