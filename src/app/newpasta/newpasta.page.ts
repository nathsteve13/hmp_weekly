import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


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
  base64:any
  imageType:string='URL'

  constructor(private foodservice: FoodserviceService) {

  }

  ngOnInit() {
    this.arr_price=this.generateNumberOptions(30000,50000,2000)
    console.log(this.arr_price)
  }

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 50,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
    const base64Image = 'data:image/png;base64,' + image.base64String;
    this.base64 = base64Image;
  }

  generateNumberOptions(start: number, end: number, step: number): number[] {
      const options: number[] = [];
      for (let i = start; i <= end; i += step) {
        options.push(i);
      }
      return options;
  }


  submitpasta() {
    if (this.imageType === 'Camera') {
      this.new_url = "https://ubaya.xyz/hybrid/160422124/images/" + this.new_name + ".png";
      this.foodservice.uploadImage(this.new_name, this.base64).subscribe((response: any) => {
        if (response.result === 'success') {
          alert("photo uploaded");

          this.foodservice.addPasta(
            this.new_name,
            this.new_url,
            this.new_desc,
            this.new_price
          ).subscribe((res: any) => {
            if (res.result === 'success') {
              alert("success");
            } else {
              alert(res.message);
            }
          });

        } else {
          alert("Image upload failed: " + response.message);
        }
      });
    } else {
      this.foodservice.addPasta(
        this.new_name,
        this.new_url,
        this.new_desc,
        this.new_price
      ).subscribe((res: any) => {
        if (res.result === 'success') {
          alert("success");
        } else {
          alert(res.message);
        }
      });
    }
  }





}
