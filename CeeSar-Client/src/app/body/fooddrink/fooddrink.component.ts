import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './fooddrink.component.html',
  styleUrls: [
    './fooddrink.component.css'
  ]
})
export class FooddrinkComponent implements OnInit {

  foodinfo = [
    {img:'assets/images/f-salad.jpg', title:'SALAD', price :'3000'},
    {img:'assets/images/f_pizza..jpg', title:'Fresh Pizza', price :'12000'},
    {img:'assets/images/f-bowl.jpg', title:'SOUL', price :'2500'},
    {img:'assets/images/f-fish-curry.jpg', title:'Fresh Fish Curry', price :'5000'},
    {img:'assets/images/f-fish1.jpg', title:'Fish Curry', price :'5000'},
    {img:'assets/images/f-soul.jpg', title:'Fresh Soul', price :'1200'},
    {img:'assets/images/f-salad1.jpg', title:'Vegetable Salad', price :'3000'},
    {img:'assets/images/f_pizza..jpg', title:'Fresh Pizza', price :'12000'},

    {img:'assets/images/drink/d-stawberry-milkshake.jpg', title:'STRAWBERRY MILKSHAKE', price :'3000'},
    {img:'assets/images/drink/d-coffee-moose.jpg', title:'COFFEE MOOSE', price :'1200'},
    {img:'assets/images/drink/d-lemon.jpg', title:'LEMON JUICE', price :'2000'},
    {img:'assets/images/drink/d-stawberry.jpg', title:'STRAWBERRY JUICE', price :'2000'}
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
