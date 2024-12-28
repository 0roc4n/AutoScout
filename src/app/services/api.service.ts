import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  items: any[] = [
    {
      "name": "Argan Oil Shampoo",
      "price": 15.99,
      "details": "Moisturizing shampoo with natural argan oil.",
      "image": "assets/images/signup.png"
    },
    {
      "name": "Keratin Hair Mask",
      "price": 12.49,
      "details": "Deep conditioning treatment for damaged hair.",
      "image": "assets/images/signup.png"
    },
    {
      "name": "Volumizing Hairspray",
      "price": 8.99,
      "details": "Adds volume and hold to your hairstyle.",
      "image": "assets/images/signup.png"
    },
    {
      "name": "Heat Protectant Spray",
      "price": 10.99,
      "details": "Protects hair from heat damage up to 450°F.",
      "image": "assets/images/signup.png"
    },
    {
      "name": "Dry Shampoo Powder",
      "price": 9.99,
      "details": "Refreshes hair without washing.",
      "image": "assets/images/signup.png"
    },
    {
      "name": "Hair Serum with Vitamin E",
      "price": 14.99,
      "details": "Smooths frizz and adds shine.",
      "image": "assets/images/signup.png"
    },
    {
      "name": "Curl Enhancing Cream",
      "price": 11.49,
      "details": "Defines and hydrates curls.",
      "image": "assets/images/signup.png"
    },
    {
      "name": "Scalp Treatment Oil",
      "price": 13.99,
      "details": "Soothes dry, itchy scalp.",
      "image": "assets/images/signup.png"
    },
    {
      "name": "Texturizing Spray",
      "price": 12.99,
      "details": "Creates effortless beach waves.",
      "image": "assets/images/signup.png"
    },
    {
      "name": "Color-Safe Conditioner",
      "price": 16.49,
      "details": "Protects and nourishes color-treated hair.",
      "image": "assets/images/signup.png"
    },
    {
      "name": "Hair Growth Serum",
      "price": 18.99,
      "details": "Encourages thicker, fuller hair.",
      "image": "assets/images/signup.png"
    },
    {
      "name": "Sulfate-Free Shampoo",
      "price": 14.49,
      "details": "Gentle cleansing without stripping moisture.",
      "image": "assets/images/signup.png"
    },
    {
      "name": "Anti-Humidity Hair Spray",
      "price": 13.49,
      "details": "Fights frizz in humid conditions.",
      "image": "assets/images/signup.png"
    },
    {
      "name": "Leave-In Conditioner",
      "price": 10.99,
      "details": "Detangles and hydrates hair.",
      "image": "assets/images/signup.png"
    }
  ]
  

  constructor() { }
}
