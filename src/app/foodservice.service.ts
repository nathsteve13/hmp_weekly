import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor() { }

  addPasta(p_name: string, p_url: string, p_description: string, p_price: number, p_spicy: boolean = false)
  {
    this.pastas.push({name:p_name, url:p_url,
      description:p_description,price:p_price,spicy:p_spicy})
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
