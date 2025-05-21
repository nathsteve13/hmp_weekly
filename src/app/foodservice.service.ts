import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor(private http: HttpClient) { }

  pastaList():Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422124/pastas.php");
  }

  searchPastas(keyword: string): Observable<any> {
    return this.http.get(`https://ubaya.xyz/hybrid/160422124/pastas.php?search=${keyword}`);
  }
  
  pastaDetail(id:number):Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160422124/pasta_detail.php?id="+id);
  }
  
  addPasta(p_name:string,p_url:string,p_description:string,p_price:number)
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('name', p_name);
    body.set('desc', p_description);
    body.set('url', p_url);
    body.set('price', p_price.toString());
    const urlEncodedData = body.toString();
    return this.http.post(
    "https://ubaya.xyz/hybrid/160422124/new_pasta.php", urlEncodedData, { headers });
  }



  pastas = [  
    {
      name: "SHRIMP SCAMPI",
      url: "https://www.unos.com/images/menus/pasta/Pasta_ShrimpScampi_8-20_300.jpg",
      description: "Shrimp sautéed with garlic, diced tomatoes and basil in a white wine sauce on vermicelli with parmesan",
      price: 42000,
      spicy: false
    },
    {
      name: "CHICKEN SPINOCOLI",
      url: "https://www.unos.com/images/menus/pasta/Pasta_ChickenSpinoccoli_8-20_300.jpg",
      description: "Our housemade chicken roulade filled with mozzarella, feta, broccoli, spinach, tomatoes, garlic and basil, on top of penne tossed with sautéed pesto, alfredo and our chunky vine-ripened tomato sauce.",
      price: 35000,
      spicy: false
    },
    {
      name: "CHICKEN & BROCCOLI ALFREDO",
      url: "https://www.unos.com/images/menus/whatsnew/CHICKEN_BROCCOLI_ALFREDO.png",
      description: "Cavatappi, chicken and broccoli tossed in alfredo sauce topped with parmesan cheese.",
      price: 38000,
      spicy: true
    },
    {
      name: "DEEP DISH MAC & CHEESE",
      url: "https://www.unos.com/images/menus/pasta/Pasta_MacCheese_8-20_300.jpg",
      description: "Ooey, gooey, cheesy goodness penne with aged cheddar and parmesan baked in a deep dish pan.",
      price: 42000,
      spicy: true
    },
    {
      name: "RATTLESNAKE PASTA",
      url: "https://www.unos.com/images/menus/pasta/Pasta_Rattlesnake_8-20_300.jpg",
      description: "Sautéed chicken and spicy alfredo tossed with penne pasta and topped with cheddar and slices of jalapeño. It may just bite back.",
      price: 36000,
      spicy: false
    },
  ];
}
